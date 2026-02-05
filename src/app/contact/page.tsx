"use client";

import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "borix3739@gmail.com",
      href: "mailto:borix3739@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Boris Wong",
      href: "https://linkedin.com/in/boris-pwwong/",
      color: "bg-blue-700",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Sfuborisw",
      href: "https://github.com/Sfuborisw",
      color: "bg-slate-800",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-32 pb-20 transition-colors overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header - Slide down and Fade in */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-10 duration-1000 ease-out">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Let&apos;s <span className="text-blue-600">Connect</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            I&apos;d love to grab a coffee and hear about your work in IT or
            exchange advice on the field.
          </p>
        </div>

        {/* Contact Cards - Staggered Slide up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 
                hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-2xl hover:-translate-y-2 text-center
                animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both
              `}
              style={{ animationDelay: `${index * 150}ms` }} // Staggered effect
            >
              <div
                className={`w-12 h-12 ${method.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}
              >
                {method.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">
                {method.label}
              </h3>
              <p className="text-slate-900 dark:text-white font-bold truncate">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Action Banner - Scale in with subtle pulse */}
        <div className="p-10 rounded-[2.5rem] bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-500/20 animate-in zoom-in-95 duration-1000 delay-500 fill-mode-both">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Down for a tech talk? </h2>
            <p className="text-blue-100 font-medium">
              I&apos;m always open to discussing emerging tech, clean coding
              practices, or the latest trends and stories in the industry.
            </p>
          </div>
          <a
            href="mailto:borix3739@gmail.com"
            className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black hover:bg-blue-50 transition-all hover:scale-110 active:scale-95 flex items-center gap-2 whitespace-nowrap shadow-lg"
          >
            <MessageSquare className="w-5 h-5 animate-bounce" />
            Start a Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
