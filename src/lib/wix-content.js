/**
 * Converts Wix Draft.js content (JSON string) to HTML.
 * Handles common block + inline styling used by Wix Blog.
 */
export function draftJsToHtml(contentString) {
  if (!contentString) return "";

  let parsed;
  try {
    parsed =
      typeof contentString === "string"
        ? JSON.parse(contentString)
        : contentString;
  } catch {
    return `<p>${escapeHtml(String(contentString))}</p>`;
  }

  const blocks = Array.isArray(parsed?.blocks) ? parsed.blocks : [];
  const entityMap = parsed?.entityMap ?? {};
  if (!blocks.length) return "";

  const html = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.type === "unordered-list-item") {
      const items = [];
      while (i < blocks.length && blocks[i].type === "unordered-list-item") {
        items.push(`<li>${applyInlineStyles(blocks[i], entityMap)}</li>`);
        i++;
      }
      html.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (block.type === "ordered-list-item") {
      const items = [];
      while (i < blocks.length && blocks[i].type === "ordered-list-item") {
        items.push(`<li>${applyInlineStyles(blocks[i], entityMap)}</li>`);
        i++;
      }
      html.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    html.push(blockToHtml(block, entityMap));
    i++;
  }

  return html.filter(Boolean).join("\n");
}

function blockToHtml(block, entityMap) {
  const type = block?.type ?? "unstyled";
  const text = block?.text ?? "";
  const entityRanges = block?.entityRanges ?? [];

  // Draft.js often stores spacer rows as empty unstyled blocks.
  // Render a lightweight line break instead of a full paragraph to
  // avoid extra vertical gaps from `.article-prose p` margins.
  if (!text.trim() && type !== "atomic") return "";

  const inner = applyInlineStyles(block, entityMap);

  switch (type) {
    case "header-one":
      return `<h1>${inner}</h1>`;
    case "header-two":
      return `<h2>${inner}</h2>`;
    case "header-three":
      return `<h3>${inner}</h3>`;
    case "header-four":
      return `<h4>${inner}</h4>`;
    case "blockquote":
      return `<blockquote>${inner}</blockquote>`;
    case "code-block":
      return `<pre><code>${inner}</code></pre>`;
    case "atomic": {
      const entityRange = entityRanges?.[0];
      if (!entityRange) return "";
      const entity = getEntity(entityMap, entityRange.key);
      if (!entity) return "";
      return entityToHtml(entity);
    }
    case "unstyled":
    default:
      return `<p>${inner}</p>`;
  }
}

function entityToHtml(entity) {
  switch (entity?.type) {
    case "wix-draft-plugin-image": {
      const src = entity?.data?.src ?? {};
      const imageId = src.id ?? src.file_name;
      if (!imageId) return "";

      const url = `https://static.wixstatic.com/media/${encodeURIComponent(
        imageId
      )}`;
      const alignment = entity?.data?.config?.alignment ?? "center";
      const alignClass =
        alignment === "left"
          ? "mr-auto"
          : alignment === "right"
          ? "ml-auto"
          : "mx-auto";

      return `<figure class="my-6 ${alignClass}">
  <img src="${escapeAttr(url)}" alt="" class="rounded-lg max-w-full" width="${
        src.width ?? ""
      }" height="${src.height ?? ""}" />
</figure>`;
    }

    case "wix-draft-plugin-video": {
      const url = entity?.data?.src?.url ?? entity?.data?.url;
      if (!url) return "";
      return `<video src="${escapeAttr(
        url
      )}" controls class="w-full rounded-lg my-6"></video>`;
    }

    case "wix-draft-plugin-gallery": {
      const items = Array.isArray(entity?.data?.items) ? entity.data.items : [];
      if (!items.length) return "";
      const imgs = items
        .map((item) => {
          const itemUrl = item?.url
            ? `https://static.wixstatic.com/media/${encodeURIComponent(
                item.url
              )}`
            : "";
          if (!itemUrl) return "";
          return `<img src="${escapeAttr(itemUrl)}" alt="${escapeAttr(
            item?.title ?? ""
          )}" class="rounded-lg" />`;
        })
        .filter(Boolean)
        .join("");
      return `<div class="grid grid-cols-2 gap-2 my-6">${imgs}</div>`;
    }

    case "LINK": {
      const url = entity?.data?.url ?? "#";
      return `<a href="${escapeAttr(
        url
      )}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>`;
    }

    default:
      return "";
  }
}

function applyInlineStyles(block, entityMap) {
  const text = block?.text ?? "";
  const inlineStyleRanges = block?.inlineStyleRanges ?? [];
  const entityRanges = block?.entityRanges ?? [];
  if (!text) return "";

  const chars = text.split("").map((char) => ({
    char,
    bold: false,
    italic: false,
    underline: false,
    color: null,
    linkKey: null,
  }));

  for (const range of inlineStyleRanges) {
    const style = range?.style;
    const offset = Number(range?.offset ?? 0);
    const length = Number(range?.length ?? 0);
    for (
      let i = offset;
      i < offset + length && i < chars.length && i >= 0;
      i++
    ) {
      if (style === "BOLD") chars[i].bold = true;
      else if (style === "ITALIC") chars[i].italic = true;
      else if (style === "UNDERLINE") chars[i].underline = true;
      else if (typeof style === "string" && style.startsWith("{")) {
        try {
          const parsed = JSON.parse(style);
          if (parsed?.FG) chars[i].color = parsed.FG;
        } catch {
          // ignore malformed custom style json
        }
      }
    }
  }

  for (const range of entityRanges) {
    const key = range?.key;
    const offset = Number(range?.offset ?? 0);
    const length = Number(range?.length ?? 0);
    const entity = getEntity(entityMap, key);
    if (entity?.type === "LINK") {
      for (
        let i = offset;
        i < offset + length && i < chars.length && i >= 0;
        i++
      ) {
        chars[i].linkKey = key;
      }
    }
  }

  let result = "";
  let j = 0;

  while (j < chars.length) {
    const c = chars[j];
    let end = j + 1;
    while (
      end < chars.length &&
      chars[end].bold === c.bold &&
      chars[end].italic === c.italic &&
      chars[end].underline === c.underline &&
      chars[end].color === c.color &&
      chars[end].linkKey === c.linkKey
    ) {
      end++;
    }

    let segment = chars
      .slice(j, end)
      .map((x) => escapeHtml(x.char))
      .join("");

    if (c.bold) segment = `<strong>${segment}</strong>`;
    if (c.italic) segment = `<em>${segment}</em>`;
    if (c.underline) segment = `<u>${segment}</u>`;
    if (c.color) segment = `<span style="color:${escapeAttr(c.color)}">${segment}</span>`;
    if (c.linkKey !== null) {
      const entity = getEntity(entityMap, c.linkKey);
      const href = entity?.data?.url ?? "#";
      const targetBlank = entity?.data?.target === "_blank";
      const targetAttrs = targetBlank
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";
      segment = `<a href="${escapeAttr(href)}"${targetAttrs}>${segment}</a>`;
    }

    result += segment;
    j = end;
  }

  return result;
}

function getEntity(entityMap, key) {
  if (entityMap == null || key == null) return null;
  return entityMap[key] ?? entityMap[String(key)] ?? null;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
  return escapeHtml(str);
}

