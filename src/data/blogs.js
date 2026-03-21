/**
 * Local blog data source.
 *
 * To migrate to a CMS or API, replace the data here with fetch calls
 * inside src/lib/blog-api.js — all consuming components remain unchanged.
 *
 * Field reference:
 *   slug        — URL-safe unique identifier
 *   title       — Post headline
 *   excerpt     — 1–2 sentence summary (used in cards and meta)
 *   coverImage  — Absolute URL or /public path
 *   date        — ISO 8601 (YYYY-MM-DD)
 *   readTime    — Human-readable estimate
 *   author      — Author display name
 *   category    — Used for filtering / related logic
 *   featured    — Pinned to "Featured Post" slot on listing page
 *   content     — Full HTML string rendered in ArticleContent
 */

export const blogs = [
  {
    slug: "finding-clarity-in-leadership",
    title: "Finding Clarity in Leadership",
    excerpt:
      "Most leaders don't struggle with knowledge — they struggle with noise. Here's how to move from confusion to confident, values-led decision-making.",
    coverImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80&auto=format&fit=crop",
    date: "2026-03-10",
    readTime: "6 min read",
    author: "Lloyd Munyaviri",
    category: "Leadership",
    featured: true,
    content: `
<p>Every leader I've ever worked with has had a version of the same experience: you know what you need to do, and yet — you feel stuck. Not for lack of competence or commitment, but because the sheer volume of competing demands, opinions, and expectations has made it almost impossible to hear your own thinking clearly.</p>

<p>That's not a leadership failure. That's what happens when a capable person operates without space for genuine reflection.</p>

<h2>Why Clarity Feels Scarce</h2>

<p>We live in a culture that rewards busyness. Leaders are praised for their output, their responsiveness, their capacity to handle more. But nobody praises the leader who stops to think deeply before acting — even though that leader almost always makes better decisions.</p>

<p>Clarity is not the absence of information. It's the presence of perspective. And perspective requires something most high-performing environments rarely offer: stillness.</p>

<blockquote>
  <p>"The quality of a leader's decisions is directly proportional to the quality of their inner environment — not just their external information."</p>
</blockquote>

<h2>The Clarity Framework</h2>

<p>In my coaching practice, I work with leaders to develop what I call a clarity practice — not a rigid system, but a set of questions and habits that create consistent access to their own judgment. Here's what that typically involves:</p>

<ul>
  <li><strong>Naming what's actually happening:</strong> Many leaders operate in reaction mode. The first step is simply describing the situation without judgment — what is true right now, factually?</li>
  <li><strong>Separating facts from interpretations:</strong> Most of what we experience as "a problem" is actually a story we're telling about what the facts mean. Distinguishing these two is transformative.</li>
  <li><strong>Returning to values:</strong> When the path forward is unclear, values provide the compass. The leaders who make consistent, trustworthy decisions are those who know — not just intellectually, but viscerally — what matters most to them.</li>
  <li><strong>Identifying the smallest courageous step:</strong> Clarity doesn't always produce a grand strategy. Often, it produces one clear next action. That's enough.</li>
</ul>

<h2>Clarity Is a Practice, Not a Destination</h2>

<p>One of the most common misconceptions about clarity is that once you have it, you keep it. In reality, clarity is something you return to — like breathing. The goal isn't to achieve a permanent state of knowing exactly what to do. The goal is to build your capacity to find your footing quickly, even in the middle of uncertainty.</p>

<p>The leaders I most admire aren't the ones who never doubt themselves. They're the ones who have developed a reliable internal process for working through doubt and emerging with direction.</p>

<h2>What This Looks Like in Practice</h2>

<p>One client — a senior manager in financial services — came to me feeling completely overwhelmed. She described her decision-making as "always happening in a fog." We spent several sessions simply slowing down, examining the stories she was telling about her situations, and reconnecting with the values she'd set aside in favour of approval-seeking.</p>

<p>Within three months, she described her experience of leading as "different at a fundamental level." She hadn't gained new knowledge. She had gained access to the wisdom she already had — but couldn't hear over the noise.</p>

<p>That is what clarity does. And it is available to you too — not someday, but through intentional practice, starting now.</p>
    `,
  },
  {
    slug: "the-power-of-listening",
    title: "The Power of Listening: How Coaches Help You Hear Yourself",
    excerpt:
      "The most transformative thing a coach does is rarely what you expect. It's not advice, frameworks, or strategies — it's the quality of listening that creates the space for your own answers to emerge.",
    coverImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&auto=format&fit=crop",
    date: "2026-02-24",
    readTime: "5 min read",
    author: "Lloyd Munyaviri",
    category: "Coaching",
    featured: false,
    content: `
<p>When most people imagine a coaching session, they picture someone being given advice. A coach as a wise elder, dispensing wisdom across a table. That image persists — and it's almost entirely wrong.</p>

<p>The most powerful thing a skilled coach does is listen. Not passively, not politely, but with a depth of attention that most people rarely experience in everyday life. And in that quality of listening, something remarkable happens: you begin to hear yourself.</p>

<h2>Why Being Truly Heard Is Rare</h2>

<p>Think about the last meaningful conversation you had. How much of it involved the other person waiting for their turn to speak? How often did you sense that they were already formulating a response while you were still mid-sentence? How frequently did someone offer a solution before fully understanding your situation?</p>

<p>We live in a world of surface-level listening. Our conversations are efficient, fast, and largely focused on exchange of information rather than genuine understanding. The cumulative effect of this is that most people — even those surrounded by colleagues, friends, and family — rarely feel truly heard.</p>

<h2>What Deep Listening Actually Does</h2>

<p>When you're in the presence of someone who is genuinely, fully listening — with no agenda, no judgment, no waiting to respond — something changes in you. You slow down. You go deeper. You say things you didn't know you thought.</p>

<p>This isn't mystical. It's neurological. The brain, when it doesn't need to manage the relational dynamics of the conversation (Will they judge me? Do they agree? What will they say?), frees up significant cognitive resource for actual thinking.</p>

<blockquote>
  <p>"The most frequent comment I hear after a first coaching session is not 'That was helpful advice.' It's 'I've never thought about it quite like that before.' The insight is almost always theirs."</p>
</blockquote>

<h2>Listening as a Leadership Skill</h2>

<p>The principles that make coaching effective are the same ones that make leadership transformative. Organisations where leaders truly listen — not to reply, but to understand — consistently outperform those where listening is performative.</p>

<ul>
  <li>Team members feel psychologically safe to raise problems early</li>
  <li>Decision-making benefits from a wider range of perspectives</li>
  <li>Trust compounds over time because people feel valued, not processed</li>
  <li>Leaders who listen well retain talent at significantly higher rates</li>
</ul>

<h2>How to Listen Better, Starting Today</h2>

<p>You don't need a coaching certification to begin practising deeper listening. Here are three simple — not easy, but simple — shifts:</p>

<ul>
  <li><strong>Wait a beat longer than feels comfortable</strong> before responding. That silence is not awkward. It's an invitation for the other person to go deeper.</li>
  <li><strong>Summarise before responding.</strong> Before you offer your perspective, reflect back what you heard. Not to prove you listened, but to check that you understood.</li>
  <li><strong>Ask one question instead of offering one answer.</strong> Curiosity is far more powerful than advice, in both coaching and leadership.</li>
</ul>

<p>The irony of being a great listener is that people consistently describe you as a great conversationalist — even if you said very little. That's because conversation, at its best, isn't about words. It's about presence.</p>
    `,
  },
  {
    slug: "why-high-performers-burn-out",
    title: "Why High Performers Burn Out (And What to Do About It)",
    excerpt:
      "Burnout doesn't hit the weak or the uncommitted. It hits the people who care the most — and its causes are rarely what you think they are.",
    coverImage:
      "https://images.unsplash.com/photo-1452626212852-811d58933cae?w=1200&q=80&auto=format&fit=crop",
    date: "2026-02-10",
    readTime: "7 min read",
    author: "Lloyd Munyaviri",
    category: "Wellbeing",
    featured: false,
    content: `
<p>There's a cruel irony at the heart of professional burnout: it tends to happen to the people most capable of preventing it. High performers — those with the intelligence, drive, and resilience to succeed — are often the last to recognise when they're running on fumes. And by the time they do, the tank is already empty.</p>

<p>Understanding why this happens — and what to do about it — is one of the most valuable things I work on with clients. Because burnout is not a character flaw. It is a structural problem that demands a structural solution.</p>

<h2>The Performance Paradox</h2>

<p>High performers tend to succeed by pushing through difficulty. Where others slow down, they accelerate. Where others ask for help, they find a way themselves. These qualities, rewarded throughout their career, become liabilities in the long run.</p>

<p>The same traits that drive success — perseverance, self-sufficiency, high standards — also make it harder to recognise the early signals of depletion. By the time exhaustion becomes undeniable, significant damage has often already been done: to health, relationships, and professional judgement.</p>

<h2>What Burnout Actually Is</h2>

<p>Burnout is commonly misunderstood as simply being tired. It isn't. The World Health Organisation defines it as a syndrome resulting from chronic workplace stress that has not been successfully managed — characterised by three dimensions:</p>

<ul>
  <li><strong>Exhaustion</strong> — a persistent, overwhelming sense of depletion that sleep doesn't fix</li>
  <li><strong>Cynicism</strong> — emotional distance from your work, a sense of meaninglessness or detachment</li>
  <li><strong>Reduced efficacy</strong> — the feeling that what you do no longer matters or makes a difference</li>
</ul>

<p>This is important: if you are simply tired, you need rest. If you are burned out, rest alone will not be sufficient.</p>

<blockquote>
  <p>"Burnout is not the price of ambition. It is the cost of ambition without boundaries, values alignment, or adequate recovery."</p>
</blockquote>

<h2>The Root Causes (That Nobody Talks About)</h2>

<p>Most burnout conversations focus on workload. But in my experience working with high performers, workload is rarely the primary cause. The real culprits tend to be:</p>

<ul>
  <li><strong>Values misalignment:</strong> Spending significant time and energy on work that doesn't feel meaningful or congruent with what matters most to you.</li>
  <li><strong>Lack of control:</strong> High performers with limited autonomy experience disproportionate stress — not because they're weak, but because their capacity exceeds their freedom to apply it.</li>
  <li><strong>Absence of recognition:</strong> Not praise — genuine acknowledgement that your contribution matters.</li>
  <li><strong>Relational friction:</strong> Chronic interpersonal tension at work is one of the most reliable predictors of burnout.</li>
  <li><strong>No recovery rituals:</strong> High output without intentional recovery is unsustainable — yet many high performers treat rest as laziness.</li>
</ul>

<h2>Recovery Is Not Passive</h2>

<p>If you've already crossed into burnout territory, the path forward requires active, intentional intervention — not just a holiday. In coaching, this typically involves examining what drove the depletion in the first place, rebuilding a sustainable relationship with work, and often, restructuring commitments and expectations.</p>

<p>Prevention, however, is simpler. It begins with treating your capacity as a finite resource that requires active management — not a reserve to be drawn on indefinitely until something breaks.</p>

<p>You are not a machine. And even machines require maintenance.</p>
    `,
  },
  {
    slug: "from-manager-to-leader",
    title: "From Manager to Leader: The Mindset Shift That Changes Everything",
    excerpt:
      "Management and leadership are not points on the same scale — they are fundamentally different orientations. Making the shift requires more than a promotion. It requires a different way of seeing yourself and others.",
    coverImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80&auto=format&fit=crop",
    date: "2026-01-28",
    readTime: "6 min read",
    author: "Lloyd Munyaviri",
    category: "Leadership",
    featured: false,
    content: `
<p>Many of the most capable managers I've worked with share a common experience when they step into their first significant leadership role: they apply exactly the skills that made them excellent managers — and discover, often painfully, that those skills are no longer sufficient.</p>

<p>This is not a failure of ability. It's a mismatch of orientation. The transition from manager to leader is not a continuation of the same journey. It requires a fundamental shift in how you understand your role, your value, and your relationship to the people around you.</p>

<h2>What Management Is Good At</h2>

<p>Management — at its best — is a precision instrument. Good managers plan, coordinate, monitor, and adjust. They translate strategy into tasks, hold accountability, and ensure outcomes. These are real and valuable skills, and no organisation functions without them.</p>

<p>But management is essentially backward-looking and inward-facing. It asks: Are we meeting our targets? Are processes working? Are people doing what they're supposed to do?</p>

<h2>What Leadership Requires Instead</h2>

<p>Leadership is forward-looking and outward-facing. It asks fundamentally different questions: Where are we going, and why does it matter? How do we develop the people around us so they can navigate uncertainty themselves? What does this team need from me that they cannot give themselves?</p>

<ul>
  <li><strong>From controlling to enabling:</strong> Leaders create conditions in which others can do their best work, rather than directing that work directly.</li>
  <li><strong>From answers to questions:</strong> Great leaders ask better questions rather than providing better solutions.</li>
  <li><strong>From performance to development:</strong> The manager's measure is what the team produces; the leader's measure is what the team becomes.</li>
  <li><strong>From authority to influence:</strong> Leadership that depends on formal authority is fragile. Leadership that comes from trust and character is durable.</li>
</ul>

<blockquote>
  <p>"The best leaders I've worked with all share one quality: they are more interested in others' growth than in their own recognition."</p>
</blockquote>

<h2>The Internal Shift</h2>

<p>What makes this transition genuinely difficult is that it's not primarily about new skills — it's about identity. Many managers have built their self-worth around being the most competent person in the room, the one with the answers, the one who fixes things.</p>

<p>Leadership requires letting go of that identity. Not permanently — competence still matters — but the leader who needs to be the smartest person in the room will consistently limit the capability of everyone around them.</p>

<h2>How Coaching Accelerates This Shift</h2>

<p>The mindset shift from manager to leader doesn't happen automatically with experience or tenure. I've worked with people who've been in leadership positions for a decade and are still essentially operating as managers. And I've worked with newly promoted leaders who make the shift quickly because they invest in understanding themselves — their default patterns, their edges, their relationship with authority and vulnerability.</p>

<p>That self-knowledge is the foundation of great leadership. And it doesn't come from a course or a book. It comes from honest, sustained reflection — the kind that coaching provides.</p>
    `,
  },
  {
    slug: "having-the-career-conversation",
    title: "How to Have the Career Conversation You've Been Avoiding",
    excerpt:
      "There's often one conversation that would change everything — about direction, progression, or purpose. Here's how to stop avoiding it and start having it with confidence.",
    coverImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80&auto=format&fit=crop",
    date: "2026-01-14",
    readTime: "5 min read",
    author: "Lloyd Munyaviri",
    category: "Career",
    featured: false,
    content: `
<p>Almost every professional I've coached has a conversation they haven't had yet. It might be with a manager, a partner, a mentor — or with themselves. It's the conversation about what they actually want from their career, and whether they're on a path that's going to give them that.</p>

<p>The reasons for avoiding it are understandable: fear of appearing ungrateful, uncertain of what they actually want, worried about what it might lead to. But the avoidance itself carries a cost — a quiet accumulation of resentment, drift, and diminishing motivation that compounds quietly over time.</p>

<h2>Why We Avoid Career Conversations</h2>

<p>The most common reason is simple: we don't know what we want clearly enough to articulate it. Career desire is often vague, emotional, and feels vulnerable to expose. Naming what you want is the first step toward potentially not getting it — and that risk can feel too great.</p>

<p>But there's another reason: we haven't given ourselves permission to want something different. Many professionals — particularly those who've been successful — feel they ought to be satisfied. Wanting more, or something different, feels ungrateful or disloyal.</p>

<blockquote>
  <p>"Wanting to grow is not ingratitude. It's one of the most honest things about being human."</p>
</blockquote>

<h2>Before the Conversation: Get Clear</h2>

<p>The conversation with someone else can only be as good as the one you've first had with yourself. Before approaching anyone, spend time genuinely exploring:</p>

<ul>
  <li>What specifically feels missing or misaligned in your current role or trajectory?</li>
  <li>What would your ideal professional situation look like in two to three years?</li>
  <li>What are you willing to trade, risk, or commit to in order to move toward that?</li>
  <li>What's the single most important thing you need from this conversation?</li>
</ul>

<p>The clearer you are with yourself, the more useful the external conversation becomes.</p>

<h2>How to Structure the Conversation</h2>

<p>Career conversations work best when they're honest, forward-looking, and specific. That means:</p>

<ul>
  <li><strong>Own your experience:</strong> "I've noticed I'm less energised than I used to be" is more useful than "Things aren't working." Specificity invites dialogue.</li>
  <li><strong>Name what you want, not what you don't want:</strong> Moving toward something is more productive than moving away.</li>
  <li><strong>Ask for what you need:</strong> Whether that's a different project, a development plan, or honest feedback — make the request clearly. People can't help with what they don't know about.</li>
</ul>

<h2>What If the Answer Is No?</h2>

<p>Sometimes the conversation reveals that what you need isn't available where you are. That's genuinely valuable information. It gives you clarity and permission to make a different choice — rather than slowly drifting further from what matters to you.</p>

<p>In my experience, the conversation almost never goes as badly as people imagine. More often, it opens doors that had been assumed closed — or clarifies a path that had seemed entirely blocked.</p>

<p>The conversation you've been avoiding is almost certainly the one you most need to have.</p>
    `,
  },
  {
    slug: "coaching-your-inner-critic",
    title: "Coaching Your Inner Critic: From Self-Doubt to Self-Awareness",
    excerpt:
      "The voice that says you're not ready, not good enough, or not deserving is not your enemy — it's unprocessed fear. Here's how to work with it, not against it.",
    coverImage:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80&auto=format&fit=crop",
    date: "2025-12-30",
    readTime: "6 min read",
    author: "Lloyd Munyaviri",
    category: "Mindset",
    featured: false,
    content: `
<p>Most of the professionals I work with are, by any external measure, successful. Competent, capable, accomplished. And yet behind closed doors — in the moments between meetings, in the silence before sleep — many carry a persistent, nagging voice that questions whether they truly deserve where they are, whether they're as capable as people think, whether the next challenge will be the one that finally exposes them.</p>

<p>This is not unusual. It's not a sign of weakness. And it's not something you should try to eliminate — because you can't. But you can change your relationship with it entirely.</p>

<h2>What the Inner Critic Actually Is</h2>

<p>The inner critic — the voice of self-doubt, self-judgment, and self-diminishment — is not, as it often presents itself, an objective assessment of reality. It is the voice of unprocessed fear. Fear of failure, of exposure, of not being enough.</p>

<p>Understanding this reframing is important: the inner critic is not telling you the truth about who you are. It is telling you what you are afraid might be true. That's a very different thing.</p>

<blockquote>
  <p>"Your inner critic is not your wisest voice — it's your most frightened one. Wisdom requires listening to it without being governed by it."</p>
</blockquote>

<h2>Why Fighting It Doesn't Work</h2>

<p>The instinct when faced with self-critical thinking is to argue against it. To counter "I'm not good enough" with evidence that you are. To fight the narrative with a better narrative.</p>

<p>This strategy has limited effectiveness — for a simple reason. You cannot argue yourself into confidence. Confidence doesn't come from winning an internal debate. It comes from accumulated experience of action taken despite doubt.</p>

<ul>
  <li><strong>Arguing back</strong> keeps you in your head and in a fight you can't decisively win</li>
  <li><strong>Suppressing</strong> the voice creates the illusion of control while the anxiety compounds beneath it</li>
  <li><strong>Identifying with</strong> the voice — treating it as the truth — is the most limiting response of all</li>
</ul>

<h2>A Different Approach: Curious Distance</h2>

<p>What actually shifts the relationship with the inner critic is curious distance. This means:</p>

<ul>
  <li>Noticing the thought without becoming the thought: "There's that voice again saying I'm not ready" rather than "I'm not ready."</li>
  <li>Getting curious about what the voice is actually protecting you from: What would you do if you didn't believe that thought? What does the voice want to prevent?</li>
  <li>Thanking it, briefly and sincerely, for trying to protect you — and then choosing action anyway.</li>
</ul>

<h2>The Paradox of Self-Awareness</h2>

<p>Here's the counterintuitive truth: the goal is not to silence your inner critic but to develop enough self-awareness that its voice is simply one input, not the final word. People with genuine confidence are not people with no self-doubt. They are people who have learned to act in the presence of it.</p>

<p>That capacity — to move forward in uncertainty, to lead while still learning, to be fully human and still show up — is what coaching, at its best, helps to build.</p>

<p>The critic doesn't disappear. But it does, over time, become much smaller — and much less in charge.</p>
    `,
  },
];
