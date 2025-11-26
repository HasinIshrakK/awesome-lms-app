"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddCourse = () => {
    const { data: session, status } = useSession();
    const loadingSession = status === "loading";

    const initialForm = useState({
        title: "", shortDescription: "",
        fullDescription: "", category: "",
        image: "", mentor: "",
        mentorDesignation: "", price: "",
        discountPrice: "", difficulty: "",
        duration: "", lessons: "", rating: "",
        language: "", lastUpdated: "",
        tags: "", email: "",
    });


    const [formData, setFormData] = useState(initialForm);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (session?.user?.email) {
            setFormData(prev => ({ ...prev, email: session.user.email }));
        }
    }, [session]);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let r = Number((Math.random() * 5).toFixed(1));
        let today = new Date();
        let formattedDate = today.toISOString().split("T")[0];

        const finalData = {
            ...formData,
            rating: r,
            lastUpdated: formattedDate,
        };
        try {
            const res = await fetch("http://localhost:4000/courses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalData),
            });

            if (!res.ok) throw new Error("Failed to post course");

            toast.success("Course added successfully!");
            setFormData(initialForm);
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        } finally {
            setSubmitting(false);
        }


        console.log("FORM DATA:", finalData);
    }

    if (loadingSession) return <p>Loading session...</p>;
    if (!session) return <p>You must be logged in to add a course.</p>;

    return (
        <div className='min-h-screen flex flex-col lg:flex-row md:gap-x-20 justify-center items-center p-6'>
            <Toaster></Toaster>

            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold">Post Now!</h1>
                <p className="py-6 text-lg">
                    Let's launch the best course ever!
                </p>
            </div>

            <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6">
                    <legend className="fieldset-legend text-xl">Course Details</legend>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Title */}
                        <div>
                            <label className="label">Title</label>
                            <input type="text" name="title" className="input w-full" placeholder="Course Title"
                                value={formData.title} onChange={handleChange} />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="label">Category</label>
                            <input type="text" name="category" className="input w-full" placeholder="Category"
                                value={formData.category} onChange={handleChange} />
                        </div>

                        {/* Short Description */}
                        <div>
                            <label className="label">Short Description</label>
                            <textarea name="shortDescription" className="textarea w-full" placeholder="Brief summary"
                                value={formData.shortDescription} onChange={handleChange} />
                        </div>

                        {/* Full Description */}
                        <div>
                            <label className="label">Full Description</label>
                            <textarea name="fullDescription" className="textarea w-full" placeholder="Full description"
                                value={formData.fullDescription} onChange={handleChange}></textarea>
                        </div>

                        {/* Image */}
                        <div>
                            <label className="label">Image URL</label>
                            <input type="text" name="image" className="input w-full" placeholder="https://..."
                                value={formData.image} onChange={handleChange} />
                        </div>

                        {/* Mentor */}
                        <div>
                            <label className="label">Mentor Name</label>
                            <input type="text" name="mentor" className="input w-full" placeholder="Instructor Name"
                                value={formData.mentor} onChange={handleChange} />
                        </div>

                        {/* Mentor Email */}
                        <div>
                            <label className="label">Mentor Email</label>
                            <input type="email" name="mentor" className="input w-full" placeholder="Instructor Name"
                                value={session.user.email} readOnly />
                        </div>

                        {/* Mentor Designation */}
                        <div>
                            <label className="label">Mentor Designation</label>
                            <input type="text" name="mentorDesignation" className="input w-full" placeholder="ML Engineer"
                                value={formData.mentorDesignation} onChange={handleChange} />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="label">Price</label>
                            <input type="number" name="price" className="input w-full" placeholder="65"
                                value={formData.price} onChange={handleChange} />
                        </div>

                        {/* Discount Price */}
                        <div>
                            <label className="label">Discount Price</label>
                            <input type="number" name="discountPrice" className="input w-full" placeholder="40"
                                value={formData.discountPrice} onChange={handleChange} />
                        </div>

                        {/* Difficulty */}
                        <div>
                            <label className="label">Difficulty</label>
                            <select
                                name="difficulty"
                                className="select w-full"
                                value={formData.difficulty}
                                onChange={handleChange}
                            >
                                <option disabled value="">Choose difficulty</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>

                        </div>

                        {/* Duration */}
                        <div>
                            <label className="label">Duration</label>
                            <input type="text" name="duration" className="input w-full" placeholder="18 hours"
                                value={formData.duration} onChange={handleChange} />
                        </div>

                        {/* Lessons */}
                        <div>
                            <label className="label">Lessons</label>
                            <input type="number" name="lessons" className="input w-full" placeholder="70"
                                value={formData.lessons} onChange={handleChange} />
                        </div>

                        {/* Language */}
                        <div>
                            <label className="label">Language</label>
                            <input type="text" name="language" className="input w-full" placeholder="English"
                                value={formData.language} onChange={handleChange} />
                        </div>

                        {/* Tags */}
                        <div className="md:col-span-2">
                            <label className="label">Tags</label>
                            <input type="text" name="tags" className="input w-full" placeholder="AI, ML, Python"
                                value={formData.tags} onChange={handleChange} />
                        </div>

                    </div>

                    <button className="btn btn-neutral mt-6 w-full">Post</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddCourse;