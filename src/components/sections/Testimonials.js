import SectionHeader from "@/components/shared/SectionHeader";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="rounded-3xl border border-border bg-white p-10 shadow-sm"
    >
      <SectionHeader title="Testimonials" />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-secondary"
          >
            <p className="text-sm leading-relaxed text-secondary italic">
              &ldquo;{item.text}&rdquo;
            </p>

            <div className="mt-auto flex items-center gap-3 pt-2">
              <div className="h-10 w-10 shrink-0 rounded-full border border-border bg-bg-subtle" />
              <div>
                <p className="text-sm font-medium text-black">{item.name}</p>
                <p className="text-xs text-secondary">
                  {item.role} at {item.company}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
