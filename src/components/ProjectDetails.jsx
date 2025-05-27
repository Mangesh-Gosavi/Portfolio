import React from 'react';
import { useLocation } from 'react-router-dom';

function ProjectDetails() {
  const { state } = useLocation();
  const project = state?.project;

  if (!project) return <div className="text-white p-10">No project data found.</div>;

  return (
    <div className="p-6 bg-blue-950 min-h-screen">
      <div className="bg-white text-black rounded-lg p-10">
        <h1 className="text-3xl font-bold mb-4">Project Name: {project.title}</h1>

        <div className="flex justify-center">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full max-w-xl rounded-lg mb-6"
          />
        </div>

        <p className="whitespace-pre-line">{project.description}</p>

        <div className="mt-6 space-y-2">
          <div><strong>Duration:</strong> {project.duration}</div>
          <div><strong>Institute:</strong> {project.institute}</div>
          <div><strong>Skills:</strong> {project.skills?.join(', ')}</div>

          {project.liveUrl && project.liveUrl.length > 0 && (
            <div>
              <strong>Live URL:</strong>
              {project.liveUrl?.map((url, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline block"
                >
                  {url}
                </a>
              ))}
            </div>
          )}

          {project.githubUrl && project.githubUrl.length > 0 && (
            <div>
              <strong>GitHub:</strong>
              <div className="flex flex-col">
                {project.githubUrl.map((url, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline mb-1"
                  >
                    {url}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
