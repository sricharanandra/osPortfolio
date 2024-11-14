import React from "react";
import Draggable from "react-draggable";

function ProjectsWindow({ onClose, onMinimize }) {
  const projects = [
    { name: "dash", link: "https://github.com/sricharan/dash" },
    {
      name: "rustybrain",
      link: "https://github.com/sricharanandra/rustybrain",
    },
  ];

  return (
    <Draggable>
      <div className="projects-window bg-white border border-gray-300 shadow-lg p-4 w-80 absolute top-16 left-16">
        <div className="window-header flex justify-between items-center bg-gray-700 text-white p-2">
          <span>Projects</span>
          <div className="flex space-x-2">
            <button onClick={onMinimize} className="minimize-button">
              _
            </button>
            <button onClick={onClose} className="close-button">
              X
            </button>
          </div>
        </div>
        <div className="window-content p-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>
    </Draggable>
  );
}

export default ProjectsWindow;
