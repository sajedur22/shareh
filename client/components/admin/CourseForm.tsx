"use client"
import { useState } from "react";
import { createCourse, updateCourse } from "@/lib/api/CoursesApi";
import { Course } from "@/types/course";
import InputField from "@/components/common/Input";
import TextAreaField from "@/components/common/TextAreaField";

interface CourseFormProps {
    existing?: Course;
    id?: string;
}

export default function CourseForm({ existing, id }: CourseFormProps) {
    const [form, setForm] = useState<Partial<Course>>(
        existing || {
            title: "",
            description: "",
            duration: "",
            level: "",
            next_batch_starting: "",
            currency: "USD",
            original_price: 0,
            discounted_price: 0,
            image: "",
        }
    );

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit() {
        try {
            if (id) {
                await updateCourse(id, form);
                alert("Course updated successfully!");
            } else {
                await createCourse(form);
                alert("Course created successfully!");
            }
        } catch (err: unknown) {
            if (err instanceof Error) alert(`Error: ${err.message}`);
            else alert("Unknown error occurred");
        }
    }

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <InputField
                    label="Course Title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                />

                <InputField
                    label="Duration"
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    placeholder="12 Weeks"
                />

                <InputField
                    label="Level"
                    name="level"
                    value={form.level}
                    onChange={handleChange}
                    placeholder="Beginner / Advanced"
                />

                <InputField
                    label="Next Batch Start"
                    type="date"
                    name="next_batch_starting"
                    value={form.next_batch_starting}
                    onChange={handleChange}
                />

                <InputField
                    label="Currency"
                    name="currency"
                    value={form.currency}
                    onChange={handleChange}
                    placeholder="USD / BDT"
                />

                <InputField
                    label="Original Price"
                    type="number"
                    name="original_price"
                    value={form.original_price}
                    onChange={handleChange}
                />

                <InputField
                    label="Discount Price"
                    type="number"
                    name="discounted_price"
                    value={form.discounted_price}
                    onChange={handleChange}
                />
            </div>

            <TextAreaField
                label="Course Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Write a description…"
                required
            />

            <InputField
                label="Course Image URL"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://image-url.com/img.png"
            />

            {form.image && (
                <img src={form.image} className="w-40 rounded-lg border shadow"/>
            )}

            <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
            >
                {id ? "Update" : "Create"}
            </button>
        </div>
    );
}
