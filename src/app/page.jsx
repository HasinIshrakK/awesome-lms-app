import { bannerData, features, testimonials, instructors }
  from "@/data/homepage";
import Cards from "@/Components/Cards/Cards";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>
        {/* this is Home */}
      </p>


      <div className="w-full flex flex-col gap-24 py-12">


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
      </div>

    </div>
  );
}
