import { useState } from "react";

const CandidateList = ({ candidates, onSelect }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleSelect = (candidate) => {
    setSelectedCandidate(candidate);
    onSelect(candidate);
  };

  return (
    <div className="border p-4 bg-white">
      <div className="collapse collapse-arrow">
        <input type="radio" name="candidate-accordion" />
        <div className="collapse-title text-xl font-medium">Candidates</div>
        <div className="collapse-content flex items-center flex-wrap gap-3">
          {candidates.length > 0 ? (
            candidates.map((candidate) => (
              <div
                key={candidate.id}
                className={`mt-3 border border-[#EBEBEB] rounded-[5px] p-5 cursor-pointer list-none w-[48%] ${
                  selectedCandidate && selectedCandidate.id === candidate.id
                    ? "bg-[#E5F0FA]"
                    : ""
                }`}
                onClick={() => handleSelect(candidate)}
              >
                {candidate.name}
              </div>
            ))
          ) : (
            <p className="text-gray-500">Select a project to view candidates</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
