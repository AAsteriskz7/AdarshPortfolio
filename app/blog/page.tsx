import React from 'react';
import {
  ArrowLeft,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { Block } from '@/components/ui/Block';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: "Building Real-time AI Applications with Next.js and WebSockets",
      platform: "Hashnode",
      link: "https://hashnode.com/",
      date: "May 15, 2026",
      excerpt: "Exploring the architecture behind low-latency AI streaming using modern web technologies.",
      color: "bg-blue-300"
    },
    {
      title: "The Future of Multimodal LLMs in EdTech",
      platform: "Substack",
      link: "https://substack.com/",
      date: "Apr 02, 2026",
      excerpt: "How models like Gemini and GPT-4o are reshaping personalized learning experiences.",
      color: "bg-orange-300"
    },
    {
      title: "Optimizing PostgreSQL for Vector Search",
      platform: "Medium",
      link: "https://medium.com/",
      date: "Mar 18, 2026",
      excerpt: "A deep dive into pgvector and performance tuning for RAG pipelines.",
      color: "bg-green-300"
    },
    {
      title: "Flutter vs React Native: A 2026 Perspective",
      platform: "Dev.to",
      link: "https://dev.to/",
      date: "Feb 28, 2026",
      excerpt: "My experience rebuilding an enterprise mobile application from scratch.",
      color: "bg-purple-300"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-sans selection:bg-yellow-300 pb-20">

      {/* HEADER */}
      <header className="p-6 md:p-12 pb-0">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 active:translate-y-1 active:shadow-none transition-all font-black uppercase text-sm mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <Block color="bg-white" className="max-w-4xl mx-auto mb-16 relative overflow-hidden" noHover>
          <div className="absolute top-4 right-4 hidden md:flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 border border-black"></span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <BookOpen size={48} className="text-black" />
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Blog
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-bold text-zinc-600 uppercase tracking-tight">
            My thoughts across the web
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Hashnode</Badge>
            <Badge>Substack</Badge>
            <Badge>Medium</Badge>
            <Badge>Dev.to</Badge>
          </div>
        </Block>
      </header>

      {/* POSTS GRID */}
      <main className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {posts.map((post, index) => (
            <Block key={index} color="bg-white" className="group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 border-2 border-black ${post.color} font-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                      {post.platform}
                    </span>
                    <span className="font-bold text-sm text-zinc-500 uppercase tracking-wider">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-3 group-hover:text-zinc-600 transition-colors">
                    {post.title}
                  </h2>
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 border-2 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-1 active:shadow-none transition-all md:shrink-0"
                >
                  <ExternalLink size={24} />
                </a>
              </div>

              <p className="text-lg font-medium text-zinc-700">
                {post.excerpt}
              </p>
            </Block>
          ))}
        </div>
      </main>

    </div>
  );
}
