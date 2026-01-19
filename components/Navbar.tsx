"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/logo-transparent.png"
            alt="Purva Farm logo"
            width={70}
            height={70}
            className="h-full w-auto"
            priority
          />
        </Link>

        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex gap-8 text-sm font-semibold text-text text-(--color-heading)">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/products">Products</NavItem>
            <NavItem href="/certificates">Certificates</NavItem>
            <NavItem href="/videos">Videos</NavItem>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-lg bg-(--color-text) px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link
          href={href}
          className="transition hover:text-primary"
        >
          {children}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
