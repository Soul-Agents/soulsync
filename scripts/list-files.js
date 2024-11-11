const fs = require("fs");
const path = require("path");

function listFiles(dir, indent = "") {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (file === "node_modules" || file === ".git" || file === ".next") {
      return;
    }

    console.log(`${indent}${file}${stats.isDirectory() ? "/" : ""}`);

    if (stats.isDirectory()) {
      listFiles(filePath, indent + "  ");
    }
  });
}

listFiles(".");
