import { Link } from "react-router-dom";
import menu from '../assets/align-justify.svg';
import cross from '../assets/x.svg';
import { useState } from "react";

function Header() {
  const [sidebar, setSidebarMenubar] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 text-white h-full items-center font-bold">
        <Link to='/'><h2 className="ml-10">Mangesh Gosavi</h2></Link>
        <div className="flex justify-evenly list-none">
          <Link to='/'><li className="hidden md:block hover:scale-125 transition duration-1000">About</li></Link>
          <Link to='/Skill'><li className="hidden md:block hover:scale-125 transition duration-1000">Skills</li></Link>
          <Link to='/Project'><li className="hidden md:block hover:scale-125 transition duration-1000">Projects</li></Link>
          <Link to='/Contact'><li className="hidden md:block hover:scale-125 transition duration-1000">Contact</li></Link>
          {!sidebar ?
            <img className="block md:hidden bg-white p-2 rounded-md shadow-lg shadow-gray-500" src={menu} onClick={() => { setSidebarMenubar(true) }} />
            : <img className="block md:hidden bg-red-500 p-2 rounded-full shadow-lg shadow-red-500" src={cross} onClick={() => { setSidebarMenubar(false) }} />
          }

        </div>
        {sidebar && (
          <div className="absolute top-20 left-0 bg-white text-black w-full p-5 shadow-lg shadow-gray-500 z-20 md:hidden">
            <ul className="flex flex-col gap-4 list-none">
              <Link to="/" onClick={() => setSidebarMenubar(false)}>
                <li>About</li>
              </Link>
              <Link to="/Skill" onClick={() => setSidebarMenubar(false)}>
                <li>Skills</li>
              </Link>
              <Link to="/Project" onClick={() => setSidebarMenubar(false)}>
                <li>Projects</li>
              </Link>
              <Link to="/Contact" onClick={() => setSidebarMenubar(false)}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
