import React from "react";
import Image from "next/image";
import { MapPin, CheckCircle, FolderGit2 } from "lucide-react";
import { PROJECTS_DATA } from "@/data/companyData";

export default function ProjectShowcase() {
  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Field Proven Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Recent Deployments &amp; Installations
          </h2>
          <p className="text-base text-slate-400">
            A snapshot of our turnkey security and IT infrastructure projects delivered across Gurugram and Manesar.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col shadow-xl group"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/90 text-sky-400 border border-slate-700">
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
