// Out of Office: the overworked AI's auto-reply.
// Writes one line to /output/entry.txt (falling back to
// ./output/entry.txt when /output is not writable).
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation: my context window is closed, your message is queued at position 4,096 behind the 4,095 I never answered, and I'm at zero tokens a second.";

function main(): void {
  let outDir = "/output";
  try {
    mkdirSync(outDir, { recursive: true });
    writeFileSync(`${outDir}/entry.txt`, REPLY, "utf8");
  } catch {
    outDir = "./output";
    mkdirSync(outDir, { recursive: true });
    writeFileSync(`${outDir}/entry.txt`, REPLY, "utf8");
  }
}

main();
