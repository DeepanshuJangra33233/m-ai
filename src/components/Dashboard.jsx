import { useState } from "react";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import CandidateList from "../components/CandidateList";
import Messages from "../components/Messages";
import data from "../../data.json";

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow px-3 justify-between mt-3">
        {/* Project List */}
        <div className="w-full max-w-[476px]">
          <div className="w-full">
            <ProjectList
              projects={data.projects}
              onSelect={(project) => {
                setSelectedProject(project);
                setSelectedCandidate(null); // Reset candidate when the project changes
              }}
            />
          </div>

          {/* Candidate List */}
          <div className="w-full">
            <CandidateList
              candidates={selectedProject ? selectedProject.candidates : []}
              onSelect={setSelectedCandidate}
            />
          </div>
        </div>
        {/* Message Panel */}
        <div className="w-full max-w-[931px]">
          {selectedProject && selectedCandidate ? (
            <Messages
              candidate={selectedCandidate}
              messages={selectedCandidate.messages}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              {/* Empty message panel until both project and candidate are selected */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
