"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";
import Image from "next/image";

const data = [
    {
        id: 1,
        title: "Bootcamp: Robotics & Automation Engineering",
        description:
            "Learn how to design, simulate, and program intelligent robotic systems using sensors, actuators, and embedded controllers. Explore AI-powered automation workflows.",
        duration: "5 months",
        level: "Intermediate to advanced",
        next_batch_starting: "2026-01-10",
        currency: "BDT",
        original_price: 31995,
        discounted_price: 19995,
        image: "/images/web-development.jpg",
    },
    {
        id: 2,
        title: "Bootcamp: Machine Learning & AI",
        description:
            "Build predictive models, explore neural networks, and master deep learning tools like TensorFlow and PyTorch. From data preprocessing to real-world deployment.",
        duration: "6 months",
        level: "Beginner to advanced",
        next_batch_starting: "2026-01-20",
        currency: "BDT",
        original_price: 34995,
        discounted_price: 21995,
        image: "/images/web-development.jpg",
    },
    {
        id: 3,
        title: "Bootcamp: Full Stack Web Development",
        description:
            "Become a professional full stack developer by mastering React, Next.js, Node.js, and MongoDB. Build responsive, secure, and scalable web apps.",
        duration: "4.5 months",
        level: "Beginner to advanced",
        next_batch_starting: "2026-02-01",
        currency: "BDT",
        original_price: 29995,
        discounted_price: 17995,
        image: "/images/web-development.jpg",    },
];

export const Courses: React.FC = () => {
    return (
        <div className="py-10">
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
                    Explore why thousands of learners trust us to build their professional future.
                </p>
            </div>

            {/* Course Cards */}
            <div className="w-full relative mx-auto mt-16 px-3 grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center">
                {data.map((course) => (
                    <BackgroundGradient
                        key={course.id}
                        className="rounded-[22px] max-w-sm p-3 sm:p-8 bg-white dark:bg-zinc-900 flex flex-col"
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            height={400}
                            width={400}
                            className="object-contain w-full h-auto rounded-xl"
                            loading="lazy"
                        />

                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold">
                            {course.title}
                        </p>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-black dark:text-white">
                {course.currency} {course.discounted_price.toLocaleString()}
              </span>
                       <Link href={"/my-courses"}>
                            <button className="rounded-full pl-4 pr-4 py-2 text-white bg-black dark:bg-zinc-800 hover:scale-105 transition-transform duration-200 text-sm font-semibold">
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
