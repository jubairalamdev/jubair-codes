import projects from "@/data/projects.json";

export async function getProjects() {
  return projects;
}

export async function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}

export async function getCategories() {
  return ["All", ...new Set(projects.map((p) => p.category))];
}
