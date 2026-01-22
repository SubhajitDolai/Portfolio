import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Subhajit Dolai",
  initials: "SD",
  url: "https://subhajit-dolai.vercel.app",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "Full-Stack Developer experienced in designing and deploying scalable web applications with a focus on performance, security, and real-time systems.",
  summary:
    "Full-Stack Developer experienced in designing and deploying scalable web applications for 25,000+ users, with a focus on performance, security, and real-time systems using Next.js, TypeScript, Supabase, and PostgreSQL.",
  avatarUrl: "/me.webp",
  skills: [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Supabase", icon: "/icons/supabase.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "shadcn/ui", icon: "/icons/shadcn-ui.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "GitHub Actions", icon: "/icons/Github-actions.svg" },
    { name: "GoDaddy", icon: "/icons/godaddy.svg" },
    { name: "SendGrid", icon: "/icons/sendgrid.svg" },
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "C++", icon: "/icons/cpp.svg" },
    { name: "Python", icon: "/icons/python.svg" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resume", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "subhajitdolai999@gmail.com",
    tel: "+91-9172660318",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/subhajitdolai",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/subhajit-dolai",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:subhajitdolai999@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "MIT World Peace University",
      href: "https://mitwpu.edu.in/",
      badges: [],
      location: "Pune, India",
      title: "Software Developer — Registrar Office (Part-Time)",
      logoUrl: "/mitwpu.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Building and deploying CampusBook, a full-stack infrastructure management platform optimizing booking, scheduling, and resource utilization for 2,000+ faculty members. Implemented role-based access, automated approval workflows, and real-time analytics dashboards.",
    },
    {
      company: "MIT World Peace University",
      badges: [],
      href: "https://mitwpu.edu.in/",
      location: "Pune, India",
      title: "Full-Stack Developer — Sports & IT Departments (Part-Time)",
      logoUrl: "/mitwpu.png",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Built Courtside, a campus-wide sports facility management system for 25,000+ users, with automated bookings, real-time slot synchronization (<200ms latency), IoT QR check-ins, and an integrated Generative AI assistant for 24/7 support.",
    },
  ],
  education: [
    {
      school: "MIT World Peace University",
      href: "https://mitwpu.edu.in/",
      degree: "B.Sc. Computer Science — Specialization: Data Science & Big Data Analytics",
      logoUrl: "/mitwpu.png",
      start: "July 2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Courtside — AI Sports Facility Automation System",
      href: "https://sports.mitwpu.edu.in/",
      dates: "May 2025 - Aug 2025",
      active: true,
      description:
        "Courtside is a modern, enterprise-grade platform that streamlines booking, attendance, and administration for shared sports facilities in educational institutions. It provides intuitive booking flows, live availability updates, QR check‑in/out, role‑based admin controls, and an AI assistant for intelligent booking suggestions, all designed to scale for tens of thousands of users and run in production.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "Shadcn UI",
        "Figma",
        "Vercel",
        "Generative AI",
        "IoT",
      ],
      links: [
        { type: "Website", href: "https://sports.mitwpu.edu.in/", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/SubhajitDolai/Courtside", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "https://kvxwmhgtcjhauutebzuo.supabase.co/storage/v1/object/public/videos/courtside.mp4",
      videoPoster: "/images/courtside-poster.jpg",
    },
    {
      title: "CampusBook — University Resource Booking System",
      href: "https://infra.mitwpu.edu.in/",
      dates: "Aug 2025 - Dec 2025",
      active: true,
      description:
        "CampusBook is a modern, enterprise-grade platform that streamlines campus resource booking and administration (classrooms, labs, halls) with intuitive booking flows, real‑time availability, multi‑day & recurring reservations, approval workflows, role‑based admin controls, and personal calendar views, built to scale for educational institutions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "Shadcn UI",
        "Vercel",
        "Figma",
      ],
      links: [
        { type: "Website", href: "https://infra.mitwpu.edu.in/", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/SubhajitDolai/CampusBook", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "https://kvxwmhgtcjhauutebzuo.supabase.co/storage/v1/object/public/videos/campusbook.mp4",
      videoPoster: "/images/campusbook-poster.jpg",
    },
    {
      title: "RISE Enterprises — Business Website",
      href: "https://www.rise-enterprises.co.in/",
      dates: "Sep 2025",
      active: true,
      description:
        "RISE Enterprises is a premium, production-ready business website for a construction firm that highlights completed projects with optimized imagery, SEO-first pages, a secure SMTP contact form, and a glassmorphic, mobile-first UI, designed for fast load and reliable production deployment.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Nodemailer",
        "framer-motion",
        "Vercel",
        "GoDaddy",
      ],
      links: [
        { type: "Website", href: "https://www.rise-enterprises.co.in/", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/SubhajitDolai/RISE", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "https://kvxwmhgtcjhauutebzuo.supabase.co/storage/v1/object/public/videos/rise.mp4",
      videoPoster: "/images/rise-poster.jpg",
    },
    {
      title: "DiscussZone — Library Automation System",
      href: "https://github.com/SubhajitDolai/DiscussZone",
      dates: "Jan 2026",
      active: true,
      description:
        "Built a SaaS platform for discussion room booking and library access tracking using barcode-based university IDs. Implemented entry/exit logging for physical and digital libraries without requiring student sign-up. Developed admin dashboards and student history views with real-time analytics and secure access control.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "Barcode Scanners",
      ],
      links: [
        { type: "Source", href: "https://github.com/SubhajitDolai/DiscussZone", icon: <Icons.github className="size-3" /> },
      ],
      image: "/images/discusszone-poster.jpg",
      video: "",
      videoPoster: "/images/discusszone-poster.jpg",
    },
  ],
  hackathons: [] as Array<{
    title?: string;
    dates?: string;
    image?: string;
    location?: string;
    description?: string;
    links?: Array<{ href: string; title: string; icon?: any }>;
  }>,
} as const;
