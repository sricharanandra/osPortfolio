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
            <div className="h-2/3 w-2/3 bg-gray-100 flex flex-col">
                <div className="bg-gray-300 flex items-center px-4 py-2 border-b border-gray-400">
                    <div className="flex space-x-2 mr-4">
                        <button className="w-6 h-6 bg-gray-500 rounded text-white">
                            {" "}
                            b{" "}
                        </button>
                        <button className="w-6 h-6 bg-gray-500 rounded text-white">
                            {" "}
                            f
                        </button>
                    </div>
                    <div className="flex-1 bg-white border border-gray-400 rounded flex items-center px-2">
                        <span className="text-gray-600">This PC - Desktop - Projects</span>
                    </div>
                    <button onClick={onClose} className="ml-4 w-6 h-6 bg-gray-500 rounded text-white">
                        r
                    </button>
                </div>

                <div className="bg-gray-200 flex px-4 py-2 border-b border-gray-400">
                    <button className="text-gray-800 font-medium px-2 py-1 hover:bg-gray-300 rounded">
                        Organize
                    </button>
                    <button className="text-gray-800 font-medium px-2 py-1 hover:bg-gray-300 rounded">
                        Open
                    </button>
                    <button className="text-gray-800 font-medium px-2 py-1 hover:bg-gray-300 rounded">
                        Burn
                    </button>
                </div>

                <div className="flex flex-1">
                    <div className="w-48 bg-gray-100 border-r border-gray-400">
                        <ul className="space-y-2 p-2">
                            <li className="text-gray-700">Libraries</li>
                            <li className="text-gray-700">Documents</li>
                            <li className="text-gray-700">Pictures</li>
                            <li className="text-gray-700">Music</li>
                        </ul>
                    </div>


                    <div className="flex-1 bg-white p-4">
                        <div className="window-content p-2">
                            <div className="project-icon ml-2">
                                <img src="src/assets/folder.ico" alt="rustybrain-image" className=" h-16 w-20" />
                                <p className="text-gray-700">rustybrain</p>
                            </div>
                        </div>

                        <div className="window-content p-2">
                            <div className="project-icon ml-2">
                                <img src="src/assets/folder.ico" alt="dash-image" className=" h-16 w-20" />
                                <p className="text-gray-700">dash</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Draggable >
    );
}

export default ProjectsWindow;
