import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { PubType } from '../types';
const uploadDir = path.join(process.cwd(), 'uploads');

export async function getPubsData(pubType: PubType) {
  let fullPath: string;
  if (pubType === 'conference') {
    fullPath = path.join(uploadDir, 'conference-proceedings.html');
  } else if (pubType === 'journal') {
    fullPath = path.join(uploadDir, 'journal-papers.html');
  } else if (pubType === 'technical') {
    fullPath = path.join(uploadDir, 'technical-reports.html');
  } else {
    throw 'Invalid pubType';
  }
  const fileContents = await fs.readFile(fullPath, 'utf8');
  return fileContents;
}
