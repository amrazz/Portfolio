import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Connect = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    // Simple validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    // Optional: Minimum message length
    if (formData.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters long");
      return;
    }

    // Send email
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        toast.success("Email sent successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email");
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="px-8 md:px-28 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-pista text-4xl md:text-5xl font-montserrat-extrabold tracking-wider mb-4">
            LET'S CONNECT
          </h2>
          <p className="text-gray-400 text-lg font-montserrat max-w-2xl mx-auto">
            Ready to build something amazing together? Drop me a message and
            let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="">
              <h3 className="text-white text-2xl font-montserrat-extrabold mb-6">
                GET IN TOUCH
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pista/10 rounded-lg flex items-center justify-center">
                    <span className="text-pista text-xl">
                      <Mail />
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">amrazrafeek2020@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pista/10 rounded-lg flex items-center justify-center">
                    <span className="text-pista text-xl">
                      <Phone />
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+91 9947 620 637</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pista/10 rounded-lg flex items-center justify-center">
                    <span className="text-pista text-xl">
                      <MapPin />
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Kozhikode, Kerala, IN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white text-xl font-montserrat-extrabold mb-4">
                FOLLOW ME
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/amrazrafeeque/"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-pista hover:bg-pista/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">
                    <BsLinkedin />
                  </span>
                </motion.a>
                <motion.a
                  href="https://github.com/amrazz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-pista hover:bg-pista/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">
                    <Github />
                  </span>
                </motion.a>

                <motion.a
                  href="https://x.com/AmrazRafee13679"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-pista hover:bg-pista/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">
                    <BsTwitterX />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-white text-2xl font-montserrat-extrabold mb-6">
              SEND MESSAGE
            </h3>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pista transition-colors font-montserrat"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pista transition-colors font-montserrat"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pista transition-colors resize-none font-montserrat"
                />
              </div>

              <motion.button
                disabled={loading}
                onClick={handleSubmit}
                className="w-full bg-pista text-black py-4 rounded-lg font-montserrat-extrabold tracking-wider"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
                }}
                type="submit"
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="h-32" />
    </section>
  );
};

export default Connect;
