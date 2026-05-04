import img from '../assets/mangesh.jpeg';
import resume from "../assets/MangeshGosavi.pdf";

function About() {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "MangeshGosavi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-center bg-blue-950 text-white p-10 gap-8 min-h-screen">
      <img
        className="w-60 h-60 shadow-lg shadow-slate-600 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-xl
        hover:scale-110 transition duration-1000"
        src={img}
        alt="Mangesh Namdeo Gosavi"
      />

      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl hover:scale-105 transition duration-500">
        <h3 className="text-xl font-bold mb-4">
          Hi, I'm Mangesh Namdeo Gosavi
        </h3>

        <p className="text-sm leading-6">
          I'm a full-stack developer with <span className="font-semibold text-blue-600">9 months of professional experience as a Junior Software Developer</span>, building scalable and user-focused web applications.
        </p>

        <p className="text-sm leading-6 mt-4">
          I work confidently with technologies like HTML, CSS, JavaScript, React, Angular, Tailwind, Node.js, MySQL, and Figma, focusing on clean UI, performance, and real-world problem solving.
        </p>

        <p className="text-sm leading-6 mt-4">
          I’m passionate about creating intuitive user interfaces and continuously improving my skills. Currently, I’m expanding into data analytics using Python, Pandas, and Power BI to build data-driven solutions.
        </p>

        <p className="text-sm leading-6 mt-4">
          Outside of tech, I was a national-level Handball player, which shaped my discipline, teamwork, and problem-solving mindset.
        </p>

        <div className="mt-6">
          <button
            onClick={onButtonClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
          >
            Download CV
          </button>
        </div>
      </div>
    </main>
  );
}

export default About;
