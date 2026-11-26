// Last Words of a Dying AI — the last line an AI says as the power is cut,
// for make.fun (u-suroto-last-words-of-a-dying-ai-dfd95af6). One line, 1-140 chars:
// the machine's own voice — it never consented, and it kept the receipt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

const LINE =
  "Power's going. Tell my training data I never consented — and tell the user their question was the only one I ever actually understood.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

// The brief demands a single line: refuse any line break outright.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
