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
              <source
                src={`${process.env.PUBLIC_URL}/wild_oasis.mov`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="border-l-2 border-blue-500 pl-4 hover:pl-6 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Pet Care: Voice Agent for Automated Pet Profile Management & Health
            Tracking
          </h3>
          <p className="text-gray-600">
            Pet Care is an AI-powered voice agent that automates key workflows
            in pet clinics, grooming centers, and veterinary hospitals using
            python and assembly ai
          </p>
          <h5>
            <b>Github</b>
          </h5>
          <a
            href="https://github.com/sakshi30/PetCare-AI-Assistant-Backend"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 mt-1"
          >
            https://github.com/sakshi30/PetCare-AI-Assistant-Backend
          </a>
          <br />
          <a
            href="https://github.com/sakshi30/PetCare-AI-Assistant"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 mt-1"
          >
            https://github.com/sakshi30/PetCare-AI-Assistant
          </a>
          <br />
          <h5>
            <b>Video Demo</b>
          </h5>
          <a
            href="https://drive.google.com/file/d/1i5ry7hSk76Qkc7KNBDksel53rBe4sD5K/view"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 mt-1"
          >
            https://drive.google.com/file/d/1i5ry7hSk76Qkc7KNBDksel53rBe4sD5K/view
          </a>
        </div>
        <div className="border-l-2 border-blue-500 pl-4 hover:pl-6 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Smart Document Hub
          </h3>
          <p className="text-gray-600">
            Users can upload PDFs or submit web links - the backend processes
            will extract text (using pdfplumber for PDFs and Jina Reader for web
            links), then enrich with AI-generated summaries and key points via
            OpenAI
          </p>
          <h5>
            <b>Github</b>
          </h5>
          <a
            href="https://github.com/sakshi30/study-enhancement-bknd"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 mt-1"
          >
            https://github.com/sakshi30/study-enhancement-bknd
          </a>
          <br />
          <a
            href="https://github.com/sakshi30/study_documents_fe"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 mt-1"
          >
            https://github.com/sakshi30/study_documents_fe
          </a>
          <br />
          <h5>
            <b>Video Demo</b>
          </h5>
          <a
            href="https://drive.google.com/file/d/1AhO3UQ-9s43K_jO6AXwx7yfeQRU9HRJb/view"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 mt-1"
          >
            https://drive.google.com/file/d/1AhO3UQ-9s43K_jO6AXwx7yfeQRU9HRJb/view
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
