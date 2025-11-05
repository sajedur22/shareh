"use client";
import React, { useState } from "react";
import { Menu, BookOpen, Video, CreditCard, Home } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import EnrolledCourses from "@/components/common/Enrolled-Courses";
import LiveCourses from "@/components/common/Live-Courses";

const MyCourses: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("My Courses");
    const [isLiveMode, setIsLiveMode] = useState<boolean>(false);

    const tabs: { label: string; icon: React.ReactNode }[] = [
        { label: "My Courses", icon: <BookOpen className="w-5 h-5" /> },
        { label: "Live Classes", icon: <Video className="w-5 h-5" /> },
        { label: "Payments", icon: <CreditCard className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen flex bg-zinc-50 dark:bg-zinc-900 transition-all">
            {/* ✅ Sidebar */}
            <aside
                className={`hidden sm:flex sm:flex-col bg-white dark:bg-zinc-800
                border-r border-zinc-200 dark:border-zinc-700 py-10 items-center
                fixed left-0 top-0 h-screen z-40 transition-all duration-300
                ${isLiveMode ? "w-20" : "w-64"}`}
            >
                <Link
                    href="/"
                    className={`flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline mb-4 transition-all ${
                        isLiveMode ? "justify-center" : ""
                    }`}
                >
                    <Home className="w-4 h-4" />
                    {!isLiveMode && "Home"}
                </Link>

                {!isLiveMode && (
                    <h2 className="text-xl font-bold mb-10 text-zinc-800 dark:text-zinc-100">
                        Dashboard
                    </h2>
                )}

                <nav className={`flex flex-col gap-4 w-full ${isLiveMode ? "px-2" : "px-6"}`}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`flex items-center gap-3 py-3 rounded-full font-medium transition text-left justify-${
                                isLiveMode ? "center" : "start"
                            } ${
                                activeTab === tab.label
                                    ? "bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900"
                                    : "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600"
                            }`}
                        >
                            {tab.icon}
                            {!isLiveMode && tab.label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* ✅ Main content area */}
            <div
                className={`flex flex-col flex-1 min-h-screen transition-all duration-300 ${
                    isLiveMode ? "sm:ml-20" : "sm:ml-64"
                }`}
            >
                {/* 🔹 Top Navigation */}
                <header
                    className="w-full bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 px-6 py-2 flex items-center justify-between sticky top-0 z-50">

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                aria-label="Open navigation menu"
                                className="p-2 rounded-md sm:hidden"
                            >
                                <Menu className="h-6 w-6 text-zinc-800 dark:text-zinc-100"/>
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuSeparator/>
                            {tabs.map((tab) => (
                                <DropdownMenuItem
                                    key={tab.label}
                                    onClick={() => setActiveTab(tab.label)}
                                >
                                    {tab.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 capitalize">
                        {activeTab}
                    </div>
                </header>

                {/* 🔹 Main Section */}
                <main className="flex-1 pt-0! sm:p-10">
                    <div
                        className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md pt-0 text-center h-full transition-all">
                        {activeTab === "My Courses" && (
                            <>
                                {!isLiveMode ? (
                                    <EnrolledCourses onStartLive={() => setIsLiveMode(true)} />
                                ) : (
                                    <LiveCourses onBack={() => setIsLiveMode(false)} />
                                )}
                            </>
                        )}

                        {activeTab === "Live Classes" && !isLiveMode && (
                            <p className="text-zinc-600 dark:text-zinc-300">
                                You don’t have any live classes scheduled yet.
                            </p>
                        )}

                        {activeTab === "Payments" && (
                            <p className="text-zinc-600 dark:text-zinc-300">
                                View your course payments and receipts here.
                            </p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MyCourses;
