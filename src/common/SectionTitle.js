const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-6 animate-fadeIn">
    <Icon size={24} className="text-blue-500" />
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
  </div>
);
export default SectionTitle;
