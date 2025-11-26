"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CourseDetails from "@/Components/Cards/Details";

export default function CoursePage() {
  const params = useParams(); // { id: "673a1e901001000009" }
  const { id } = params;

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourse() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`);
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadCourse();
  }, [id]);

  if (loading) return <p>Loading course...</p>;
  if (!course) return <p>Course not found!</p>;

  return <CourseDetails course={course} />;
}
