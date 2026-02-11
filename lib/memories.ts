import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Memory = {
  author: string;
  date: string;
  message: string;
  slug: string;
};

const memoriesDir = path.join(process.cwd(), "content", "memories");

export function getMemories(): Memory[] {
  if (!fs.existsSync(memoriesDir)) {
    return [];
  }

  const files = fs
    .readdirSync(memoriesDir)
    .filter((file) => file.endsWith(".md"));

  return files
    .map((file) => {
      const fullPath = path.join(memoriesDir, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);

      return {
        author: String(data.author ?? "Anónimo"),
        date: String(data.date ?? ""),
        message: content.trim(),
        slug: file.replace(/\.md$/, ""),
      } satisfies Memory;
    })
    .filter((memory) => memory.message.length > 0);
}
