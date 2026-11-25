// Entry runner for "Tell a Whole Story in 32 Characters" (xvader).
// The entry is a Wi-Fi network name of at most 32 characters that hints
// at an entire story. This one is thirty characters long and contains
// a family, an expectation, a rebellion and a password change: somebody
// is dropping out of law school, and the announcement is being made by
// router, to the whole street. Output: /output/entry.txt.
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "MomDadImDroppingOutOfLawSchool";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  if (existsSync(out)) {
    for (const name of readdirSync(out)) {
      rmSync(join(out, name), { recursive: true, force: true });
    }
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
