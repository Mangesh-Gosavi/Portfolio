import img from '../assets/skill.png';

function Skill() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center bg-blue-950 text-white p-10 gap-8 min-h-screen">
      <img
        className="w-60 h-60 md:w-80 md:h-80 rounded-lg shadow-lg"
        src={img}
        alt="skill"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="bg-red-500 text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-110 transition duration-1000">
          <h3 className="text-sm md:text-xl font-bold mb-4">Programming Languages</h3>
          <p className="text-sm leading-6">Python, JavaScript</p>
        </div>

        <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-110 transition duration-1000">
          <h3 className="text-sm md:text-xl font-bold mb-4">Web Development</h3>
          <p className="text-sm leading-6">HTML, CSS, JavaScript, React, Tailwind</p>
        </div>

        <div className="bg-pink-500 text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-110 transition duration-1000">
          <h3 className="text-sm md:text-xl font-bold mb-4">Framework</h3>
          <p className="text-sm leading-6">React, Angular</p>
        </div>

        <div className="bg-green-500 text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-110 transition duration-1000">
          <h3 className="text-sm md:text-xl font-bold mb-4">Databases</h3>
          <p className="text-sm leading-6">MySql, MongoDB</p>
        </div>

        <div className="bg-teal-500 text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-110 transition duration-1000">
          <h3 className="text-sm md:text-xl font-bold mb-4">Design Tool</h3>
          <p className="text-sm leading-6">Figma</p>
        </div>

        <div className="bg-orange-500 text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-110 transition duration-1000">
          <h3 className="text-sm md:text-xl font-bold mb-4">Responsive Design</h3>
          <p className="text-sm leading-6">Responsive website for all devices</p>
        </div>

        <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-110 transition duration-1000">
          <h3 className="text-sm md:text-xl font-bold mb-4">Data Tool</h3>
          <p className="text-sm leading-6">Power BI, Excel</p>
        </div>

        <div className="bg-green-500 text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-110 transition duration-1000">
          <h3 className="text-sm md:text-xl font-bold mb-4">Python Libraries</h3>
          <p className="text-sm leading-6">Pandas, Matplotlib, Numpy</p>
        </div>
      </div>
    </main>
  );
}

export default Skill;
