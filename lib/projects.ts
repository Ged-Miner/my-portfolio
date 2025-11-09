import { Project } from "@/types/project";
import projectsData from "@/data/projects.json";

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id) as Project | undefined;
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter((project) => project.category === category) as Project[];
}

export function getAllCategories(): string[] {
  const categories = projectsData.map((project) => project.category);
  return Array.from(new Set(categories));
}
