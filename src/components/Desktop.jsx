import { useState } from "react";
import ProjectsWindow from "./ProjectsWindow";

function Desktop() {
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isProjectsMinimized, setProjectsMinimized] = useState(false);

  return (
    <div className="desktop h-screen bg-[url('./src/assets/desktop.jpg')] relative">
      <div className="desktop-icon" onClick={() => setProjectsOpen(true)}>
        <img
          src="src/assets/folder.ico"
          className="@apply h-12 w-12 ml-2 pt-4"
          alt="Projects Folder"
        />
        <p>Projects</p>
      </div>
      {isProjectsOpen && !isProjectsMinimized && (
        <ProjectsWindow
          onClose={() => setProjectsOpen(false)}
          onMinimize={() => setProjectsMinimized(true)}
        />
      )}

      <div className="taskbar fixed bottom-0 w-full h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-between items-center px-4">
        <button className="start-button">Start</button>
        <div className="clock">12:00 PM</div>
      </div>
    </div>
  );
}

export default Desktop;
