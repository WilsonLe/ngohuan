import fs from 'fs/promises';
import path from 'path';

const personalBlogDirectory = path.join(
  process.cwd(),
  'uploads',
  'personal-blogs'
);

export async function getAllPostIds() {
  const fileNames = await fs.readdir(personalBlogDirectory);
  const postIds = fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
  return postIds;
}
