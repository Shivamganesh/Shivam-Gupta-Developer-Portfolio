// src/data/animationCardsData.ts

export type AnimationCard = {
  title: string;
  description: string;
  icon:
    | "Box"
    | "Film"
    | "Sparkles"
    | "ScrollText"
    | "Palette"
    | "Cpu"
    | "Zap"
    | "MousePointerClick"
    | "SunDim"
    | "LineChart"
    | "EyeOff"
    | "Shapes";
  color: string;
  size: number;
};

export const animationCardsData: AnimationCard[] = [
  {
    title: "3D Transformations",
    description: "Creating immersive experiences with depth and perspective",
    icon: "Box",
    color: "text-cyan-400",
    size: 36,
  },
  {
    title: "Motion Graphics",
    description: "Smooth transitions and kinetic typography for engaging interfaces",
    icon: "Film",
    color: "text-purple-400",
    size: 36,
  },
  {
    title: "Particle Systems",
    description: "Dynamic particle effects that respond to user interactions",
    icon: "Sparkles",
    color: "text-yellow-400",
    size: 36,
  },
  {
    title: "Scroll Animations",
    description: "Revealing content with scroll-triggered animations",
    icon: "ScrollText",
    color: "text-emerald-400",
    size: 36,
  },
  {
    title: "Generative Art",
    description: "Algorithm-driven visual experiences that evolve over time",
    icon: "Palette",
    color: "text-pink-500",
    size: 36,
  },
  {
    title: "Web GL Effects",
    description: "Leveraging hardware acceleration for stunning visual effects",
    icon: "Cpu",
    color: "text-sky-400",
    size: 36,
  },
  {
    title: "Microinteractions",
    description: "Tiny animations that enhance UX feedback loops",
    icon: "Zap",
    color: "text-orange-400",
    size: 36,
  },
  {
    title: "Hover Effects",
    description: "Visual reactions to user hover events",
    icon: "MousePointerClick",
    color: "text-fuchsia-400",
    size: 36,
  },
  {
    title: "SVG Morphing",
    description: "Animating between different vector shapes seamlessly",
    icon: "Shapes",
    color: "text-lime-400",
    size: 36,
  },
  {
    title: "Neumorphism",
    description: "Soft UI effects using shadows and lighting",
    icon: "SunDim",
    color: "text-violet-400",
    size: 36,
  },
  {
    title: "GSAP Timeline",
    description: "Powerful animation sequencing using GSAP",
    icon: "LineChart",
    color: "text-teal-400",
    size: 36,
  },
  {
    title: "Masked Animations",
    description: "Reveal elements using clipping paths and masks",
    icon: "EyeOff",
    color: "text-rose-400",
    size: 36,
  },
];
