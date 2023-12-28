import React from "react";

export default function Projects() {
    return (
        <main className="flex flex-col items-center gap-5">
            <h1 className="font-bold text-2xl">My Projects</h1>
            <div className="flex flex-col gap-3">
                <a href="https://github.com/MisterKirill/internet_visualizer" target="_blank">
                    <div className="text-center py-10 px-3 transition-colors bg-blue-900 hover:bg-blue-800 rounded-md w-80">
                        <h1 className="font-bold">Internet Visualizer</h1>
                    </div>
                </a>
            </div>
        </main>
    )
}