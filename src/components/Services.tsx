"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Bot, 
  Globe, 
  Check,
  Clock,
  Users,
  Zap,
  Code
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "AI Dashboard in a Week",
      description: "Custom business intelligence dashboard with AI insights",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "Starting at $2,500",
      timeline: "5-7 days",
      features: [
        "Real-time data visualization",
        "AI-powered insights & analytics", 
        "Custom KPI tracking",
        "Responsive design",
        "Data export capabilities",
        "Role-based access control",
        "Integration with existing systems",
        "30 days of support included"
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Bot Your Business",
      description: "Custom automation and monitoring solutions",
      icon: <Bot className="w-8 h-8" />,
      price: "Starting at $1,800",
      timeline: "3-5 days",
      features: [
        "Process automation bots",
        "Social media monitoring",
        "Web scraping & data collection",
        "Alert & notification systems",
        "Multi-platform integration",
        "Custom triggers & workflows",
        "24/7 monitoring capabilities",
        "Ongoing maintenance included"
      ],
      popular: true,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "WordPress to Web3",
      description: "Modern websites with blockchain integration",
      icon: <Globe className="w-8 h-8" />,
      price: "Starting at $3,200",
      timeline: "7-10 days",
      features: [
        "Modern responsive design",
        "Web3 wallet integration",
        "NFT showcase capabilities",
        "SEO optimization",
        "Performance optimization", 
        "Content management system",
        "Crypto payment integration",
        "Future-proof architecture"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#22313F] light:bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Services & Packages
          </h2>
          <p className="text-xl text-[#B0B0B0] light:text-[#555555] max-w-3xl mx-auto leading-relaxed">
            Tailored solutions to transform your business with AI-powered automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full bg-[#1A2832]/60 light:bg-[#FFFFFF]/95 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 backdrop-blur-xl hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'ring-2 ring-green-200 shadow-lg' : ''
              }`}>
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white`}>
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-[#E0E0E0] light:text-[#22313F]">{service.name}</CardTitle>
                      <p className="text-[#B0B0B0] light:text-[#555555] mt-1">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-3xl font-bold text-gradient">
                      {service.price}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#888888] light:text-[#666666]">
                      <Clock className="w-4 h-4" />
                      <span>Delivery: {service.timeline}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#E0E0E0] light:text-[#22313F] mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[#B0B0B0] light:text-[#555555]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Button 
                      onClick={scrollToContact}
                      className={`w-full ${
                        service.popular 
                          ? 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      } text-white`}
                    >
                      Get Started
                    </Button>
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
          className="mt-16"
        >
          <Card className="bg-[#1A2832]/60 light:bg-[#FFFFFF]/95 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 backdrop-blur-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#E0E0E0] light:text-[#22313F] mb-4">Need Something Custom?</h3>
              <p className="text-[#B0B0B0] light:text-[#555555] mb-6 max-w-2xl mx-auto">
                Every business is unique. If you have specific requirements or need a completely 
                custom solution, let&apos;s discuss your project and create a tailored package.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-[#B0B0B0] light:text-[#555555]">Custom Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-[#B0B0B0] light:text-[#555555]">Dedicated Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm text-[#B0B0B0] light:text-[#555555]">Fast Delivery</span>
                </div>
              </div>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="px-8"
              >
                Let&apos;s Discuss Your Project
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}