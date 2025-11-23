import { instructors }
    from "@/data/homepage";

export default function AboutUs() {
    return (
        <div className="w-full">

            {/* Hero Section */}
            <section className="py-20 bg-base-200">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        About <span className="text-primary">Awesome LMS</span>
                    </h1>
                    <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
                        Empowering learners and instructors with a powerful, flexible, and modern
                        learning experience built for the future.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>
                <div className="grid md:grid-cols-2 gap-10">

                    <div className="card bg-base-100 shadow-xl p-8 border border-base-300">
                        <h3 className="text-xl font-semibold mb-4">What We Believe</h3>
                        <p className="opacity-80 leading-relaxed">
                            We believe education should be accessible to everyone—anywhere, anytime.
                            Awesome LMS was created to deliver a smooth, personalized, and
                            interactive learning experience without complexity or limitations.
                        </p>
                    </div>

                    <div className="card bg-base-100 shadow-xl p-8 border border-base-300">
                        <h3 className="text-xl font-semibold mb-4">Our Purpose</h3>
                        <p className="opacity-80 leading-relaxed">
                            Our platform aims to empower instructors to share knowledge effortlessly,
                            and help students build skills with structured, high-quality content
                            designed for real-world growth.
                        </p>
                    </div>

                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-base-200">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                    <div className="p-6 bg-base-100 rounded-xl shadow-md border border-base-300">
                        <h3 className="text-3xl font-bold text-primary">12K+</h3>
                        <p className="opacity-70">Active Students</p>
                    </div>

                    <div className="p-6 bg-base-100 rounded-xl shadow-md border border-base-300">
                        <h3 className="text-3xl font-bold text-primary">450+</h3>
                        <p className="opacity-70">Video Courses</p>
                    </div>

                    <div className="p-6 bg-base-100 rounded-xl shadow-md border border-base-300">
                        <h3 className="text-3xl font-bold text-primary">120+</h3>
                        <p className="opacity-70">Expert Instructors</p>
                    </div>

                    <div className="p-6 bg-base-100 rounded-xl shadow-md border border-base-300">
                        <h3 className="text-3xl font-bold text-primary">98%</h3>
                        <p className="opacity-70">Satisfaction Rate</p>
                    </div>

                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Awesome LMS?</h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="card bg-base-100 shadow-lg p-8 border border-base-300 hover:shadow-2xl transition rounded-2xl">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Interactive Learning</h3>
                        <p className="opacity-75">Quizzes, assignments, notes, and HD video lessons designed to boost engagement.</p>
                    </div>

                    <div className="card bg-base-100 shadow-lg p-8 border border-base-300 hover:shadow-2xl transition rounded-2xl">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Instructor Dashboard</h3>
                        <p className="opacity-75">Easily upload content, manage students, and track course performance.</p>
                    </div>

                    <div className="card bg-base-100 shadow-lg p-8 border border-base-300 hover:shadow-2xl transition rounded-2xl">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Simple & Fast UI</h3>
                        <p className="opacity-75">A clean and responsive interface optimized for both students and creators.</p>
                    </div>

                </div>
            </section>

            {/* Instructor Highlight */}
            <section className="py-16 bg-base-200">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-8">Meet Our Top Instructors</h2>
                    <p className="opacity-80 max-w-2xl mx-auto">
                        Our instructors are experienced professionals, creators, and educators
                        passionate about sharing their expertise.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {instructors.map((mentor) => (
                            <div key={mentor.id} className="avatar">
                                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={mentor.avatar} alt={mentor.name} />
                                </div>
                                <div className="flex flex-col text-left ml-2">
                                    <h3 className="card-title">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-xs mb-5">
                                        {mentor.expertise}
                                    </p>
                                    <h2 className="font-bold text-2xl">
                                        {mentor.experience}y+
                                        <span className="font-light text-base"> experience</span>
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
                <p className="opacity-75 mb-8 max-w-xl mx-auto">
                    Join thousands of learners who are already building their skills on Awesome LMS.
                </p>
                <a href="/courses" className="btn btn-primary btn-lg rounded-xl">
                    Browse Courses
                </a>
            </section>

        </div>
    );
}
