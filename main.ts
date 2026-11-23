// Six Words, One Story — entrypoint (Node 22 stdlib only).
// Writes a fresh six-word story, deterministically, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// rev2: story is exactly six words / 40 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "The lighthouse keeper never slept again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
