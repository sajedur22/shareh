"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";
import Image from "next/image";
import { getCourseList } from "@/lib/api/CoursesApi";
import { Course, ApiResponse } from "@/types/course";

export const Courses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCourses() {
            try {
                const courses = await getCourseList(1, 10); // Course[] type
                setCourses(courses); // direct setCourse, no .data
            } catch (err: unknown) {
                if (err instanceof Error) console.error(err.message);
                else console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadCourses();
    }, []);


    if (loading) {
        return (
            <p className="text-center py-20 text-neutral-600 dark:text-neutral-400">
                Loading courses...
            </p>
        );
    }

    return (
        <div className="relative w-full py-10">
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-3 text-chart-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Courses
                </motion.h2>

                <p className="text-neutral-600 dark:text-neutral-400 text-base mt-2">
                    Explore why thousands of learners trust us to build their professional
                    future.
                </p>
            </div>

            {/* Course Cards */}
            <div
                className="
        relative mx-auto mt-16 px-4
        max-w-7xl
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-4 sm:gap-6 lg:gap-8
      "
            >
                {courses?.map((course) => (
                    <BackgroundGradient
                        key={course._id}
                        className="rounded-[22px] w-full max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col"
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            height={300}
                            width={400}
                            className="object-cover w-full h-48 rounded-xl"
                            loading="lazy"
                        />

                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold">
                            {course.title}
                        </p>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                            {course.description}
                        </p>

                        <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-black dark:text-white">
                {course.currency} {course.discounted_price.toLocaleString()}
              </span>

                            <Link href={`/courses/${course._id}`}>
                                <button className="rounded-full px-4 py-2 text-white bg-black dark:bg-zinc-800 hover:scale-105 transition-transform duration-200 text-sm font-semibold">
                                    Course Details
                                </button>
                            </Link>
                        </div>
                    </BackgroundGradient>
                ))}
            </div>
        </div>
    );
};
