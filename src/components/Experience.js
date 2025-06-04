import { Briefcase } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { experience } from "../data/data";

function Experience() {
  const { companies } = experience;
  return (
    <div className="animate-fadeIn">
      <SectionTitle icon={Briefcase} title="Experience" />
      <div className="space-y-8">
        {companies.map((company) => {
          const { role, name, image, from, description } = company;
          const listItems = description
            .trim()
            .split("\n")
            .map((item) => (
              <li
                key={item}
                className="hover:translate-x-2 transition-transform duration-300"
              >
                {item}
              </li>
            ));

          return (
            <div
              className="border-l-2 border-blue-500 pl-4 hover:pl-6 transition-all duration-300"
              key={name}
            >
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={image}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {role}
                  </h3>
                  <p className="text-gray-600">{name}</p>
                </div>
                <span className="text-sm text-blue-500 font-medium ml-auto">
                  {from}
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {listItems}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
