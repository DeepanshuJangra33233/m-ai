import { useState } from "react";

const ProjectList = ({ projects, onSelect }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    onSelect(project);
  };

  return (
    <div className="border p-4">
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Project Name</div>
        <div className="collapse-content">
          {projects.map((project) => (
            <li
              key={project.id}
              className={`p-5 cursor-pointer border border-[#EBEBEB] rounded-[5px] mt-3 list-none ${
                selectedProject.id === project.id ? "bg-[#E5F0FA] " : ""
              }`}
              onClick={() => handleSelect(project)}
            >
              {project.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
