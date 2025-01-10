import { useState } from "react";

const Messages = ({ messages, candidate }) => {
  const [activeTab, setActiveTab] = useState("message");

  // Function to get initials from the candidate name
  const getInitials = (fullName) => {
    if (!fullName) return "";
    const nameParts = fullName.trim().split(" ");
    return nameParts.length > 1
      ? `${nameParts[0][0].toUpperCase()}${nameParts[
          nameParts.length - 1
        ][0].toUpperCase()}`
      : nameParts[0][0].toUpperCase();
  };

  // Retrieve content for the current active tab
  const currentContent = messages.find((m) => m.type === activeTab)?.content;

  return (
    <div className="border p-4 flex-1 h-full flex flex-col justify-between bg-white">
      {/* Header Section */}
      <div>
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center space-x-3">
            {/* Candidate's Name */}
            <p className="font-semibold text-[22px]">{candidate.name}</p>
          </div>
          <div className="flex items-center space-x-[18px]">
            <img
              className="w-[26px] cursor-pointer"
              src="/assets/images/phone.png"
              alt="phone"
            />
            <img
              className="w-[26px] cursor-pointer"
              src="/assets/images/videoCall.png"
              alt="video call"
            />
            <img
              className="w-[26px] cursor-pointer"
              src="/assets/images/menuVertical.png"
              alt="menu"
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs flex items-center border-b border-b-gray-400">
          {["message", "email", "text"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-black relative duration-300 ${
                activeTab === tab
                  ? "after:absolute after:content-[''] after:h-[2px] after:bg-black after:left-0 after:w-full after:bottom-[1px]"
                  : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="content sm:p-4">
          {Array.isArray(currentContent)
            ? currentContent.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 flex items-center gap-3 ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.from !== "user" && (
                    <div
                      className="min-w-10 min-h-10 rounded-full bg-[#C6D5D9] flex items-center justify-center text-black"
                    >
                      {getInitials("Team Lead")}
                    </div>
                  )}
                  <div
                    className={`p-2 max-w-[70%] rounded-lg ${
                      msg.from === "user"
                        ? "bg-[#CCE6CC] text-black"
                        : "bg-[#E0E0E0] text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.from === "user" && (
                    <div
                      className="min-w-10 min-h-10 rounded-full bg-[#CCE6CC] flex items-center justify-center text-black"
                    >
                      {getInitials(candidate.name)}
                    </div>
                  )}
                </div>
              ))
            : <p className="text-gray-500">No content available for this tab.</p>}
        </div>
      </div>

      {/* Input Section */}
      <div className="border border-gray-300 rounded-[10px]">
        <div className="border-b border-gray-300 ps-[10px] py-[10px]">
          <img
            className="w-full max-w-[324px]"
            src="/assets/images/textEditorTools.png"
            alt="tools"
          />
        </div>
        <textarea
          className="bg-white w-full p-3 focus:outline-none"
          placeholder={`Enter ${activeTab} here`}
        ></textarea>
        <div className="flex justify-end pe-[14px] pb-[14px]">
          <button className="px-[16px] py-[7.5px] bg-[#0D77D4] rounded-[4px] font-medium text-[12px] border border-[#0D77D4] text-white hover:bg-white hover:text-[#0D77D4] duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
