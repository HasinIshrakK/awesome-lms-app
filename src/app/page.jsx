import { bannerData, features, testimonials, instructors }
  from "@/data/homepage";
import Cards from "@/Components/Cards/Cards";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">


      <div className="w-full flex flex-col gap-24 py-12">

        {/* Hero Section */}
        <section className="relative bg-linear-to-r rounded-2xl from-indigo-600 via-cyan-600 to-green-600 text-white">
          <div className="container mx-auto px-6 py-32 flex flex-col-reverse md:flex-row items-center justify-between">

            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
                Learn Anytime, Anywhere
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Join thousands of learners and explore courses from top mentors. Master skills in your own pace.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link href="/courses" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition">
                  Browse Courses
                </Link>
                <Link href="/auth/register" className="border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
              <img
                src="/image.png"
                alt="Hero illustration"
                className="w-full max-w-lg rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.id}
                className="group card bg-base-100 rounded-2xl p-8 border border-base-300 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition flex items-center justify-center">
                  <span className="text-primary text-2xl">★</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="opacity-70 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Courses Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">Popular Courses</h2>
          <Cards home={true} />
        </section>


        {/* Testimonials Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-base-100 border border-base-300 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <p className="text-base opacity-80 mb-6 italic leading-relaxed">
                  “{t.message}”
                </p>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-xs opacity-60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Instructors Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((i) => (
              <div
                key={i.id}
                className="card bg-base-100 p-8 rounded-2xl border border-base-300 shadow-md hover:shadow-2xl transition hover:-translate-y-1 text-center"
              >
                <div className="avatar mb-4 mx-auto">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring ring-primary/30 ring-offset-base-100 ring-offset-2">
                    <img src={i.avatar} alt={i.name} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{i.name}</h3>
                <p className="opacity-70 text-sm">{i.expertise}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Banner Section */}
        <section className="relative overflow-hidden rounded-3xl p-12 bg-linear-to-br from-primary/20 to-secondary/20 border border-base-300 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.primary/30),transparent)]"></div>
          <div className="relative z-9 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow">
              {bannerData.title}
            </h1>
            <p className="text-base opacity-80">
              {bannerData.subtitle}
            </p>
          </div>
        </section>
      </div>

    </div>
  );
}
