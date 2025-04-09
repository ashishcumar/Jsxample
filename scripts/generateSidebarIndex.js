import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory where your JSON files are
const baseDir = path.join(__dirname, "../public/jsonStore");

const entries = [];

function toTitleCase(str) {
  return str
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatTitleFromFile(fileName) {
  let name = fileName.replace(".json", "");
  return name
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase to space
    .replace(/([A-Z]+)/g, (m) => m.charAt(0) + m.slice(1).toLowerCase()) // uppercase words to Capitalized
    .replace(/^./, (c) => c.toUpperCase()); // capitalize first letter
}

function walk(dir, lastFolder = "") {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.filter((d) => d.isFile() && d.name.endsWith(".json"));
  const folders = dirents.filter((d) => d.isDirectory());

  if (files.length) {
    entries.push({
      title: formatTitleFromFile(path.basename(dir)),
      isHeader: true,
    });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, "/");
      const title = formatTitleFromFile(file.name);
      entries.push({
        title,
        path: `/jsonStore/${relativePath.replace(".json", "")}`,
      });
    }
  }

  for (const folder of folders) {
    walk(path.join(dir, folder.name), folder.name);
  }
}

walk(baseDir);

// Write output
const outputPath = path.join(baseDir, "sidebarIndex.json");
fs.writeFileSync(outputPath, JSON.stringify(entries, null, 2));

console.log(`✅ Sidebar index generated at: ${outputPath}`);
