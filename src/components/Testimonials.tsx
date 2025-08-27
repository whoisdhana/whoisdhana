"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO, AggrandizeDigital",
      company: "AggrandizeDigital",
      content: "Dhana transformed our manual processes into an intelligent system that saves us hours daily. His unique blend of AI expertise and business understanding is exactly what modern companies need.",
      rating: 5,
      avatar: "S"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Operations Manager",
      company: "TechFlow Solutions",
      content: "The dashboard he built gives us real-time insights we never had before. What used to take us 4 hours now happens in 15 minutes. The ROI was immediate.",
      rating: 5,
      avatar: "M"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Marketing Director",
      company: "GrowthLab Agency",
      content: "His unique blend of design thinking and technical expertise is rare. Dhana doesn't just code - he solves business problems with elegant, user-friendly solutions.",
      rating: 5,
      avatar: "E"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "The automation bots Dhana created for us capture opportunities 24/7. We went from missing deals to being the first to respond. Game changer for our business.",
      rating: 5,
      avatar: "D"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "DataDriven Co",
      content: "Working with Dhana was seamless. He understood our complex requirements immediately and delivered a solution that exceeded expectations. Highly recommended!",
      rating: 5,
      avatar: "L"
    },
    {
      id: 6,
      name: "James Parker",
      role: "CTO",
      company: "ScaleUp Ventures",
      content: "The Web3 integration he built for our platform opened up entirely new revenue streams. His technical skills combined with marketing insights make him invaluable.",
      rating: 5,
      avatar: "J"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            What Clients Say
          </h2>
          <p className="text-xl text-[#B0B0B0] light:text-[#555555] max-w-3xl mx-auto leading-relaxed">
            Real feedback from businesses transformed by intelligent automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-effect hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-gray-300" />
                  </div>

                  <blockquote className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="glass-effect p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">Ready to Transform Your Business?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join these satisfied clients and see how AI-powered automation can revolutionize your operations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">9+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}