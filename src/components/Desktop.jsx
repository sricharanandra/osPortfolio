import { useState } from "react";
import ProjectsWindow from "./ProjectsWindow";

function Desktop() {
    const [isProjectsOpen, setProjectsOpen] = useState(false);
    const [isProjectsMinimized, setProjectsMinimized] = useState(false);

    return (
        <div className="desktop  h-screen bg-[url('./src/assets/desktop.jpg')] relative">
            <div className="desktop-icon ml-2" onClick={() => setProjectsOpen(true)}>
                <img
                    src="src/assets/folder.ico"
                    className="@apply h-16 w-16 ml-2 pb-0.5 pt-4"
                    alt="Projects Folder"
                />
                <p className="ml-2 text-gray-200 font-sans">Projects</p>
            </div>
            {isProjectsOpen && !isProjectsMinimized && (
                <ProjectsWindow
                    onClose={() => setProjectsOpen(false)}
                    onMinimize={() => setProjectsMinimized(true)}
                />
            )}

            <div className="taskbar fixed bottom-0 w-full h-14 bg-gray-300 bg-opacity-30 backdrop-filter backdrop-blur-lg flex justify-between items-center px-4">
                <button className="start-button"><img src="src/assets/start.jpg" alt="start-icon" className="h-14 w-20 " /></button>
                <div className="clock">12:00 PM</div>
            </div>
        </div>
    );
}

export default Desktop;
