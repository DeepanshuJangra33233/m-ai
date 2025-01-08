import React, { useState } from "react";
import Header from "./Header";
import ProjectList from "./ProjectList";
import Messages from "./Messages";
import CandidateList from "./CandidateList";
import data from "../../data.json";

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState(data.projects[0]);
  const [selectedCandidate, setSelectedCandidate] = useState(
    data.projects[0].candidates[0]
  );
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-grow">
          <div className="w-1/4">
            <ProjectList
              projects={data.projects}
              onSelect={(project) => {
                setSelectedProject(project);
                setSelectedCandidate(project.candidates[0]);
              }}
            />
          </div>
          <div className="w-1/4">
            <CandidateList
              candidates={selectedProject.candidates}
              onSelect={setSelectedCandidate}
            />
          </div>
          <div className="w-1/2">
            <Messages messages={selectedCandidate.messages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
