"use client";

import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const MyCard = ({ course, courses, setCourses }) => {

    async function handleDelete(id) {
        const ok = confirm("Do you really want to delete this course?");
        if (!ok) return;

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`,
            { method: "DELETE" }
        );

        const data = await res.json();

        if (res.ok) {
            toast.success("Course deleted!");
            setCourses(courses.filter((c) => c._id !== id));
        } else {
            toast.error(data.msg || "Could not delete");
        }
    }

    if (!course) return <p>No course found.</p>;

    return (
        <div className="p-5 bg-base-100 rounded-xl shadow-md w-full mb-6 sm:flex">
            <Toaster></Toaster>
            <img
                src={course.image}
                alt={course.title}
                className="w-1/4 mr-6 rounded-lg mb-4"
            />

            <div>
                <h2 className="text-2xl font-bold">{course.title}</h2>

                <p className="text-gray-500 mb-2">{course.category}</p>

                <p className="text-base-content text-sm mb-4">
                    {course.shortDescription}
                </p>

                <p className="text-sm">
                    <strong>Mentor:</strong> {course.mentor}
                </p>

                <p className="mt-2">
                    <strong className="text-lg">${course.discountPrice}</strong>{" "}
                    <span className="line-through text-gray-400">
                        ${course.price}
                    </span>
                </p>

                <p className="text-sm text-gray-500 mt-1">
                    Last updated: {course.lastUpdated}
                </p>

                <div className="mt-4 flex gap-3">
                    <Link href={`/courses/${course._id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                    <button onClick={() => handleDelete(course._id)}
                        className="btn btn-error">Delete</button>
                </div>
            </div>

        </div>
    );
};

export default MyCard;
