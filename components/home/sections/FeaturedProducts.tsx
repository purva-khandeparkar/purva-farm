"use client";

import useEmblaCarousel from "embla-carousel-react";
import productsData from "@/mocks/products/products.json";
import Image from "next/image";
import Link from "next/link";

function getRandomProducts<T>(items: T[], count: number): T[] {
  return [...items].sort(() => 0.5 - Math.random()).slice(0, count);
}

export default function FeaturedProducts() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const allProducts = productsData.categories.flatMap(
    (c) => c.products
  );

  const products = getRandomProducts(allProducts, 10);

  return (
    <section className="py-32 bg-(--color-bg)">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 mb-16 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight text-(--color-heading)">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted">
            Trusted agricultural solutions crafted with experience, quality,
            and sustainability at heart.
          </p>
        </div>

        {/* Embla viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {/* Embla container */}
          <div className="flex">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_32%] px-4"
              >
                {/* Card */}
                <div className="flex h-full flex-col rounded-3xl bg-(--color-text) overflow-hidden">

                  {/* Image (edge-to-edge, no padding) */}
                  <div className="relative h-56 w-full flex-shrink-0">
                    <Image
                      src={`/products/${product.image}`}
                      alt={product.name}
                      fill
                      className="object-fill"
                    />
                  </div>

                  {/* Content (padded area) */}
                  <div className="flex flex-1 flex-col px-8 py-6">

                    {/* Title */}
                    <h3 className="text-lg font-medium text-white line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Footer (always aligned at bottom) */}
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <Link
                        href="/contact"
                        className="text-sm font-medium text-white"
                      >
                        Enquiry Now
                      </Link>

                      <Link
                        href="/products"
                        className="text-sm font-medium text-white hover:underline"
                      >
                        View More →
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
