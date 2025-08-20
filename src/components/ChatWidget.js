import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#4a90e2",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          zIndex: 9999,
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "400px",
            height: "70vh",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            overflow: "hidden",
            zIndex: 9999,
          }}
        >
          <iframe
            src="https://sakshi3007-resume-bot.hf.space"
            title="Resume Chatbot"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      )}
    </>
  );
};

export default ChatWidget;
