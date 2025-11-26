"use client";

const MyCard = ({ course }) => {
    if (!course) return <p>No course found.</p>;

    return (
        <div className="p-5 bg-base-100 rounded-xl shadow-md w-full mb-6 sm:flex">

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
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-error">Delete</button>
                </div>
            </div>

        </div>
    );
};

export default MyCard;
