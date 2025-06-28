import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaRobot,
  FaMicrochip,
  FaBrain,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

// Define certificate type for strong TypeScript support
export type Certificate = {
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconSize: string;
  download: string;
};

export const certificates: Certificate[] = [
  {
    title: "Core Java Training Certificate",
    description: "Core Java concepts including OOPs and Collections.",
    image: "public/certificates/cert7.jpg",
    icon: FaJava,
    iconColor: "text-orange-500",
    iconSize: "text-2xl",
    download: "public/certificates/cert7.jpg",
  },
  {
    title: "Web Development Internship",
    description: "Completed a frontend internship, gained experience in HTML, CSS, JS.",
    image: "public/certificates/cert8.jpg",
    icon: MdWork,
    iconColor: "text-blue-500",
    iconSize: "text-2xl",
    download: "public/certificates/cert8.jpg",
  },
  {
    title: "Web Development Internship",
    description: "Focused on React and modern JS frameworks.",
    image: "public/certificates/cert1.jpg",
    icon: MdWork,
    iconColor: "text-green-500",
    iconSize: "text-2xl",
    download: "public/certificates/cert11.jpg",
  },
  {
    title: "React JS Course Certificate",
    description: "Completed React.js concepts.",
    image: "public/certificates/cert.jpg",
    icon: FaReact,
    iconColor: "text-blue-500",
    iconSize: "text-3xl",
    download: "public/certificates/cert.png",
  },
  {
    title: "JavaScript Course Certificate",
    description: "Completed JavaScript concepts.",
    image: "public/certificates/cert2.jpg",
    icon: FaJsSquare,
    iconColor: "text-yellow-500",
    iconSize: "text-3xl",
    download: "public/certificates/cert2.jpg",
  },
  {
    title: "Introduction to Artificial Intelligence",
    description: "Skills covered: AI for business and fundamentals.",
    image: "public/certificates/cert4.jpg",
    icon: FaRobot,
    iconColor: "text-purple-500",
    iconSize: "text-3xl",
    download: "public/certificates/cert4.jpg",
  },
  {
    title: "Career Essentials in Generative AI",
    description: "Skills covered: Ethics, AI, Generative AI.",
    image: "public/certificates/cert5.jpg",
    icon: FaMicrochip,
    iconColor: "text-red-500",
    iconSize: "text-3xl",
    download: "public/certificates/cert5.jpg",
  },
  {
    title: "What is Generative AI",
    description: "Skills covered: AI for business, Generative AI.",
    image: "public/certificates/cert6.jpg",
    icon: FaBrain,
    iconColor: "text-pink-500",
    iconSize: "text-3xl",
    download: "public/certificates/cert6.jpg",
  },
];

