"use client";

import { HiArrowRight, HiOutlineEye, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import personalInfo from "@/data/personal-info.json";
import Button from "@/components/shared/Button";
import SocialButton from "@/components/shared/SocialButton";

const socials = [
  { href: "https://github.com/jubair", icon: FaGithub, label: "GitHub" },
  {
    href: "https://linkedin.com/in/jubair",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://twitter.com/jubair", icon: FaTwitter, label: "Twitter" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-12 shadow-sm"
    >
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative flex flex-col items-start gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for opportunities
        </span>

        <h1 className="max-w-3xl text-3xl md:text-hero font-bold text-black leading-tight">
          {personalInfo.name}.<br />
          {personalInfo.title}.
        </h1>

        <p className="max-w-lg text-lg leading-relaxed text-secondary">
          {personalInfo.tagline}. {personalInfo.bio}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button href="#projects" icon={HiArrowRight}>
            View Projects
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            icon={HiOutlineEye}
          >
            Let&apos;s Talk
          </Button>
          <Button
            href={personalInfo.resumeUrl}
            variant="outline"
            icon={HiDownload}
          >
            Resume
          </Button>
        </div>

        <div className="mt-4 flex items-center gap-4 rounded-xl border border-border px-5 py-3">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">
            Social
          </span>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <SocialButton key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
