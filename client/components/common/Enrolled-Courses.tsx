"use client";
import React from "react";

const EnData = [
    {
        batch: "Summer 2025",
        courseType: "Live Course",
        title: "Bootcamp: Data Science, Machine Learning & MLOps",
        description:
            "Comprehensive training in data science, machine learning, deep learning and artificial intelligence with Python. Generative AI for ML Engineers.",
        classes: 49,
        duration: "4 months",
        level: "Beginner to advanced",
    },
];

const EnrolledCourses: React.FC<{ onStartLive: () => void }> = ({ onStartLive }) => {
    return (
        <div className="flex flex-col gap-6 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
            <p className="text-2xl md:text-4xl font-serif tracking-tight leading-tight mt-4 mb-3 text-blue-600">
                Continue your learning journey
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 p-3">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-xl px-16 py-4 flex flex-col items-center justify-center shadow-md">
                    <p className="text-3xl font-bold">{EnData.length}</p>
                    <p className="text-sm font-medium">Enrolled Courses</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900 rounded-xl px-16 py-4 flex flex-col items-center justify-center shadow-md">
                    <p className="text-3xl font-bold">1</p>
                    <p className="text-sm font-medium">Active Batch</p>
                </div>
            </div>

            {/* Live Course Info */}
            <div className="bg-zinc-200 flex gap-3 items-center dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                <p className="text-lg font-semibold">Live Courses</p>
                <p className="text-sm px-1.5 py-1 text-zinc-600 dark:text-zinc-400 bg-zinc-700 rounded-2xl">
                    {EnData.length} course{EnData.length > 1 ? "s" : ""}
                </p>
            </div>

            {/* Course Cards */}
            <div className="grid p-2 gap-6 mt-4 sm:grid-cols-1 md:grid-cols-2">
                {EnData.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 sm:p-8 shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-sm text-blue-500 font-medium">{course.batch}</p>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                {course.courseType}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-300 mb-4">{course.description}</p>

                        <div className="flex flex-wrap gap-6 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                            <p>📚 {course.classes} Classes</p>
                            <p>⏳ {course.duration}</p>
                            <p>🎓 {course.level}</p>
                        </div>

                        <button
                            aria-label="Start Learning this course"
                            className="mt-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                            onClick={onStartLive}
                        >
                            Start Learning
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EnrolledCourses;
