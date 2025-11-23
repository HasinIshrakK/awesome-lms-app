import { courses }
    from "@/data/homepage";
import Card from "@/Components/Cards/Card";

const Courses = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold my-12 text-center">All Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                {courses.map((c) => (
                    <Card c={c}></Card>
                ))}
            </div>
        </div>
    );
};

export default Courses;