import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // NEW: loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false); // done loading whether success or fail
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="bg-blue-950 min-h-screen p-6 md:p-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-50"></div>
          <span className="ml-4 text-lg">Loading projects...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white text-black rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col overflow-hidden mt-4"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-24 w-full object-contain rounded-lg"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4 clamp-text">
                  {project.description}
                </p>

                <button
                  onClick={() => navigate(`/projectdetails/${project._id}`, { state: { project } })}
                  className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Projects;
