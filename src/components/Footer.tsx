import React from "react";
import { Award, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="flex items-center gap-2 text-2xl font-bold text-white group"
            >
              <Award className="h-8 w-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
              <span className="font-serif group-hover:text-pink-400 transition-colors">
                Shivam Gupta
              </span>
            </a>
            <p className="text-gray-400 mt-2">
              Full Stack and Mobile App Developer
            </p>
          </div>

          <div className="flex gap-4">
            {[{
              icon: Github,
              link: "https://github.com/Shivamganesh"
            }, {
              icon: Linkedin,
              link: "https://www.linkedin.com/in/shivam-gupta-63a991241/"
            }, {
              icon: Twitter,
              link: "#"
            }, {
              icon: Mail,
              link: "#"
            }].map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {["#home", "#about", "#projects", "#contact"].map((href, i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://drive.google.com/file/d/11Q4qUHvPaGSmiDWQQdaU1lycU05H4jmQ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Shivamganesh?tab=repositories"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  GitHub Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Personal Blog (coming soon)
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Client Feedback (coming soon)
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tech Stack</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">React.js, React Native</li>
              <li className="text-gray-400">Node.js, Express.js</li>
              <li className="text-gray-400">MongoDB</li>
              <li className="text-gray-400">HTML, CSS, Tailwind CSS</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Lucknow, U.P, India</li>
              <li className="text-gray-400">+91-88401xxxxx</li>
              <li className="text-gray-400">shivamganesh2002@gmail.com</li>
            </ul>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <motion.div
          className="border-t border-gray-800 pt-8 text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {currentYear} Shivam Gupta. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0 flex items-center">
              <Award size={14} className="text-pink-500 mr-1" />
              Designed with passion and purpose
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
