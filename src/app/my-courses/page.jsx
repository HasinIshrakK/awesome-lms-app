"use client";
import { useEffect, useState } from "react";
import MyCard from "@/Components/Cards/MyCard";
import SearchBar from "@/Components/SearchBar";

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCourses() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
                const data = await res.json();
                setCourses(data);
            } finally {
                setLoading(false);
            }
        }

        loadCourses();
    }, []);


    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-4xl font-bold my-12 text-center">My Courses</h2>
            <div className="flex justify-between items-center mb-6">
                <SearchBar></SearchBar>
                <div className="dropdown dropdown-left justify-end dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Frontend</a></li>
                        <li><a>Backend</a></li>
                        <li><a>ML</a></li>
                        <li><a>Others</a></li>
                    </ul>
                </div>
            </div>
            {courses.map((course) => (
                <MyCard course={course}></MyCard>
            ))}
        </div>
    );
};

export default MyCourses;