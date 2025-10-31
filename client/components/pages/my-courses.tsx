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

const MyCourses: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("My Courses");

    const tabs: { label: string; icon: React.ReactNode }[] = [
        { label: "My Courses", icon: <BookOpen className="w-5 h-5" /> },
        { label: "Live Classes", icon: <Video className="w-5 h-5" /> },
        { label: "Payments", icon: <CreditCard className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen flex bg-zinc-50 dark:bg-zinc-900">
            {/* ✅ Sidebar */}
            <aside
                className="hidden sm:flex sm:flex-col sm:w-64 bg-white dark:bg-zinc-800
        border-r border-zinc-200 dark:border-zinc-700 py-10 items-center
        fixed left-0 top-0 h-screen z-40"
            >
                <Link
                    href="/"
                    className="text-sm font-medium text-blue-600 hover:underline mb-4 flex items-center gap-2"
                >
                    <Home className="w-4 h-4" />
                    Home
                </Link>

                <h2 className="text-xl font-bold mb-10 text-zinc-800 dark:text-zinc-100">
                    Dashboard
                </h2>

                <nav className="flex flex-col gap-4 w-full px-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition text-left ${
                                activeTab === tab.label
                                    ? "bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900"
                                    : "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600"
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* ✅ Main content area (with header) */}
            <div className="flex flex-col flex-1 sm:ml-64 min-h-screen">
                {/* 🔹 Top Navigation */}
                <header className="w-full bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                    {/* Mobile Menu Icon */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                aria-label="Open navigation menu"
                                className="p-2 rounded-md sm:hidden"
                                suppressHydrationWarning
                            >
                                <Menu className="h-6 w-6 text-zinc-800 dark:text-zinc-100" />
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuSeparator />
                            {tabs.map((tab) => (
                                <DropdownMenuItem key={tab.label}>
                                    {tab.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Page Title */}
                    <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                        my-courses
                    </div>
                </header>

                {/* 🔹 Main Section */}
                <main className="flex-1 p-6 sm:p-10">
                    <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-10 text-center h-full">
                        {activeTab === "My Courses" && (
                            <div className="space-y-4">
                                <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                                    Continue your learning journey
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                                    Access your ongoing courses, live sessions, and progress from
                                    one place.
                                </p>
                                <button className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
                                    Browse Courses
                                </button>
                            </div>
                        )}

                        {activeTab === "Live Classes" && (
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
