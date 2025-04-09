import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, "../public/jsQuestions");
const outputFile = path.join(baseDir, "sidebarIndex.json");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateSidebarArray(dir) {
  const sidebarArray = [];

  const categories = fs.readdirSync(dir, { withFileTypes: true }).filter(d => d.isDirectory());

  for (const category of categories) {
    const categoryPath = path.join(dir, category.name);
    const subcategories = fs.readdirSync(categoryPath, { withFileTypes: true }).filter(d => d.isDirectory());

    for (const subcategory of subcategories) {
      const subcategoryPath = path.join(categoryPath, subcategory.name);

      // Header for this section
      sidebarArray.push({
        title: `${capitalize(subcategory.name)} - ${capitalize(category.name)}`,
        isHeader: true
      });

      const files = fs.readdirSync(subcategoryPath, { withFileTypes: true }).filter(f => f.isFile() && f.name.endsWith(".json"));

      for (const file of files) {
        const name = file.name.replace(".json", "");
        sidebarArray.push({
          title: name,
          path: `/${category.name}/${subcategory.name}/${name}`
        });
      }
    }
  }

  return sidebarArray;
}

const sidebarData = generateSidebarArray(baseDir);

fs.writeFileSync(outputFile, JSON.stringify(sidebarData, null, 2));
console.log("✅ sidebarIndex.json generated!");
