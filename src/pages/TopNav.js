function TopNav() {
  return (
    <header className="bg-white/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center space-x-6">
        <img
          src={`${process.env.PUBLIC_URL}/personal.png`}
          alt="Sakshi Srivastava"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-5xl font-bold text-white animate-fadeInDown">
            Sakshi Srivastava
          </h1>
          <p className="text-2xl text-blue-100 mt-2 animate-fadeInUp">
            Full Stack Developer
          </p>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
