export interface ProjectsType {
  projects: ProjectType[];
}

export interface ProjectType {
  id: number;
  name: string;
  technologies: string[];
  description: string;
  codeLink: string;
  websiteLink: string;
  imageUrl: string;
  hasWebLink: boolean;
}
