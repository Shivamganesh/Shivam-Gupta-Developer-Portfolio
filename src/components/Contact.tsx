import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

 emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

    .then(() => {
  setLoading(false);
  toast({
    title: "✅ Message sent!",
    description: "Thanks for reaching out. I’ll get back to you soon.",
    variant: "default",
  });

     // ✅ Scroll to top of contact section smoothly
      containerRef.current?.scrollIntoView({ behavior: "smooth" });

  setFormData({ name: "", email: "", subject: "", message: "" });
})
.catch((error) => {
  setLoading(false);
  toast({
    title: "Message failed to send",
    description: "Please try again or check your network.",
    variant: "destructive",
  });
  console.error(error);
});

};

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Normalized coordinates (0 to 1)
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({ x, y });
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-cyan-400" />,
      title: "Location",
      info: "Lucknow,U.P,India",
    },
    {
      icon: <Phone size={24} className="text-cyan-400" />,
      title: "Phone",
      info: "+91-88401xxxxx",
    },
    {
      icon: <Mail size={24} className="text-cyan-400" />,
      title: "Email",
      info: "shivamganesh2002@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 bg-gradient-to-br from-[#0E151F] via-[#111827] to-[#1E293B] relative overflow-hidden"
    >
      {/* Dynamic background elements based on mouse position */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 blur-3xl transition-all duration-200 ease-out"
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-3xl transition-all duration-200 ease-out"
        style={{
          left: `${(1 - mousePosition.x) * 100}%`,
          top: `${(1 - mousePosition.y) * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-serif">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love
            to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/30 transform transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 group">
            <h3 className="text-2xl font-bold mb-6 text-white font-serif group-hover:text-cyan-300 transition-colors">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start group/item">
                  <div className="p-3 bg-slate-700/50 rounded-lg mr-4 group-hover/item:bg-cyan-900/50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-cyan-300 group-hover/item:text-cyan-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white group-hover/item:text-blue-100 transition-colors">
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white font-serif flex items-center group-hover:text-cyan-300 transition-colors">
                <Sparkles size={20} className="text-cyan-400 mr-2" />
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Shivamganesh"
                  className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center text-white hover:bg-cyan-900/50 hover:scale-110 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-gupta-63a991241/"
                  className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center text-white hover:bg-cyan-900/50 hover:scale-110 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center text-white hover:bg-cyan-900/50 hover:scale-110 transition-all"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-800/20 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                <Sparkles size={18} className="text-cyan-400 mr-2" />
                Available for Freelance
              </h4>
              <p className="text-blue-200">
                Currently accepting new projects and collaborations for 2025.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/30 transform transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
            <h3 className="text-2xl font-bold mb-6 text-white font-serif">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/30 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/30 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/30 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="bg-slate-700/30 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/20 text-white"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
