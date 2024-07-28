export type Project = {
  title: string;
  intro: string;
  description: string;
  points: string[];
  contribution?: {
    detail?: string[];
    title: string;
  }[];
  troubleShooting?: {
    detail?: string[];
    title: string;
  }[];
  review?: {
    detail?: string[];
    title: string;
  }[];
  startDate: string;
  category: string[];
  path: string;
  featured: boolean;
  stacks: string[];
  docsUrl: string;
  serviceUrl: string;
  images: number;
};

