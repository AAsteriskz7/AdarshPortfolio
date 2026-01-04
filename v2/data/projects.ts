export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'cs' | 'design' | 'other';
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio V1',
    description: 'My first portfolio website built with HTML/CSS.',
    category: 'cs',
  },
  {
    id: '2',
    title: 'Brand Identity',
    description: 'A complete rebrand for a local coffee shop.',
    category: 'design',
  },
];
