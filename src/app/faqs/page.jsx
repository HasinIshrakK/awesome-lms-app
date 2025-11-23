export default function FAQ() {
  const faqs = [
    {
      q: "What is Awesome LMS?",
      a: "Awesome LMS is a modern learning platform where students can access courses and instructors can easily create and manage their content.",
    },
    {
      q: "Are the courses self-paced?",
      a: "Yes! All courses are self-paced, so you can learn anytime and anywhere.",
    },
    {
      q: "How do I become an instructor?",
      a: "Simply create an account and apply for instructor access. Our team will review your profile and approve you quickly.",
    },
    {
      q: "Is there a certificate after course completion?",
      a: "Yes, students receive an auto-generated digital certificate once they finish a course.",
    },
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="collapse collapse-plus bg-base-200 border border-base-300 rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">{item.q}</div>
            <div className="collapse-content opacity-80">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
