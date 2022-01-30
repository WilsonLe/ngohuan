import path from 'path';
import fs from 'fs/promises';
import { PubType } from '../types';
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

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
