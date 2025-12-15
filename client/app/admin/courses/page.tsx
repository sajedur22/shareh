"use client";

import { useEffect, useState } from "react";
import { getCourseList } from "@/lib/api/CoursesApi";
import Link from "next/link";
import CourseTable from "@/components/admin/CourseTable";
import { Course } from "@/types/course";

export default function CourseListPage() {
    const [data, setData] = useState<Course[]>([]);

    function load() {
        getCourseList(1, 10)
            .then((res) => {
                setData(res || []); // ✅ correctly typed
            })
            .catch((err: unknown) => {
                if (err instanceof Error) console.error(err.message);
                else console.error(err);
            });
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl text-white bg-gray-700 rounded-2xl p-2 z-10 font-bold">Courses</h2>
                <Link
                    href="/admin/courses/create"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    + Create New Course
                </Link>
            </div>

            <CourseTable courses={data} reload={load} />
        </div>
    );
}
