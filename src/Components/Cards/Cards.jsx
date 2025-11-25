"use client";
import { useEffect, useState } from "react";
import Card from "@/Components/Cards/Card";

const Cards = ({ home }) => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCourses() {
            try {
                const res = await fetch("http://localhost:4000/courses");
                const data = await res.json();
                setCourses(data);
            } finally {
                setLoading(false);
            }
        }

        loadCourses();
    }, []);

    const filtered = [...courses].sort((a, b) => b.rating - a.rating);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {
                home ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                    {filtered.slice(0, 6).map((c) => (
                        <Card c={c}></Card>
                    ))}
                </div> :
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                        {courses.map((c) => (
                            <Card c={c}></Card>
                        ))}
                    </div>
            }
        </div>
    );
};

export default Cards;