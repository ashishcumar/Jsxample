// scripts/generateSidebarIndex.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, "../public/jsQuestions");

function generateIndex(dir) {
  const result = {};

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result[entry.name] = generateIndex(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      result[entry.name.replace(".json", "")] = path
        .relative(baseDir, fullPath)
        .replace(/\\/g, "/");
    }
  }

  return result;
}

const sidebarIndex = generateIndex(baseDir);

fs.writeFileSync(
  path.join(baseDir, "sidebarIndex.json"),
  JSON.stringify(sidebarIndex, null, 2)
);

console.log("✅ Sidebar index generated!");
