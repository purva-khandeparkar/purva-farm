import { Hero } from "@/components/sections/Hero";
import { HeroWaveBackground } from "@/components/sections/HeroWaveBackground";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100vh] overflow-hidden pt-24">
      <HeroWaveBackground />

      <div className="relative z-10">
        <Hero />
      </div>
    </section>

      <section className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center px-6 py-24">
        <div>
          <h2 className="text-4xl font-semibold text-[var(--color-heading)] mb-4">
            Sustainable Farming for a Better Tomorrow
          </h2>

          <p className="text-lg text-[var(--color-text)] mb-6">
            Purva Farm provides agricultural equipment, vermicompost,
            and cocopeat products backed by decades of farming expertise.
          </p>

          <button className="rounded-lg bg-[var(--color-primary)] px-6 py-3 text-white hover:bg-[var(--color-primary-dark)] transition">
            Explore Products
          </button>
        </div>

        <div className="h-64 rounded-xl bg-[var(--color-soft)] flex items-center justify-center text-[var(--color-heading)] font-medium">
          Farm Image Placeholder
        </div>
      </section>
    </>
  );
}
