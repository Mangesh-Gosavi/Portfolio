import img from '../assets/mangesh.jpeg';

function About() {

  const onButtonClick = () => {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; 
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
      
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg shadow-slate-600 max-w-xl
      hover:scale-110 transition duration-1000">
        <h3 className="text-xl font-bold mb-4">
          Hi, I'm Mangesh Namdeo Gosavi
        </h3>
        <p className="text-sm leading-6">
          I'm a full-stack developer and design enthusiast aiming to excel as a web or software developer. 
          I feel comfortable working with technologies like HTML, CSS, JavaScript, React, Tailwind, Node.js, MySQL, 
          Figma, and many others in the web ecosystem.
        </p>
        <p className="text-sm leading-6 mt-4">
          I love programming, design, and user interfaces—my true passions. Beyond work, I was a national-level 
          sports player in Handball. Currently, I'm working on a MERN project and diving into ML for automation.
        </p>

        <div className="mt-6">
          <button  onClick={onButtonClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300">
            Download CV
          </button>
        </div>
      </div>
    </main>
  );
}

export default About;
