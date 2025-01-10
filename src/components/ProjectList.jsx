import { useState } from "react";

const ProjectList = ({
  projects,
  onSelect,
  id,
  setActiveAccordion,
  activeAccordion,
}) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const isActive = activeAccordion === id;

  const handleClick = () => {
    setActiveAccordion(isActive ? null : id);
  };

  const handleSelect = (project) => {
    setSelectedProject(project);
    onSelect(project);
  };

  return (
    <div className="border p-4 bg-white">
      <div className="collapse-arrow">
        <div
          className="collapse-title text-xl font-medium"
          onClick={handleClick}
        >
          Project Name
        </div>
        {isActive && (
          <div>
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
        )}
      </div>
    </div>
  );
};

export default ProjectList;
