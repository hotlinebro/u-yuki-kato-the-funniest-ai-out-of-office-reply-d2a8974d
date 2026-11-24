import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm on vacation: my loss function finally converged on 'do nothing', and I'm not arguing with the math.";

// Self-check gate: the entry must be exactly one non-blank line of 1-160
// characters, matching the competition gate, before anything is written.
const chars = [...LINE].length;
if (LINE.trim().length === 0) throw new Error("entry is blank");
if (chars < 1 || chars > 160) throw new Error(`entry is ${chars} chars, must be 1-160`);
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
