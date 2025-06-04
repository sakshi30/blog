import { Projector } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

function Projects() {
  return (
    <div className="animate-fadeIn">
      <SectionTitle icon={Projector} title="Projects" />
      <div className="space-y-6">
        <div className="border-l-2 border-blue-500 pl-4 hover:pl-6 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Hotel Booking Management
          </h3>
          <p className="text-gray-600">
            A web application built with React.js and Supabase.
          </p>
          <a
            href="https://github.com/sakshi30/wild-oasis.git"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 mt-1"
          >
            https://github.com/sakshi30/wild-oasis.git
          </a>
          <div className="mt-4">
            <video className="w-full max-w-md rounded-lg shadow-lg" controls>
              <source src="/wild_oasis.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
