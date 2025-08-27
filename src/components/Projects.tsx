"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  Globe, 
  Bot,
  Clock,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Dashboard",
      category: "Enterprise Finance & Inventory Platform",
      description: "Unified dashboard with real-time finance tracking, intelligent inventory management, task automation, order processing, and admin controls",
      problem: "Multiple business processes scattered across different tools, manual inventory tracking, slow financial reporting",
      solution: "Unified dashboard with real-time finance tracking, intelligent inventory management, task automation, order processing, and admin controls",
      thumbnails: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop&crop=center"
      ],
      techStack: [
        "Next.js 15.4.5",
        "React 19.1.0", 
        "TypeScript 5",
        "Supabase",
        "NextAuth.js",
        "Radix UI",
        "ReactFlow"
      ],
      features: [
        "Real-time dashboards",
        "Automated reporting", 
        "Role-based access",
        "Dark theme",
        "PDF generation",
        "Excel/XML processing"
      ],
      impact: [
        { metric: "Report Generation Time", value: "4 hours → 15 minutes", icon: <Clock className="w-4 h-4" /> },
        { metric: "Manual Steps Eliminated", value: "25+ daily", icon: <Zap className="w-4 h-4" /> },
        { metric: "Inventory Accuracy", value: "95% improvement", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Time Saved", value: "20+ hours/week", icon: <Users className="w-4 h-4" /> }
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Full-Stack Agency Platform",
      category: "Modern Agency Website",
      description: "Modern, responsive agency website with portfolio showcase, client portal, and lead generation capabilities",
      problem: "Outdated website limiting client acquisition and showcase capabilities",
      solution: "Modern, responsive agency website with portfolio showcase, client portal, and lead generation",
      thumbnails: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop&crop=center"
      ],
      techStack: [
        "WordPress",
        "Custom Development",
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "Analytics Integration"
      ],
      features: [
        "Portfolio showcase",
        "Client portal",
        "Lead generation",
        "SEO optimized",
        "Mobile responsive",
        "Fast loading"
      ],
      impact: [
        { metric: "Lead Generation", value: "150% increase", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Page Load Speed", value: "60% improvement", icon: <Zap className="w-4 h-4" /> },
        { metric: "User Engagement", value: "200% boost", icon: <Users className="w-4 h-4" /> },
        { metric: "Conversion Rate", value: "3x higher", icon: <BarChart3 className="w-4 h-4" /> }
      ],
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Intelligent Alert & Monitoring System",
      category: "Multi-Platform Alert Bot Ecosystem",
      description: "Integrated bot ecosystem for Web3 alerts, forum monitoring, X.com tracking, and automated responses",
      problem: "Missing opportunities across crypto markets, forums, and social media",
      solution: "Integrated bot ecosystem for Web3 alerts, forum monitoring, X.com tracking, and automated responses",
      thumbnails: [
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center"
      ],
      techStack: [
        "Node.js",
        "Web3 APIs",
        "Twitter API",
        "Discord Bots",
        "Real-time Notifications",
        "Database Integration"
      ],
      features: [
        "Web3 alerts",
        "Forum monitoring",
        "Social media tracking",
        "Automated responses",
        "Real-time notifications",
        "Custom triggers"
      ],
      impact: [
        { metric: "Trading Opportunities", value: "300+ captured", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Response Time", value: "Hours → Seconds", icon: <Clock className="w-4 h-4" /> },
        { metric: "Monitoring Tasks", value: "80% automated", icon: <Bot className="w-4 h-4" /> },
        { metric: "Market Coverage", value: "24/7 monitoring", icon: <Zap className="w-4 h-4" /> }
      ],
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#22313F] light:bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-[#B0B0B0] light:text-[#555555] max-w-3xl mx-auto leading-relaxed">
            Transforming complex business challenges into intelligent, automated solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1A2832]/60 light:bg-[#FFFFFF]/95 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 backdrop-blur-xl hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-2xl sm:text-3xl text-[#E0E0E0] light:text-[#22313F]">{project.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-lg text-[#B0B0B0] light:text-[#555555] leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Thumbnail Gallery */}
                  <div>
                    <h4 className="text-lg font-semibold mb-6 text-[#E0E0E0] light:text-[#22313F] flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
                      Project Preview
                    </h4>
                    <div className="grid grid-cols-3 gap-6">
                      {project.thumbnails.map((thumbnail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          whileHover={{ 
                            scale: 1.05, 
                            rotateY: 5,
                            z: 50
                          }}
                          transition={{ 
                            duration: 0.6, 
                            delay: idx * 0.15,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                          }}
                          viewport={{ once: true }}
                          className="relative group cursor-pointer transform-gpu perspective-1000"
                          style={{
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          {/* Glassmorphism container */}
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 dark:from-white/20 dark:to-white/10 backdrop-blur-md border border-white/20 dark:border-white/30 shadow-xl">
                            {/* Glow effect background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            
                            {/* Image container */}
                            <div className="relative overflow-hidden rounded-xl">
                              <Image
                                src={thumbnail}
                                alt={`${project.title} preview ${idx + 1}`}
                                width={400}
                                height={200}
                                className="w-full h-32 sm:h-40 object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-110"
                              />
                              
                              {/* Animated overlay gradients */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
                              
                              {/* Futuristic grid overlay */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{
                                  backgroundImage: `
                                    linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                                  `,
                                  backgroundSize: '20px 20px'
                                }}
                              ></div>
                              
                              {/* Corner accents */}
                              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              {/* Scan line effect */}
                              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-y-full group-hover:translate-y-[160px] transition-transform duration-1000 ease-in-out opacity-80"></div>
                              
                              {/* Preview badge */}
                              <div className="absolute bottom-3 left-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-xs text-white font-medium">Preview {idx + 1}</span>
                              </div>
                            </div>
                            
                            {/* Reflection effect */}
                            <div className="absolute -bottom-1 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                          </div>
                          
                          {/* External glow */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">Problem</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-[#E0E0E0] light:text-[#22313F]">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-[#E0E0E0] light:text-[#22313F]">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-sm">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#E0E0E0] light:text-[#22313F]">Impact & Results</h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {project.impact.map((item, idx) => (
                        <div key={idx} className="bg-[#1A2832]/40 light:bg-[#F7E8D3]/60 border border-[#3A4A5A]/40 light:border-[#D0D0D0]/40 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="text-blue-600">
                              {item.icon}
                            </div>
                            <span className="text-sm font-medium text-[#888888] light:text-[#666666]">
                              {item.metric}
                            </span>
                          </div>
                          <div className="text-xl font-bold text-gradient">
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t">
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}