import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { footer } from "../data/data";

function Footer() {
  const { Linkedin, Github, CodeSandbox } = footer;
  return (
    <footer>
      <hr />
      <div className="flex justify-center gap-6 py-4">
        <a
          href={Linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-blue-500 transition"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a
          href={Github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-500 transition"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href={CodeSandbox}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-500 transition"
        >
          <FaCodepen className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
