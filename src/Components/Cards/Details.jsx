"use client";

import Link from "next/link";

export default function CourseDetails({ course }) {

    return (
        <div className="max-w-4xl mx-auto bg-base-100 shadow-lg rounded-lg overflow-hidden my-10 p-6">
            {/* Image & Title */}
            <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 sm:h-64 md:h-80 border mb-6 rounded-lg object-cover"
            />
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{course.title}</h1>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="bg-base-100 text-primary px-2 py-1 rounded text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-400">{course.fullDescription}</p>
                </div>
            </div>

            {/* Course Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <strong>Category:</strong> {course.category}
                </div>
                <div>
                    <strong>Mentor:</strong> {course.mentor} ({course.mentorDesignation})
                </div>
                <div>
                    <strong>Price:</strong>{" "}
                    <span className="line-through text-gray-400">${course.price}</span>{" "}
                    <span className="text-green-400 font-bold">
                        ${course.discountPrice}
                    </span>
                </div>
                <div>
                    <strong>Difficulty:</strong> {course.difficulty}
                </div>
                <div>
                    <strong>Duration:</strong> {course.duration}
                </div>
                <div>
                    <strong>Lessons:</strong> {course.lessons}
                </div>
                <div className="flex gap-1 items-center">
                    <strong>Rating:</strong> {course.rating}
                    <img className="h-3" src="/star.png" alt="Star" />
                </div>
                <div>
                    <strong>Language:</strong> {course.language}
                </div>
                <div>
                    <strong>Last Updated:</strong> {course.lastUpdated}
                </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-4">
                <button className="btn btn-primary">Enroll Now</button>
                <button className="btn btn-primary btn-outline">Add to Wishlist</button>
                <Link href='/courses'>
                    <button className="btn btn-outline">All Courses</button>
                </Link>
            </div>
        </div>
    );
}
