import { useState } from "react";

const CandidateList = ({ candidates, onSelect }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]);

  const handleSelect = (candidate) => {
    setSelectedCandidate(candidate);
    onSelect(candidate);
  };

  return (
    <div className="border p-4">
      <h2 className="text-lg font-bold">Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li
            key={candidate.id}
            className={`p-2 cursor-pointer ${
              selectedCandidate.id === candidate.id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSelect(candidate)}
          >
            {candidate.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;
