"use client";

import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiPaperAirplane,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCard from "@/components/shared/ContactCard";
import FormInput from "@/components/shared/FormInput";
import SocialButton from "@/components/shared/SocialButton";
import personalInfo from "@/data/personal-info.json";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email address";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    await new Promise((r) => setTimeout(r, 1000));

    toast.success("Message sent successfully! I'll get back to you soon.", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Bounce,
    });

    setForm(initialForm);
    setSubmitting(false);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section
      id="contact"
      className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeader title="Let's Connect" />

          <p className="max-w-md text-base leading-relaxed text-secondary">
            I&apos;m always open to discussing new opportunities, freelance
            projects, collaborations, or simply having a conversation about web
            development.
          </p>

          <div className="flex flex-col gap-3">
            <ContactCard
              icon={HiOutlineEnvelope}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactCard
              icon={HiOutlinePhone}
              label="Phone"
              value={personalInfo.location}
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-secondary uppercase tracking-wider">
              Social
            </span>
            <div className="flex items-center gap-2">
              <SocialButton
                href="https://github.com/jubair"
                icon={FaGithub}
                label="GitHub"
              />
              <SocialButton
                href="https://linkedin.com/in/jubair"
                icon={FaLinkedinIn}
                label="LinkedIn"
              />
              <SocialButton
                href="https://twitter.com/jubair"
                icon={FaTwitter}
                label="Twitter"
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormInput
            label="Name"
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={handleChange("name")}
            error={errors.name}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            value={form.email}
            onChange={handleChange("email")}
            error={errors.email}
          />
          <FormInput
            label="Subject"
            name="subject"
            placeholder="What is this about?"
            required
            value={form.subject}
            onChange={handleChange("subject")}
            error={errors.subject}
          />
          <FormInput
            label="Message"
            name="message"
            type="textarea"
            placeholder="Your message..."
            required
            rows={5}
            value={form.message}
            onChange={handleChange("message")}
            error={errors.message}
          />

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-60"
          >
            <HiPaperAirplane className="text-base" />
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
