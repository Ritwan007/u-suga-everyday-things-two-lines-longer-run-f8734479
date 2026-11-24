// Everyday Things, Two Lines — writes the chosen two-line explanation,
// then self-checks the gate (UTF-8, 1-400 chars, exactly two lines).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const lines = [
  "Rain is the sky pouring a bucket of water through a colander, so it comes down in thousands of little drops instead of one big splash.",
  "The bucket is the cloud, the colander's holes are what break the water into drops, but there is no bucket or colander up there, and the water was invisible vapour, not a stored puddle.",
];

const text = lines.join("\n");
if (text.length < 1 || text.length > 400) throw new Error(`char count ${text.length} outside 1-400`);
if (lines.length !== 2 || lines.some((l) => !l.trim())) throw new Error("must be exactly two non-empty lines");
if (lines.some((l) => l.split(".").length - 1 !== 1)) throw new Error("each line must be one sentence");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== text) throw new Error("round-trip mismatch");
console.log(`wrote /output/entry.txt (${text.length} chars, 2 lines)`);
