export type BlogData = {
  id: string;
  title: string;
  order: string;
  description: string;
  thumbnailURL: string;
  htmlContent: string;
};

export type BlogHeaderData = Omit<BlogData, 'htmlContent'>;
