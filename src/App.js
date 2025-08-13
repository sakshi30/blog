import React from "react";
import "./index.css";
import TopNav from "./pages/TopNav";
import SideNav from "./pages/SideNav";
import MainContent from "./pages/MainContent";
import { useActiveSection } from "./context/ActiveSection";
import Footer from "./pages/Footer";
import ChatWidget from "./components/ChatWidget";

const App = () => {
  const { activeSection } = useActiveSection();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-slate-800 to-blue-gray-700 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale blur-md opacity-40 z-0"
        style={{ backgroundImage: `url(/${activeSection}.jpg)` }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Header */}
        <TopNav />

        <div className="flex flex-grow max-w-6xl mx-auto px-4 py-6 gap-6 items-start w-full">
          <SideNav />
          {/* Main Content */}
          <main className="flex-1 w-full rounded-lg animate-slideInRight">
            <MainContent />
          </main>
        </div>
      </div>

      {/* Footer at Bottom */}
      <div className="relative z-10 backdrop-blur-none">
        <Footer />
      </div>
      <ChatWidget />
    </div>
  );
};

export default App;
