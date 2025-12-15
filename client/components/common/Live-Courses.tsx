"use client";
import React, { useState } from "react";
import { ListVideo, ArrowLeft } from "lucide-react"; // ✅ using lucide-react icons

interface LiveCoursesProps {
    onBack: () => void;
}

const live = {
    course: "Docker Master Classes",
    created: "2025-10-19",
    modules: [
        {
            module_number: 46,
            title: "Docker Master Classes",
            classes: [
                {
                    class_number: 46,
                    title: "Intro to Docker",
                    date: "2025-10-19",
                    video: "/videos/HeroVdo.mp4",
                    pdf:"",
                    duration: "00:32:45",
                    slug: "class-46-intro-to-docker",
                    published: true,
                },
                {
                    class_number: 47,
                    title: "Docker Images & Containers",
                    date: "2025-10-22",
                    video: "/videos/HeroVdo.mp4",
                    duration: "00:35:12",
                    slug: "class-47-images-containers",
                    published: true,
                },
            ],
        },
        {
            module_number: 47,
            title: "Advanced Docker Networking",
            classes: [
                {
                    class_number: 48,
                    title: "Networking Concepts",
                    date: "2025-10-25",
                    video: "/videos/HeroVdo.mp4",
                    duration: "00:40:10",
                    slug: "class-48-networking",
                    published: true,
                },
            ],
        },
        {
            module_number: 46,
            title: "Docker Master Classes",
            classes: [
                {
                    class_number: 46,
                    title: "Intro to Docker",
                    date: "2025-10-19",
                    video: "/videos/HeroVdo.mp4",
                    duration: "00:32:45",
                    slug: "class-46-intro-to-docker",
                    published: true,
                },
                {
                    class_number: 47,
                    title: "Docker Images & Containers",
                    date: "2025-10-22",
                    video: "/videos/HeroVdo.mp4",
                    duration: "00:35:12",
                    slug: "class-47-images-containers",
                    published: true,
                },
            ],
        },
        {
            module_number: 47,
            title: "Advanced Docker Networking",
            classes: [
                {
                    class_number: 48,
                    title: "Networking Concepts",
                    date: "2025-10-25",
                    video: "/videos/HeroVdo.mp4",
                    duration: "00:40:10",
                    slug: "class-48-networking",
                    published: true,
                },
            ],
        },
    ],
};

const LiveCourses: React.FC<LiveCoursesProps> = ({ onBack }) => {
    const [selectedVideo, setSelectedVideo] = useState(live.modules[0].classes[0]);
    const [showList, setShowList] = useState(false);

    return (
        <div className="flex flex-col md:flex-row h-screen bg-zinc-50 dark:bg-zinc-900 overflow-hidden relative">

            {/* 🔙 Back Button */}
            <button
                onClick={onBack}
                className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition z-50"
            >
                <ArrowLeft className="w-5 h-5" />
            </button>

            {/* 🎥 ==== LEFT: Video Player ==== */}
            <div className="md:w-2/3 w-full flex flex-col items-center justify-center p-4 md:p-6 bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">
                    🎥 {selectedVideo.title}
                </h2>

                {selectedVideo.published ? (
                    <video
                        key={selectedVideo.video}
                        src={selectedVideo.video}
                        controls
                        className="w-full h-[40vh] md:h-[70vh] rounded-2xl shadow-md object-cover"
                    />
                ) : (
                    <div className="w-full h-[70vh] flex items-center justify-center text-zinc-500">
                        ⏳ Video not published yet
                    </div>
                )}

                <p className="mt-3 text-sm text-zinc-500">
                    📅 {selectedVideo.date} | ⏱ {selectedVideo.duration}
                </p>
            </div>

            {/* ==== RIGHT: Scrollable List (Desktop only) ==== */}
            <div className="hidden md:block md:w-1/3 h-full overflow-y-auto bg-zinc-100 dark:bg-zinc-900 p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
                    {live.course}
                </h2>

                {live.modules.map((module, i) => (
                    <div
                        key={i}
                        className="border border-zinc-300 dark:border-zinc-700 rounded-2xl p-4 bg-white dark:bg-zinc-800"
                    >
                        <h3 className="text-lg font-medium text-blue-500 mb-2">
                            Module {module.module_number}: {module.title}
                        </h3>

                        {module.classes.map((cls, idx) => (
                            <div
                                key={idx}
                                className={`flex justify-between items-center border-t border-zinc-200 dark:border-zinc-700 py-3 transition ${
                                    selectedVideo.slug === cls.slug
                                        ? "border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-lg"
                                        : "border-l-4 border-transparent"
                                }`}
                            >
                                <div>
                                    <p className="font-medium text-zinc-700 dark:text-zinc-200">
                                        {cls.title}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        {cls.date} • {cls.duration}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSelectedVideo(cls)}
                                    className="px-4 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    ▶ Watch
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* 🎬 Mobile Floating List Button */}
            <button
                onClick={() => setShowList(!showList)}
                className="md:hidden fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
            >
                <ListVideo className="w-6 h-6" />
            </button>

            {/* 📜 Mobile Bottom Drawer */}
            {showList && (
                <div className="fixed inset-x-0 bottom-0 max-h-[75vh] bg-white dark:bg-zinc-900 rounded-t-2xl shadow-2xl p-5 overflow-y-auto z-50 animate-slideUp">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-semibold">{live.course}</h2>
                        <button
                            onClick={() => setShowList(false)}
                            className="text-sm text-blue-600 font-medium"
                        >
                            Close ✕
                        </button>
                    </div>

                    {live.modules.map((module, i) => (
                        <div
                            key={i}
                            className="border border-zinc-300 dark:border-zinc-700 rounded-2xl p-4 bg-zinc-100 dark:bg-zinc-800 mb-4"
                        >
                            <h3 className="text-blue-500 font-semibold mb-2">
                                Module {module.module_number}: {module.title}
                            </h3>

                            {module.classes.map((cls, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        setSelectedVideo(cls);
                                        setShowList(false);
                                    }}
                                    className={`cursor-pointer border-t border-zinc-200 dark:border-zinc-700 py-2 transition ${
                                        selectedVideo.slug === cls.slug
                                            ? "bg-blue-50 dark:bg-blue-900/30"
                                            : ""
                                    }`}
                                >
                                    <p className="font-medium">{cls.title}</p>
                                    <p className="text-xs text-zinc-500">
                                        {cls.date} • {cls.duration}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LiveCourses;
