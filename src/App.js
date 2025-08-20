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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-900 to-slate-900 relative">
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

            {/* Call to Action Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-lg border border-blue-400/30 shadow-lg">
              <h4 className="text-lg font-semibold text-white mb-3">
                Want to know more?
              </h4>
              <p className="text-gray-200 mb-4">
                Explore more of my projects and contributions on GitHub or
                Huggingface, or use the floating chat widget to reach out!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/sakshi30?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                >
                  Visit My GitHub
                </a>
                <a
                  href="https://huggingface.co/sakshi3007"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                >
                  Visit My Huggingface
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div></div>

      {/* Footer at Bottom */}
      <div className="relative z-10 backdrop-blur-none">
        <Footer />
      </div>

      <ChatWidget />
    </div>
  );
};

export default App;
