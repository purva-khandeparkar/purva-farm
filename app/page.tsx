import FeaturedProducts from "@/components/home/sections/FeaturedProducts";
import { Hero } from "@/components/home/sections/Hero";
import { HeroWaveBackground } from "@/components/home/sections/HeroWaveBackground";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-24">
      <HeroWaveBackground />

      <div className="relative z-10">
        <Hero />
      </div>
    </section>

    <FeaturedProducts />
    

      <section className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center px-6 py-24">
        <div>
          <h2 className="text-4xl font-semibold text-(--color-heading) mb-4">
            Sustainable Farming for a Better Tomorrow
          </h2>

          <p className="text-lg text-(--color-text) mb-6">
            Purva Farm provides agricultural equipment, vermicompost,
            and cocopeat products backed by decades of farming expertise.
          </p>

          <button className="rounded-lg bg-(--color-text) px-6 py-3 text-sm font-medium text-white transition hover:bg-green-800">
            Explore Products
          </button>
        </div>

        <div className="rounded-lg bg-(--color-text) px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800">
          Farm Image Placeholder
        </div>
      </section>
    </>
  );
}
