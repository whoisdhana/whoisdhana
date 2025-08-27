"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Globe
} from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      inquiryType: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "whoisdhana@gmail.com",
      href: "mailto:whoisdhana@gmail.com",
      description: "Get in touch directly"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/whoisdhana",
      href: "https://linkedin.com/in/whoisdhana",
      description: "Professional network"
    },
    {
      icon: <XIcon className="w-6 h-6" />,
      label: "X (Twitter)",
      value: "@whois_dhana",
      href: "https://twitter.com/whois_dhana",
      description: "Latest updates & insights"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/whoisdhana",
      href: "https://github.com/whoisdhana",
      description: "Code repositories"
    }
  ];

  const inquiryTypes = [
    "Professional Networking",
    "Collaboration Opportunity",
    "Knowledge Sharing",
    "Industry Discussion",
    "Career Opportunity",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#22313F] light:bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Let&apos;s Connect & Collaborate
          </h2>
          <p className="text-xl text-[#B0B0B0] light:text-[#555555] max-w-3xl mx-auto leading-relaxed">
            Currently focused on company projects, but always open to professional networking and collaboration opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#1A2832]/40 light:hover:bg-[#F0F0F0]/60 transition-colors"
                    >
                      <div className="text-[#888888] light:text-[#666666] mt-1">
                        {method.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-[#E0E0E0] light:text-[#22313F]">{method.label}</div>
                        <div className="text-sm text-[#B0B0B0] light:text-[#555555] mb-1">{method.value}</div>
                        <div className="text-xs text-[#888888] light:text-[#666666]">{method.description}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-[#E0E0E0] light:text-[#22313F]">Response Time</span>
                  </div>
                  <p className="text-sm text-[#B0B0B0] light:text-[#555555] mb-4">
                    Currently focused on company projects, but always happy to connect with fellow 
                    professionals for networking and collaboration discussions.
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-[#B0B0B0] light:text-[#555555]">Based in India • Available globally</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-[#E0E0E0] light:text-[#22313F]">Get In Touch</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Let&apos;s connect professionally and explore potential collaboration opportunities.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for reaching out. I&apos;ll get back to you soon to discuss potential collaboration.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#E0E0E0] light:text-[#22313F] mb-2">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#B0B0B0] light:text-[#555555] mb-3">
                        Inquiry Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => (
                          <Badge
                            key={type}
                            variant={formData.inquiryType === type ? "default" : "secondary"}
                            className="cursor-pointer"
                            onClick={() => setFormData({ ...formData, inquiryType: type })}
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#E0E0E0] light:text-[#22313F] mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Let me know how I can help or what you&apos;d like to discuss..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 text-white transition-all duration-200"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}