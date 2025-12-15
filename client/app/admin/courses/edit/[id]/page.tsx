"use client";

import { useState, useEffect, use } from "react";
import CourseForm from "@/components/admin/CourseForm";
import { getCourseById } from "@/lib/api/CoursesApi";
import { Course } from "@/types/course";

interface EditCourseProps {
    params: Promise<{ id: string }>; // params এখন Promise
}

export default function EditCourse({ params }: EditCourseProps) {
    // unwrap the promise
    const { id } = use(params);

    const [item, setItem] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCourse() {
            try {
                const course = await getCourseById(id);
                setItem(course);
            } catch (err: unknown) {
                if (err instanceof Error) console.error(err.message);
                else console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadCourse();
    }, [id]);

    if (loading)
        return (
            <p className="text-center py-20 text-neutral-600 dark:text-neutral-400">
                Loading...
            </p>
        );

    if (!item) return <p>Course not found!</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl text-white z-50  font-bold mb-4">Edit Course</h2>
            <CourseForm existing={item} id={id} />
        </div>
    );
}
