import React from "react";
import { Meteors } from "../ui/meteors";
import {motion} from "framer-motion";
import {Beams, Card, Rays} from "@/components/common/card";
import {Lens} from "@/components/ui/lens";

 const features = [
    {
        id: 1,
        title: "Advanced Tech Stack",
        description:
            "Master modern frameworks and tools used by top tech companies and understand industry best practices.",
        icon: "💻", // চাইলে এখানে Lucide বা custom icon দাও
    },
    {
        id: 2,
        title: "Expert Mentors",
        description:
            "Learn directly from industry professionals with years of real-world experience.",
        icon: "👨‍🏫",
    },
    {
        id: 3,
        title: "Hands-on Projects",
        description:
            "Work on real-life projects to gain practical experience and build your portfolio.",
        icon: "🧠",
    },
];


export const WhyChoose: React.FC = () => {
    return (
        <div className={"bg-background w-full py-5"}>
            <div className={'text-center max-w-3xl mx-auto'}>
                <motion.h2
                    className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-3 text-chart-6"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    Why Choose Our Courses
                </motion.h2>
                <motion.h6
                    className="text-2xl md:text-3xl font-serif tracking-tight leading-tight mb-3 text-secondary"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    Trusted by Employees at Leading Companies
                </motion.h6>
                <motion.p
                    className="text-lg text-accent/70 mb-8"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                >
                    Our students secured positions at world-class tech companies like Google, Apple, Optimizely, Ollyo,
                    and Brainstation 23
                </motion.p>
            </div>
            <div className="relative w-full ">
                <div
                    className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl"/>

                <div className="w-full relative mx-auto mt-16 px-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: feature.id * 0.2}}
                            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 border border-white/10 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all flex flex-col justify-start"
                        >
                            <Rays/>
                            <Beams/>
                            <div className="relative z-10 text-left">
                                <div
                                    className="inline-block bg-white/10 p-3 rounded-xl mb-3 hover:bg-white/20 transition">
                                    <span className="text-2xl">{feature.icon}</span>
                                </div>
                                <h2 className="text-white text-xl font-bold">{feature.title}</h2>
                                <p className="text-neutral-200 mt-2">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </div>

    );
};
