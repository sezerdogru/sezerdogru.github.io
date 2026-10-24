interface Project {
  title: string;
  role: string;
  desc: string;
  tags: string[];
  url?: string;
  logoUrl?: string;
  isAcademic?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "pdf2portfolio",
    role: "Founder / Creator",
    desc: "AI-assisted SaaS converting static PDF résumés into modern, customized portfolio websites with automatic JSON parsing and sub-domain routing.",
    tags: [
      "Next.js App Router",
      "TypeScript",
      "LLM Orchestration",
      "Tailwind CSS",
    ],
    url: "https://pdf2portfolio.com",
    logoUrl:
      "https://www.google.com/s2/favicons?domain=pdf2portfolio.com&sz=128",
  },
  {
    title: "Kaplan Makro",
    role: "Architect & Developer",
    desc: "Game automation ecosystem powered by an optimized Python process automation client linked to a Next.js subscription and telemetry portal.",
    tags: ["Python Core", "Next.js Dashboard", "PostgreSQL", "Automation"],
    url: "https://kaplanmakro.com",
    logoUrl: "https://www.google.com/s2/favicons?domain=kaplanmakro.com&sz=128",
  },
  {
    title: "Custom Camera Profile & AI Studio",
    role: "MSc Thesis Product",
    desc: "Hardware-level camera profile management system featuring a native Android Kotlin controller and a serverless Next.js web application for AI image modification on AWS Lambda.",
    tags: ["Kotlin (Android)", "AWS Lambda", "Next.js", "API Gateway"],
    isAcademic: true,
  },
];

