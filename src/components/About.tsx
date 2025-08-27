"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Brain, 
  Code, 
  Palette, 
  TrendingUp, 
  Zap, 
  Database,
  Globe,
  Coins
} from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "AI & Automation",
      icon: <Brain className="w-5 h-5" />,
      items: ["Python", "Machine Learning", "Process Automation", "Dashboard Development"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Frontend Development",
      icon: <Code className="w-5 h-5" />,
      items: ["React", "Next.js", "TypeScript", "CSS/SCSS", "Responsive Design"],
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Backend Development",
      icon: <Database className="w-5 h-5" />,
      items: ["Node.js", "Supabase", "Database Design", "API Development"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "Design",
      icon: <Palette className="w-5 h-5" />,
      items: ["UI/UX", "Figma", "Canva", "Design Systems", "Brand Identity"],
      color: "bg-pink-100 text-pink-800"
    },
    {
      category: "Marketing",
      icon: <TrendingUp className="w-5 h-5" />,
      items: ["10+ years experience", "Digital Marketing", "SEO", "Content Strategy"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      category: "Web3/Crypto",
      icon: <Coins className="w-5 h-5" />,
      items: ["Solana", "Trading Bots", "DeFi", "NFT Integration"],
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#22313F] light:bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-[#B0B0B0] light:text-[#555555] max-w-3xl mx-auto leading-relaxed">
            With a decade in marketing and design, I've evolved into an AI-powered solutions architect 
            who bridges creativity with technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-[#1A2832]/60 light:bg-[#FFFFFF]/95 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 backdrop-blur-xl">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Zap className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-[#E0E0E0] light:text-[#22313F]">My Journey</h3>
                </div>
                <p className="text-[#B0B0B0] light:text-[#555555] text-lg leading-relaxed mb-6">
                  I don't just build applications—I solve real business problems using intelligent 
                  automation and modern development practices. My unique blend of design thinking, 
                  marketing strategy, and technical expertise allows me to create solutions that 
                  are both powerful and user-friendly.
                </p>
                <p className="text-[#B0B0B0] light:text-[#555555] text-lg leading-relaxed">
                  I'm <span className="font-bold text-gradient">WhoisDhana</span>, building the future of AI-powered solutions. 
                  Currently creating impact at{" "}
                  <a 
                    href="https://aggrandizedigital.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-2"
                  >
                    AggrandizeDigital
                  </a>
                  , where I don't just work—I innovate, create, and transform business challenges into 
                  intelligent solutions that drive real impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-[#1A2832]/60 light:bg-[#F7E8D3]/80 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                  <div className="text-[#888888] light:text-[#666666]">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center bg-[#1A2832]/60 light:bg-[#F7E8D3]/80 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-[#888888] light:text-[#666666]">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center bg-[#1A2832]/60 light:bg-[#F7E8D3]/80 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-[#888888] light:text-[#666666]">Client Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center bg-[#1A2832]/60 light:bg-[#F7E8D3]/80 border border-[#3A4A5A]/60 light:border-[#D0D0D0]/60 backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                  <div className="text-[#888888] light:text-[#666666]">Support Available</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"></div>
              Skills & Expertise
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </h3>
            <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  rotateX: 5
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="group cursor-pointer transform-gpu perspective-1000 relative"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* External glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 dark:from-cyan-500/30 dark:via-blue-500/30 dark:to-purple-500/30 light:from-cyan-600/40 light:via-blue-600/40 light:to-purple-600/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10 animate-pulse"></div>
                
                {/* Main card container */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-white/20 dark:to-white/10 light:from-gray-50/90 light:to-white/95 backdrop-blur-xl border border-white/20 dark:border-white/30 light:border-gray-300/60 shadow-2xl light:shadow-xl light:shadow-gray-400/20 group-hover:shadow-cyan-500/25 light:group-hover:shadow-blue-500/30 transition-all duration-700">
                  
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 light:from-cyan-600/15 light:via-blue-600/15 light:to-purple-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Futuristic grid pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-10 light:group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '15px 15px'
                    }}
                  ></div>
                  
                  {/* Scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 dark:via-cyan-400 light:via-blue-600 to-transparent transform -translate-y-full group-hover:translate-y-[200px] transition-transform duration-1200 ease-in-out opacity-60 dark:opacity-60 light:opacity-80"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-cyan-400 dark:border-cyan-400 light:border-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-purple-400 dark:border-purple-400 light:border-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{ transitionDelay: '0.1s' }}></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-blue-400 dark:border-blue-400 light:border-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{ transitionDelay: '0.2s' }}></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-cyan-400 dark:border-cyan-400 light:border-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{ transitionDelay: '0.3s' }}></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 p-8">
                    <div className="flex items-center mb-6">
                      {/* Enhanced icon container */}
                      <div className="relative mr-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 light:from-blue-600 light:to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-20 light:group-hover:opacity-30 transition-opacity duration-500 blur animate-pulse"></div>
                        <div className="relative p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 light:from-blue-600/25 light:to-purple-600/25 border border-cyan-400/30 dark:border-cyan-400/30 light:border-blue-500/50 group-hover:border-cyan-400/60 dark:group-hover:border-cyan-400/60 light:group-hover:border-blue-500/80 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/25 dark:group-hover:shadow-cyan-500/25 light:group-hover:shadow-blue-500/30">
                          <div className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-white transition-colors duration-500">
                            {skill.icon}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-xl text-[#E0E0E0] light:text-[#22313F] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 dark:group-hover:from-cyan-400 dark:group-hover:to-blue-500 light:group-hover:from-blue-600 light:group-hover:to-purple-600 transition-all duration-500">
                          {skill.category}
                        </h4>
                        {/* Skill level indicator */}
                        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 light:from-blue-600 light:to-purple-600 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                      </div>
                    </div>
                    
                    {/* Enhanced skills badges */}
                    <div className="flex flex-wrap gap-3">
                      {skill.items.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.1) + (itemIndex * 0.05)
                          }}
                          viewport={{ once: true }}
                          className="relative group/badge"
                        >
                          {/* Badge glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-blue-500/50 dark:from-cyan-400/50 dark:to-blue-500/50 light:from-blue-600/60 light:to-purple-600/60 rounded-full opacity-0 group-hover:group-hover/badge:opacity-100 transition-opacity duration-300 blur-sm"></div>
                          
                          <div className="relative px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-gray-800/60 to-gray-700/60 dark:from-gray-800/60 dark:to-gray-700/60 light:from-gray-200/80 light:to-gray-300/80 border border-gray-600/40 dark:border-gray-600/40 light:border-gray-400/60 text-gray-300 dark:text-gray-300 light:text-gray-700 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 dark:group-hover:from-cyan-500/20 dark:group-hover:to-blue-500/20 light:group-hover:from-blue-500/30 light:group-hover:to-purple-500/30 group-hover:border-cyan-400/50 dark:group-hover:border-cyan-400/50 light:group-hover:border-blue-500/70 group-hover:text-cyan-300 dark:group-hover:text-cyan-300 light:group-hover:text-blue-700 transition-all duration-500 hover:scale-110 transform-gpu">
                            {item}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom reflection effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/5 to-transparent dark:from-white/5 dark:to-transparent light:from-gray-400/15 light:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}