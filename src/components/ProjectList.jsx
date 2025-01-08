import { useState } from "react";

const ProjectList = ({ projects, onSelect }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    onSelect(project);
  };

  return (
    <div className="border p-4">
      <h2 className="text-lg font-bold">Project Name</h2>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={`p-2 cursor-pointer ${
              selectedProject.id === project.id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSelect(project)}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
