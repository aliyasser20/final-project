export const updateProjectDetails = (
  projects,
  projectId,
  newName,
  newDescription
) => {
  for (const project of projects) {
    if (project.id === projectId) {
      project.name = newName;
      project.description = newDescription;
    }
  }

  return projects;
};

export const deleteProject = (projects, projectId) => {
  const newProjects = [];

  projects.forEach((project, index) => {
    if (project.id !== projectId) {
      newProjects.push(project);
    }
  });

  return newProjects;
};