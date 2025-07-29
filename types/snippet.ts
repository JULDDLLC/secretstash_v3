export interface Snippet {
  id: string;
  title: string;
  language: string;
  content: string;
  description?: string;
  tags: string[];
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}