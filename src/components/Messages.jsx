import { useState } from "react";

const Messages = ({ messages }) => {
  const [activeTab, setActiveTab] = useState("message");

  const currentContent = messages.find((m) => m.type === activeTab)?.content;

  return (
    <div className="border p-4 flex-1">
      <div className="tabs flex items-center">
        {["message", "email", "text"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="content p-4">
        {Array.isArray(currentContent)
          ? currentContent.map((msg, index) => (
              <div
                key={index}
                className={`p-2 ${
                  msg.from === "user" ? "text-right" : "text-left"
                }`}
              >
                {msg.text}
              </div>
            ))
          : currentContent}
      </div>
    </div>
  );
};

export default Messages;
