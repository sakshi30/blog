import { Mail, MapPin, User2 } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { about } from "../data/data";
function About() {
  const { introduction, email, location } = about;
  return (
    <div className="animate-fadeIn">
      <SectionTitle icon={User2} title="About Me" />
      <div className="space-y-6 transform transition-all duration-300">
        <p className="text-gray-700 leading-relaxed">{introduction}</p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail style={{ color: "blue" }} size={16} />
            <span>{email}</span>
          </a>
          <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <MapPin style={{ color: "green" }} size={16} />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
