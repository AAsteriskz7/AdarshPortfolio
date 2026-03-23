import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  Cpu,
  GraduationCap,
  Terminal,
  ArrowDown,
  Twitter,
  Puzzle,
  Award,
  Trophy,
  Download,
  BookOpen
} from 'lucide-react';
import { Block } from '@/components/ui/Block';
import { Badge } from '@/components/ui/Badge';

export default function Home() {
  const experiences = [
    {
      company: "GiftSpark",
      role: "Co-Founder & Solutions Architect",
      period: "Nov 2025 - Present",
      description: "Engineered a Chrome Extension (Manifest V3) to automate gift delivery pipelines, reducing manual processing by 85%. Led full product lifecycle of mobile app with Flutter and Gemini 2.5 Flash AI for real-time gift recommendations. Architected B2B2C infrastructure for enterprise clients with 14,000+ employees.",
      skills: ["Flutter", "Gemini AI", "Chrome Extensions", "B2B2C"]
    },
    {
      company: "Handshake AI Fellowship",
      role: "AI Trainer — Multimodal & Perception Expert",
      period: "Nov 2025 - Present",
      description: "Evaluating multimodal AI models through head-to-head LLM comparisons involving mixed media. Assessing specialized models for Text-to-Audio-Video generation, TTS with voice cloning, and Sketch-to-Photorealistic conversion. Performing high-precision perception data auditing for AI training datasets.",
      skills: ["LLMs", "Multimodal AI", "Data Auditing"]
    },
    {
      company: "SlatePath.ai",
      role: "Founder, Chief Technology Officer",
      period: "Aug 2025 - Present",
      description: "Architecting an AI student success platform with Python (FastAPI) microservices, Next.js frontend, and RAG pipeline using LangChain and Supabase (pgvector). Leading cross-functional agile development for AI-powered TestPrep, Roadmap Builder, and application assistant modules.",
      skills: ["Next.js", "FastAPI", "LangChain", "RAG", "Supabase"]
    },
    {
      company: "Office of Information Technology (OIT), Georgia Tech",
      role: "Web Developer",
      period: "Sep 2025 - Present",
      description: "Maintaining high-traffic Georgia Tech websites serving 45k+ users. Developing custom components with CampusPress, Drupal, and JavaScript ensuring 100% uptime. Ensuring WCAG accessibility compliance and SEO optimization.",
      skills: ["React", "Drupal", "WCAG", "SEO"]
    },
    {
      company: "Autonomous & Connected Transportation (ACT) Lab, Georgia Tech",
      role: "Undergraduate Researcher",
      period: "Aug 2025 - Present",
      description: "Analyzing eye-tracking data from driving simulators to model driver behavior with autonomous vehicles. Developing Python scripts for attention map visualization and presenting findings on human behavior in evolving traffic environments.",
      skills: ["Python", "Data Analysis", "Computer Vision"]
    },
    {
      company: "LumaDent, Inc.",
      role: "Software Engineering Intern",
      period: "May 2025 - Jul 2025",
      description: "Developed custom CV model for IPD estimation with <2mm error and 96% reliability. Built full-stack web app with React, Node.js, and PostgreSQL. Engineered LLM-powered internal tools and trained YOLOv8/v11 computer vision models for object detection.",
      skills: ["YOLOv8", "OpenCV", "React", "PostgreSQL", "LLMs"]
    },
    {
      company: "AI Safety Initiative at Georgia Tech",
      role: "Technical AI Safety Fellow",
      period: "Feb 2026 - Present",
      description: "Engaging in a technical curriculum focused on AI alignment research, including RLHF, scalable oversight, adversarial training, and mechanistic interpretability. Participating in red-teaming challenges to evaluate and mitigate AI risks.",
      skills: ["RLHF", "AI Alignment", "Red-teaming"]
    },
    {
      company: "AI Safety Initiative at Georgia Tech",
      role: "AI Safety Policy Fellow",
      period: "Feb 2026 - Present",
      description: "Researching catastrophic risks, compute governance, and national security dynamics related to transformative AI. Analyzing regulatory approaches including the EU AI Act and corporate Responsible Scaling Policies.",
      skills: ["AI Policy", "EU AI Act", "Governance"]
    },
    {
      company: "Classify Inc.",
      role: "Operations & Marketing Lead",
      period: "Apr 2023 - Present",
      description: "Leading marketing efforts and creating targeted campaigns to promote a school planner application. Leveraging data analytics to understand audience behavior, optimize strategies, and strengthen brand presence.",
      skills: ["Marketing", "Data Analytics", "Campaigns"]
    },
    {
      company: "Knowt",
      role: "Operations Intern",
      period: "Nov 2022 - Present",
      description: "Managing official Discord servers ensuring a smooth, engaging experience for the community. Moderating discussions, assisting users with queries, and maintaining a positive atmosphere.",
      skills: ["Community Management", "Discord"]
    },
    {
      company: "Tech Dining, Georgia Tech",
      role: "Brand Ambassador",
      period: "Jan 2025 - Sep 2025",
      description: "Developed visually appealing creative content including posters, banners, and social media graphics to elevate brand visibility on campus. Executed targeted marketing strategies and campaigns.",
      skills: ["Graphic Design", "Marketing", "Social Media"]
    },
    {
      company: "Georgia Tech",
      role: "1-on-1 Peer Tutor",
      period: "Jan 2025 - Sep 2025",
      description: "Provided personalized academic support by tailoring sessions to unique student needs. Promoted effective study techniques and problem-solving strategies to enhance student performance.",
      skills: ["Teaching", "Tutoring"]
    },
    {
      company: "Georgia Tech",
      role: "Student Library Assistant",
      period: "Jan 2025 - May 2025",
      description: "Assisted patrons at the Information Desk with locating resources and navigating library services. Troubleshooted library technology including laptops and tablets.",
      skills: ["Customer Service", "Tech Support"]
    }
  ];

  const extensions = [
    {
      title: "QuantumGuard",
      tags: ["Security", "Extension"],
      desc: "Privacy-first browser extension that generates quantum-resistant passphrases using the EFF Diceware wordlist with cryptographically secure randomness.",
      link: "#"
    },
    {
      title: "GoalTube",
      tags: ["Productivity", "Extension"],
      desc: "Transform YouTube into a productivity tool by replacing your homepage with curated videos from categories like self-improvement, entrepreneurship, and AI.",
      link: "#"
    },
    {
      title: "AI Geoguesser",
      tags: ["AI", "Extension"],
      desc: "AI-powered location guesser that uses the Gemini API to analyze screenshots and predict geographic locations for GeoGuessr gameplay.",
      link: "#"
    }
  ];

  const projects = [
    {
      title: "OpenCal",
      tags: ["React Native", "TypeScript", "Gemini API"],
      desc: "AI-powered nutrition tracker using Gemini 3.0 Flash multimodal API to automate macro-nutrient extraction from food imagery. Local-first with offline-first architecture.",
      link: "https://play.google.com/store/apps/details?id=com.aasteriskz.opencal"
    },
    {
      title: "ResuMax",
      tags: ["Node.js", "React", "Firebase"],
      desc: "AI-driven resume optimization tool with multi-step LLM pipeline for PDF parsing and ATS scoring against job descriptions.",
      link: "#"
    },
    {
      title: "DigitalTwin",
      tags: ["React", "Python", "XGBoost"],
      desc: "1st Place at Ramblin' Hacks 2025. ML-powered health simulation predicting biological aging based on lifestyle choices using XGBoost on NHANES dataset.",
      link: "https://devpost.com/software/digitaltwin"
    },
    {
      title: "WattsTheMatter",
      tags: ["React", "TypeScript", "Flask"],
      desc: "Best Overall Hack at EnergyHack@GT. Predicts ML model energy consumption and carbon emissions before training using AST static code analysis.",
      link: "https://devpost.com/software/wattsthematter"
    },
    {
      title: "Spoiler Alert!",
      tags: ["React", "Figma", "UI/UX"],
      desc: "Smart fridge platform for grocery management and expiration tracking with AI-driven recipe suggestions prioritizing near-expiration items.",
      link: "#"
    },
    {
      title: "LLMuminate",
      tags: ["Claude API", "Python"],
      desc: "Chrome extension that fact-checks AI-generated content against peer-reviewed journals, evaluating claims against 10-20 scholarly articles.",
      link: "https://github.com/AAsteriskz7/LLMuminate.ai"
    },
    {
      title: "Onco-Bot",
      tags: ["Python", "OpenCV", "Google Maps"],
      desc: "3rd Place at HackGT 11. Discord bot using OpenCV for melanoma detection with 90% diagnostic accuracy, integrated with Google Maps.",
      link: "https://devpost.com/software/oncobot-qlkv0n"
    }
  ];

  const awards = [
    {
      title: "First Place Winner",
      event: "Ramblin' Hacks 2025",
      project: "DigitalTwin",
      desc: "ML-powered health simulation predicting biological aging."
    },
    {
      title: "Best Overall Hack",
      event: "EnergyHack@GT",
      project: "WattsTheMatter",
      desc: "Predicting ML model energy consumption and carbon emissions."
    },
    {
      title: "Third Place Winner",
      event: "HackGT 11",
      project: "Onco-Bot",
      desc: "AI-powered skin cancer detection using computer vision."
    }
  ];

  const certifications = [
    {
      title: "The Cybersecurity Threat Landscape",
      issuer: "LinkedIn",
      date: "2025",
      desc: "Comprehensive overview of modern cybersecurity threats and vulnerability management."
    },
    {
      title: "RCR Basic Course",
      issuer: "CITI Program",
      date: "2025",
      desc: "Responsible Conduct of Research training covering ethics in scientific research."
    }
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "Java", "HTML/CSS", "SQL", "Dart", "PHP", "C"]
    },
    {
      category: "Frameworks & Platforms",
      skills: ["React", "Next.js", "FastAPI", "LangChain", "OpenCV", "PostgreSQL", "Supabase", "Firebase", "Git"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["LLMs", "RAG", "Prompt Engineering", "Computer Vision", "YOLO", "MediaPipe", "Deepgram"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-sans selection:bg-yellow-300">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        <Block color="bg-white" className="max-w-6xl w-full text-center md:text-left py-16 md:py-24 relative overflow-hidden" noHover>
          <div className="absolute top-4 right-4 hidden md:flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 border border-black"></span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
            Adarsh Setty
          </h1>
          <p className="text-xl md:text-3xl font-bold text-zinc-600 mb-8 uppercase tracking-tight">
            Creative Developer & Designer
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="flex items-center gap-2 font-black text-sm uppercase bg-yellow-300 border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse border border-black"></span>
              Available for work
            </div>
            <p className="font-bold text-zinc-500 uppercase tracking-widest text-sm">
              Based in Atlanta, GA
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a href="https://www.linkedin.com/in/adarshsetty/" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 active:translate-y-1 active:shadow-none transition-all">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/AAsteriskz7" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 active:translate-y-1 active:shadow-none transition-all">
              <Github size={24} />
            </a>
            <a href="https://x.com/aasteriskz" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 active:translate-y-1 active:shadow-none transition-all">
              <Twitter size={24} />
            </a>
            <a href="mailto:adarsh@gatech.edu" className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 active:translate-y-1 active:shadow-none transition-all">
              <Mail size={24} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border-2 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-1 active:shadow-none transition-all font-black uppercase text-sm">
              <Download size={20} /> Resume
            </a>
          </div>

        </Block>

        <div className="mt-12 animate-bounce flex flex-col items-center gap-2 opacity-50 font-black uppercase text-xs">
          <span>Explore</span>
          <ArrowDown size={20} />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Experience Section */}
          <section className="md:col-span-8">
            <Block color="bg-white">
              <h2 className="text-2xl font-black uppercase mb-8 flex items-center gap-3">
                <Briefcase size={24} strokeWidth={3} /> Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-[3px] border-black">
                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-yellow-400 border-[3px] border-black rounded-full" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="font-black text-xl">{exp.role}</h3>
                      <span className="font-black text-xs bg-black text-white px-3 py-1 rounded-full uppercase tracking-widest mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="font-bold text-zinc-500 mb-3 italic">{exp.company}</p>
                    <p className="text-zinc-700 leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="text-[10px] font-black uppercase border border-black px-2 py-0.5 bg-zinc-100 rounded-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Block>
          </section>

          {/* Right Column */}
          <section className="md:col-span-4 space-y-8">
            {/* Tech Stack */}
            <Block color="bg-purple-200">
              <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <Cpu size={24} strokeWidth={3} /> Tech Stack
              </h2>
              {skillCategories.map((cat) => (
                <div key={cat.category} className="mb-4">
                  <p className="font-black text-xs uppercase text-zinc-600 mb-2">{cat.category}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map(skill => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </Block>

            {/* Currently Learning */}
            <Block color="bg-blue-200">
              <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <BookOpen size={24} strokeWidth={3} /> Learning
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-black text-sm uppercase">Rust</p>
                  <div className="w-full bg-white border-2 border-black h-3 mt-1 rounded-full overflow-hidden">
                    <div className="bg-black h-full w-[40%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-black text-sm uppercase">System Design</p>
                  <div className="w-full bg-white border-2 border-black h-3 mt-1 rounded-full overflow-hidden">
                    <div className="bg-black h-full w-[65%]"></div>
                  </div>
                </div>
              </div>
            </Block>

            {/* Education */}
            <Block color="bg-orange-200">
              <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                <GraduationCap size={24} strokeWidth={3} /> Education
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-black">B.S. in Computer Science</p>
                  <p className="font-bold text-zinc-600 uppercase text-sm tracking-wide">Georgia Institute of Technology</p>
                  <p className="text-xs font-bold mt-2">GPA: 3.77/4.0 • Minor in Fintech</p>
                  <p className="text-xs font-bold mt-1">Concentrations: AI & Cybersecurity</p>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">Coursework: Design & Analysis of Algorithms, Systems & Networks, Computer Organization, Data Structures & Algorithms, OOP, Discrete Math, Linear Algebra</p>
                </div>
              </div>
            </Block>
          </section>
        </div>

        {/* Extensions Section */}
        <section>
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl font-black uppercase whitespace-nowrap">Extensions & Apps</h2>
            <div className="h-[4px] w-full bg-black"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extensions.map((project, idx) => (
              <Block key={idx} className="flex flex-col group h-full">
                <div className="aspect-[4/3] bg-zinc-200 border-[3px] border-black mb-6 flex items-center justify-center overflow-hidden relative">
                  <Puzzle className="text-black/20 group-hover:scale-110 transition-transform duration-500" size={64} />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-black mb-3 flex items-center justify-between">
                  {project.title}
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} strokeWidth={3} className="hover:text-blue-600 transition-colors" />
                    </a>
                  )}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase border-2 border-black px-2 py-0.5 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{tag}</span>
                  ))}
                </div>
                <p className="text-zinc-600 font-medium mb-6 flex-grow leading-snug">{project.desc}</p>
              </Block>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl font-black uppercase whitespace-nowrap">Projects</h2>
            <div className="h-[4px] w-full bg-black"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Block key={idx} className="flex flex-col group h-full">
                <div className="aspect-[4/3] bg-zinc-200 border-[3px] border-black mb-6 flex items-center justify-center overflow-hidden relative">
                  <Terminal className="text-black/20 group-hover:scale-110 transition-transform duration-500" size={64} />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-black mb-3 flex items-center justify-between">
                  {project.title}
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} strokeWidth={3} className="hover:text-blue-600 transition-colors" />
                    </a>
                  )}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase border-2 border-black px-2 py-0.5 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{tag}</span>
                  ))}
                </div>
                <p className="text-zinc-600 font-medium mb-6 flex-grow leading-snug">{project.desc}</p>
                {project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-black text-white font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors text-center block">
                    View Project
                  </a>
                )}
              </Block>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl font-black uppercase whitespace-nowrap">Awards & Honors</h2>
            <div className="h-[4px] w-full bg-black"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, idx) => (
              <Block key={idx} color="bg-pink-200" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Trophy size={20} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest">{award.event}</span>
                  </div>
                  <h3 className="text-xl font-black mb-2">{award.title}</h3>
                  <p className="font-bold text-zinc-600 text-sm mb-4">Project: {award.project}</p>
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed">{award.desc}</p>
              </Block>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl font-black uppercase whitespace-nowrap">Certifications</h2>
            <div className="h-[4px] w-full bg-black"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <Block key={idx} color="bg-yellow-100" className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Award size={24} />
                  </div>
                  <span className="font-black text-xs bg-black text-white px-3 py-1 rounded-full uppercase tracking-widest">{cert.date}</span>
                </div>
                <h3 className="text-xl font-black mb-1">{cert.title}</h3>
                <p className="font-bold text-zinc-500 uppercase text-xs tracking-wider mb-4">{cert.issuer}</p>
                <p className="text-zinc-700 text-sm leading-relaxed">{cert.desc}</p>
              </Block>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <Block color="bg-blue-400" className="flex flex-col items-center justify-center text-center p-12">
            <h3 className="text-2xl font-black mb-6 uppercase leading-tight">Got a project in mind?</h3>
            <a href="mailto:adarsh@gatech.edu" className="group flex items-center gap-2 bg-white text-black px-8 py-4 border-[3px] border-black font-black uppercase tracking-tighter hover:bg-yellow-300 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              LET&apos;S TALK <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Block>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t-[3px] border-black bg-white p-12 text-center">
        <p className="font-black text-sm uppercase tracking-[0.2em]">
          © 2026 Adarsh Setty
        </p>
      </footer>
    </div>
  );
}
