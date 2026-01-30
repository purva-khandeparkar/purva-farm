"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function HeroWaveBackground() {
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Rise from bottom
    tl.to(pathRef.current, {
      attr: {
        d: "M 0 100 V 70 Q 50 30 100 70 V 100 z",
      },
      duration: 3,
      ease: "sine.inOut",
    });

    // Expand to fill hero + navbar
    tl.to(pathRef.current, {
      attr: {
        d: "M 0 100 V 0 Q 50 0 100 0 V 100 z",
        },
      duration: 4,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMax slice"
      className="absolute bottom-0 left-0 z-0 h-full w-full"
    >
      <defs>
        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-bg-soft)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>

      <path
        ref={pathRef}
        fill="url(#greenGradient)"
        d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
      />
    </svg>
  );
}
