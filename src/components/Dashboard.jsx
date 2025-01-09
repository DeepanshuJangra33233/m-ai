import React, { useState } from "react";
import Header from "./Header";
import ProjectList from "./ProjectList";
import Messages from "./Messages";
import CandidateList from "./CandidateList";
import data from "../../data.json";
import { RightArrow } from "./common/Icons";

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState(data.projects[0]);
  const [selectedCandidate, setSelectedCandidate] = useState(
    data.projects[0].candidates[0]
  );
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Header />
        <div>
          <span
            className="cursor-pointer w-[50px] shadow-lg inline-block rounded-2xl"
            onClick={() => setShowSideBar(true)}
          >
            <RightArrow />
          </span>
        </div>
        <div className="flex flex-grow">
          <div className="max-w-[475px] w-full">
            <ProjectList
              projects={data.projects}
              onSelect={(project) => {
                setSelectedProject(project);
                setSelectedCandidate(project.candidates[0]);
              }}
            />
            <CandidateList
              candidates={selectedProject.candidates}
              onSelect={setSelectedCandidate}
            />
          </div>
          <div className="max-w-[931px] w-full">
            <Messages messages={selectedCandidate.messages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
