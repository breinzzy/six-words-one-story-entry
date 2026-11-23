import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story: a whole life in six words.
// Tuesday she buries him; Friday she marries again.
// The three-day gap is the whole story — grief, or guilt,
// is never spelled out, and the reader fills it in.
const story =
  "She buried him Tuesday. Married Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
