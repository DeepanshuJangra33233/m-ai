import { useState } from "react";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import CandidateList from "../components/CandidateList";
import Messages from "../components/Messages";
import data from "../../data.json";
import { RightArrow } from "./common/Icons";

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mt-3 ps-3 lg:hidden">
        <span
          className={`max-w-[30px] sm:max-w-[50px] w-full inline-block duration-300 cursor-pointer ${
            isSideBarOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <RightArrow />
        </span>
      </div>
      <div className="flex flex-grow px-3 justify-between mt-3">
        {/* Project List */}
        <div
          className={`fixed h-[calc(100vh-90px)] lg:static w-full sm:w-[50%] lg:w-[33%] z-10 duration-300 ${
            isSideBarOpen ? "left-0" : "-left-full"
          }`}
        >
          <div className="w-full">
            <ProjectList
              id={1}
              projects={data.projects}
              onSelect={(project) => {
                setSelectedProject(project);
                setSelectedCandidate(null); // Reset candidate when the project changes
              }}
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
            />
          </div>

          {/* Candidate List */}
          <div className="w-full">
            <CandidateList
              setIsSideBarOpen={setIsSideBarOpen}
              id={2}
              candidates={selectedProject ? selectedProject.candidates : []}
              onSelect={setSelectedCandidate}
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
            />
          </div>
        </div>
        {/* Message Panel */}
        <div className="w-full lg:w-[66%] bg-white">
          {selectedProject && selectedCandidate ? (
            <Messages
              candidate={selectedCandidate}
              messages={selectedCandidate.messages}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-[#D2D2D2] text-[35px]">
                Please select project name and candidate
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;