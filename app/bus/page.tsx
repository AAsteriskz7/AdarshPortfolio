import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  Cpu,
  GraduationCap,
  ArrowDown,
  Twitter,
  Award,
  Trophy,
  Download,
  BarChart3
} from 'lucide-react';
import { Block } from '@/components/ui/Block';
import { Badge } from '@/components/ui/Badge';

export default function BusinessPage() {
  const experiences = [
    {
      company: "GiftSpark",
      role: "Co-Founder & Solutions Architect",
      period: "Nov 2025 - Present",
      description: "Directed end-to-end product lifecycle of a B2B2C mobile application, driving UI/UX wireframing and coordinating deployment across Apple and Google app stores. Negotiated and translated complex business requirements from enterprise clients (14,000+ employees) into actionable specs and product roadmaps. Identified critical bottleneck and managed development of automated delivery pipeline, reducing manual processing by 85%.",
      skills: ["Product Lifecycle", "B2B2C", "Stakeholder Management"]
    },
    {
      company: "SlatePath.ai",
      role: "Founder, Chief Technology Officer",
      period: "Aug 2025 - Present",
      description: "Defined product vision and multi-year roadmap based on user interviews with 50+ undergraduate students. Managed end-to-end product lifecycle of a modular AI suite including automated career Roadmap Builder. Led cross-functional development using Agile methodologies, resulting in 40% accuracy increase for early beta testers.",
      skills: ["Product Roadmap", "Agile", "User Research"]
    },
    {
      company: "Classify Inc.",
      role: "Operations & Marketing Lead",
      period: "Apr 2023 - Present",
      description: "Directing product marketing strategies and targeted campaigns for a school planner application, focusing on user acquisition and brand positioning within the student demographic. Utilizing data analytics to track user engagement and translate insights into actionable feature requests.",
      skills: ["Data Analytics", "Marketing", "User Acquisition"]
    },
    {
      company: "LumaDent, Inc.",
      role: "Software Engineering Intern",
      period: "May 2025 - Jul 2025",
      description: "Spearheaded design and delivery of a web application connecting users with time-sensitive dental services, managing from requirements gathering to deployment. Translated complex technical requirements into a user-facing customization tool, reducing error to <2mm and increasing precision by 96%.",
      skills: ["Product Delivery", "Requirements", "User Tools"]
    }
  ];

  const projects = [
    {
      title: "WattsTheMatter",
      tags: ["React", "TypeScript", "Python"],
      desc: "Best Overall Hack at EnergyHack@GT. Developed an MVP that predicts ML carbon footprints; led the pitch and product demonstration to industry judges, winning 1st place for addressing sustainability in AI.",
      link: "https://devpost.com/software/wattsthematter"
    },
    {
      title: "Spoiler Alert!",
      tags: ["Figma", "React", "UI/UX"],
      desc: "Conducted user research and designed high-fidelity wireframes for a smart fridge platform. Defined product roadmap including AI-driven recipe generation to maximize platform value and user engagement.",
      link: "#"
    },
    {
      title: "ResuMax",
      tags: ["Node.js", "React", "Firebase"],
      desc: "Identified a market gap in ATS transparency and engineered an AI-driven feedback loop to help users optimize resumes. Designed core matching logic translating LLM outputs into actionable, user-friendly feedback.",
      link: "#"
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

  const skillCategories = [
    {
      category: "Product Management",
      skills: ["Product Roadmap", "User Research", "Wireframing (Figma)", "Agile/Scrum", "GTM Strategy", "Data Analytics", "MVP Development", "Stakeholder Mgmt"]
    },
    {
      category: "Technical Proficiencies",
      skills: ["Python", "JavaScript", "SQL", "React", "Next.js", "FastAPI", "PostgreSQL", "Git", "LLMs", "RAG"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Supabase", "Firebase", "Google Cloud", "Cloudflare", "Linear", "Notion", "Vercel"]
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
            Business & Product
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
          <span>Scroll Down</span>
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
                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-orange-400 border-[3px] border-black rounded-full" />
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
            {/* Skills */}
            <Block color="bg-purple-200">
              <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <Cpu size={24} strokeWidth={3} /> Skills
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

            {/* Education */}
            <Block color="bg-orange-200">
              <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                <GraduationCap size={24} strokeWidth={3} /> Education
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-black">B.S. in Computer Science</p>
                  <p className="font-bold text-zinc-600 uppercase text-sm tracking-wide">Georgia Institute of Technology</p>
                  <p className="text-xs font-bold mt-2">Concentrations: AI & Cybersecurity</p>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">Coursework: Data Structures & Algorithms, OOP, Linear Algebra, Discrete Math, Computer Organization</p>
                </div>
              </div>
            </Block>
          </section>
        </div>

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
                  <BarChart3 className="text-black/20 group-hover:scale-110 transition-transform duration-500" size={64} />
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
