import React from "react";
import { Hero } from "@/components/common/Hero";
import {Courses} from "@/components/common/Courses";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const Page = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Courses/>
            <Footer/>
        </div>
    );
};

export default Page;
