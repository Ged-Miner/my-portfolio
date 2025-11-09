export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  images: string[];
  date: string;
  link?: string;
  github?: string;
}
