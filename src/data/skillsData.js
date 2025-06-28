// src/data/skillCategories.js
import {
  Code,
  Database,
  Smartphone,
  Layers,
  Braces,
  Server,
  Search,
  Cpu,
  FileCode,
  Sparkles,
  LayoutGrid,
  PenTool,
  ScrollText,
  Monitor,
} from 'lucide-react';

const skillCategories = [
  {
    name: "Frontend Development",
    icon: Monitor,
    iconColor: "text-cyan-400",
    skills: [
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: PenTool },
      { name: "JavaScript", icon: Braces },
      { name: "React.js", icon: Code },
    ],
  },
  {
    name: "Backend Development",
    icon: Server,
    iconColor: "text-purple-400",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: LayoutGrid },
      { name: "Fastify", icon: Cpu },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    iconColor: "text-amber-400",
    skills: [
      { name: "React Native", icon: Smartphone },
    ],
  },
  {
    name: "State Management",
    icon: Layers,
    iconColor: "text-emerald-400",
    skills: [
      { name: "Zustand", icon: Layers },
    ],
  },
  {
    name: "Animation & Design",
    icon: Sparkles,
    iconColor: "text-pink-400",
    skills: [
      { name: "GSAP", icon: Sparkles },
      { name: "Canvas", icon: PenTool },
      { name: "Locomotive.js", icon: ScrollText },
      { name: "Animations", icon: Sparkles },
    ],
  },
  {
    name: "Computer Science",
    icon: Cpu,
    iconColor: "text-blue-400",
    skills: [
      { name: "DSA", icon: Search },
      { name: "OOPs", icon: Layers },
      { name: "Core Java", icon: Cpu },
    ],
  },
];

export default skillCategories;