const STACK = [
  {
    category: "Frontend Core",
    items: [
      "TypeScript",
      "React / Next.js",
      "Remix",
      "Tailwind CSS",
      "Shopify Hydrogen",
      "GraphQL",
    ],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "PHP", "PostgreSQL", "AWS Serverless", "RESTful APIs"],
  },
  {
    category: "AI, Vision & Mobile",
    items: [
      "Python",
      "YOLOv8 & VLMs",
      "LLM Orchestration",
      "Kotlin (Android)",
      "React Native & Flutter",
    ],
  },
  {
    category: "Testing & Standards",
    items: ["Vitest", "Playwright", "Strict Type Safety", "CI/CD Pipelines"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-400 font-sans selection:bg-sky-500/20 selection:text-sky-300 antialiased">
      <div className="max-w-4xl mx-auto px-5 py-16 sm:py-20">
        {/* Header / Hero with Profile Picture */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            Available for senior engineering roles & projects
          </div>

          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 mb-6">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
                Sezer Doğru
                <br />
                <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
                  Full-Stack & Systems Engineer
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                I engineer modern web platforms and applied AI products
                end-to-end. Specializing in{" "}
                <strong className="text-slate-200 font-semibold">
                  high-performance client apps
                </strong>{" "}
                (React, Next.js, TypeScript),{" "}
                <strong className="text-slate-200 font-semibold">
                  scalable cloud systems
                </strong>{" "}
                (Node.js, PHP, AWS), and{" "}
                <strong className="text-slate-200 font-semibold">
                  passwordless authentication
                </strong>
                .
              </p>
            </div>

            {/* Profile Image with subtle ring glow */}
            <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/30 to-emerald-500/20 blur-md"></div>
              <img
                src="https://github.com/sezerdogru.png"
                alt="Sezer Doğru"
                className="relative w-full h-full object-cover rounded-2xl border-2 border-slate-700/80 shadow-xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:sezer.dogru91@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-slate-950 font-semibold text-sm hover:bg-white hover:-translate-y-0.5 transition shadow-sm"
            >
              Get in Touch ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/sezerdogru/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-[#11141c] border border-slate-800 text-slate-200 text-sm font-medium hover:border-sky-500 hover:text-sky-400 hover:-translate-y-0.5 transition"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/sezerdogru"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-[#11141c] border border-slate-800 text-slate-200 text-sm font-medium hover:border-sky-500 hover:text-sky-400 hover:-translate-y-0.5 transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://orcid.org/0009-0004-8584-5244"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-[#11141c] border border-slate-800 text-slate-200 text-sm font-medium hover:border-sky-500 hover:text-sky-400 hover:-translate-y-0.5 transition"
            >
              ORCID ↗
            </a>
          </div>
        </header>

        {/* Shipped Products */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-sky-400">
            <span>Shipped Products & Projects</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[#11141c] border border-slate-800/80 hover:border-slate-700 hover:bg-[#161a25] transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 min-w-12 rounded-xl bg-[#090a0f] border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
                      {project.logoUrl ? (
                        <img
                          src={project.logoUrl}
                          alt={project.title}
                          className="w-full h-full object-contain rounded-md"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="text-xl">📸</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {project.role}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="font-mono text-xs px-2 py-0.5 rounded bg-[#0c0e14] border border-slate-800 text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 hover:text-sky-400 transition w-fit"
                  >
                    Visit {project.title} ↗
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-600">
                    Academic Deliverable
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Open-Source & Academic Highlights */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-sky-400">
            <span>Open-Source & Academic Highlights</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Strivacity */}
            <div className="p-6 rounded-2xl bg-[#11141c] border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://avatars.githubusercontent.com/u/51088701?s=80"
                    alt="Strivacity"
                    className="w-9 h-9 rounded-lg border border-slate-800"
                  />
                  <h3 className="text-lg font-bold text-slate-100">
                    Strivacity Passkey SDKs
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Upstream contributions implementing core WebAuthn / Passkey
                  typing, UI widgets, and sample integrations across native
                  mobile and JS stacks:
                </p>
                <div className="flex flex-col gap-2 font-mono text-xs text-slate-400 mb-4">
                  <a
                    href="https://github.com/Strivacity/sdk-js/pull/27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-200 transition"
                  >
                    <span className="text-sky-400">↳</span> sdk-js #27:
                    Multi-framework widgets
                  </a>
                  <a
                    href="https://github.com/Strivacity/sdk-mobile-kotlin-native/pull/2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-200 transition"
                  >
                    <span className="text-sky-400">↳</span> sdk-mobile-kotlin
                    #2: Android Passkey
                  </a>
                  <a
                    href="https://github.com/Strivacity/demo-mobile-ios-native/pull/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-200 transition"
                  >
                    <span className="text-sky-400">↳</span> demo-mobile-ios #1:
                    iOS WebAuthn
                  </a>
                </div>
              </div>
            </div>

            {/* TU Wien */}
            <div className="p-6 rounded-2xl bg-[#11141c] border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">
                    TU
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">
                    TU Wien Research Report
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  Academic paper on spatial multi-view kitchen scene object
                  detection combining{" "}
                  <strong className="text-slate-200">YOLOv8-M</strong> with{" "}
                  <strong className="text-slate-200">
                    Vision-Language Models (VLMs)
                  </strong>{" "}
                  during exchange studies in Vienna.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/16_5IkKYJG_8z0vlKzZykUL947hk3Hz4L/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#161a25] border border-slate-800 text-slate-200 text-sm font-medium hover:border-sky-500 hover:text-sky-400 transition text-center"
              >
                Read Scientific Report (PDF) ↗
              </a>
            </div>
          </div>
        </section>

        {/* Technical Capabilities Matrix */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-sky-400">
            <span>Technical Capabilities</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#11141c] border border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STACK.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {group.category}
                </h4>
                <ul className="space-y-1.5">
                  {group.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-sm font-medium text-slate-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-sky-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#11141c] to-[#0d1017] border border-slate-800/80 text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mb-3">
            Let's build something remarkable
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-6">
            Whether you're looking for an experienced full-stack engineer for
            high-impact roles, need passkey/auth architecture, or want to
            collaborate on AI-powered software — my inbox is open.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:sezer.dogru91@gmail.com"
              className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-950 font-semibold text-sm hover:bg-white transition"
            >
              Drop an Email ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/sezerdogru/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#161a25] border border-slate-800 text-slate-200 font-medium text-sm hover:border-sky-500 hover:text-sky-400 transition"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-slate-800/80 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            <p className="font-bold text-slate-300">Sezer Doğru</p>
            <p>Senior Full-Stack & Systems Engineer</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/sezerdogru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sezerdogru/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://orcid.org/0009-0004-8584-5244"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              ORCID
            </a>
            <a
              href="mailto:sezer.dogru91@gmail.com"
              className="hover:text-slate-300 transition"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
