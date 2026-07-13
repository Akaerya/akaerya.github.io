import { StarRail } from "starrail.js";

const client = new StarRail({
  cacheDirectory: "./cache",
  showFetchCacheLog: false,
});

// Duplicate Trailblazer characters
const EXCLUDED_IDS = [8002, 8003, 8006, 8007, 8010];

// Custom names for Trailblazer characters as the default name is {NICKNAME}
const CUSTOM_NAMES: Record<number, string> = {
  8001: "Trailblazer • Destruction",
  8004: "Trailblazer • Preservation",
  8005: "Trailblazer • Harmony",
  8008: "Trailblazer • Remembrance",
  8009: "Trailblazer • Elation",
};

export function getCharacterName(id: number, fallback: string): string {
  return CUSTOM_NAMES[id] ?? fallback;
}

export const allCharacters = client
  .getAllCharacters()
  .filter((c) => !EXCLUDED_IDS.includes(c.id));
