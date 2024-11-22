import img from '../assets/skill.png';
import proj1 from '../assets/supchain.jpg';
import proj2 from '../assets/shop.jpg';
import proj3 from '../assets/admin.jpg';
import proj4 from '../assets/music.jpg';
import { Link } from 'react-router-dom';



function Project() {

  return (
    <>
      <main className="flex flex-col items-center justify-center bg-blue-950 text-white p-10 gap-8 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          <Link to=''><img
            className="w-60 h-60 md:w-96 md:h-96 rounded-lg shadow-lg hover:scale-110 transition duration-1000"
            src={proj1}
            alt="Project 1 Loading"
          /></Link>
          <Link to='https://pooja-collection-eosin-delta.vercel.app/'><img
            className="w-60 h-60 md:w-96 md:h-96 rounded-lg shadow-lg hover:scale-110 transition duration-1000"
            src={proj2}
            alt="Project 2 Loading"
          /></Link>
          <Link to='https://pooja-collection-admin.vercel.app/'><img
            className="w-60 h-60 md:w-96 md:h-96 rounded-lg shadow-lg hover:scale-110 transition duration-1000"
            src={proj3}
            alt="Project 3 Loading"
          /></Link>
          <Link to=''><img
            className="w-60 h-60 md:w-96 md:h-96 rounded-lg shadow-lg hover:scale-110 transition duration-1000"
            src={proj4}
            alt="Project 1 Loading"
          /></Link>
          <Link to='https://pooja-collection-eosin-delta.vercel.app/'><img
            className="w-60 h-60 md:w-96 md:h-96 rounded-lg shadow-lg hover:scale-110 transition duration-1000"
            src={proj2}
            alt="Project 2 Loading"
          /></Link>
          <Link to='https://pooja-collection-admin.vercel.app/'><img
            className="w-60 h-60 md:w-96 md:h-96 rounded-lg shadow-lg hover:scale-110 transition duration-1000"
            src={proj3}
            alt="Project 3 Loading"
          /></Link>

        </div>
      </main>
    </>
  );
}

export default Project;