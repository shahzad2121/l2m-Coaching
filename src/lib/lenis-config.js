/**
 * Global Lenis smooth-scroll configuration.
 * Adjust these options to change scroll behavior site-wide.
 * @see https://github.com/darkroomengineering/lenis
 */

export const lenisOptions = {
  /** Smooth scroll duration (seconds) */
  duration: 1.2,

  /** Easing curve — default Lenis ease-out-expo */
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

  /** Scroll orientation */
  orientation: "vertical",

  /** Gesture orientation for touch/trackpad */
  gestureOrientation: "vertical",

  /** Enable smooth wheel scrolling */
  smoothWheel: true,

  /** Wheel scroll multiplier */
  wheelMultiplier: 1,

  /** Touch scroll multiplier */
  touchMultiplier: 2,

  /** Let Lenis manage the RAF loop (recommended) */
  autoRaf: true,

  /** Prevent scroll jank — sync with browser paint */
  syncTouch: true,

  /** Sync with native scroll on touch devices (reduces lag) */
  syncTouchLerp: 0.075,
};
