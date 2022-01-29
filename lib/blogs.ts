import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { BlogData, BlogHeaderData } from '../types';
import { remark } from 'remark';
import html from 'remark-html';

const personalBlogDirectory = path.join(
  process.cwd(),
  'uploads',
  'personal-blogs'
);

/**
 * utility function to get all blog ids from personal blog upload directory
 * @returns an array of id as string
 */
export async function getAllBlogIds() {
  const fileNames = await fs.readdir(personalBlogDirectory);
  const postIds = fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
  return postIds;
}

/**
 * utility function to get all blog data from personal blog upload directory
 * @returns an array of blog data
 */
export async function getSortedBlogHeadersData() {
  // Get file names under "personalBlogDirectory"
  const fileNames = await fs.readdir(personalBlogDirectory);
  const markdownFiles = fileNames.filter((name) => name.endsWith('.md'));
  const allPostsData = await Promise.all(
    markdownFiles.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(personalBlogDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      // validate matter result
      if (
        'order' in matterResult.data &&
        'title' in matterResult.data &&
        'description' in matterResult.data &&
        'thumbnailURL' in matterResult.data
      ) {
        const blogHeaderData: BlogHeaderData = {
          id,
          order: matterResult.data.order,
          title: matterResult.data.title,
          description: matterResult.data.description,
          thumbnailURL: matterResult.data.thumbnailURL,
        };
        return blogHeaderData;
      } else {
        return null;
      }
    })
  );

  const filteredAllPostsData: BlogHeaderData[] = allPostsData.filter(
    (x): x is BlogHeaderData => x !== null
  );
  // Sort posts by date
  return filteredAllPostsData.sort(
    (a, b) => parseInt(a.order) - parseInt(b.order)
  );
}

export async function getBlogData(id: string) {
  const fullPath = path.join(personalBlogDirectory, `${id}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const htmlContent = processedContent.toString();

  if (
    'order' in matterResult.data &&
    'title' in matterResult.data &&
    'description' in matterResult.data &&
    'thumbnailURL' in matterResult.data
  ) {
    const blogData: BlogData = {
      id,
      order: matterResult.data.order,
      title: matterResult.data.title,
      description: matterResult.data.description,
      thumbnailURL: matterResult.data.thumbnailURL,
      htmlContent,
    };
    return blogData;
  } else {
    return null;
  }
}
