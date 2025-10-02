// Reusable motion presets for consistency across the app
// These are marked `as const` so literal values are preserved.

export type MotionPreset = {
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
};

// Loader preset: fade in, fade out with slight lift
export const LOADER_MOTION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25 },
} as const satisfies MotionPreset;

// Page/content preset: fade + slide up on enter
export const PAGE_CONTENT_MOTION = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
} as const satisfies MotionPreset;

