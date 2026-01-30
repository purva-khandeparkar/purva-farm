"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ⬅️ Set initial state BEFORE animation
      gsap.set(".hero-line", { y: 60, opacity: 0 });
      gsap.set(".hero-cta", { y: 30, opacity: 0 });

      const tl = gsap.timeline();

      tl.to(".hero-line", {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
      }).to(
        ".hero-cta",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10"
    >
      <div className="mx-auto max-w-7xl px-6 py-40">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-(--color-heading)">
          <span className="hero-line block">Sustainable</span>
          <span className="hero-line block">Agriculture</span>
          <span className="hero-line block">
            Rooted in <span className="text-(--color-text)">Trust</span>
          </span>
        </h1>

        <p className="hero-line mt-6 max-w-xl text-lg text-black">
          Empowering farmers with eco-friendly solutions, premium vermicompost,
          cocopeat, and modern agricultural equipment — backed by decades of
          expertise.
        </p>

        <div className="hero-cta mt-10 flex gap-4">
          <button className="rounded-lg bg-(--color-text) px-6 py-3 text-sm font-medium text-white transition hover:bg-green-800">
            Explore Products
          </button>
          <button className="rounded-lg bg-(--color-text) px-6 py-3 text-sm font-medium text-white transition hover:bg-green-800">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
