import React, { useState } from "react";

interface NavTranslations {
  projects: string;
  skills: string;
  experience: string;
  about: string;
  contact: string;
}

interface HeroTranslations {
  badge: string;
  title_part1: string;
  title_gradient: string;
  title_part2: string;
  description: string;
  btn_projects: string;
  btn_contact: string;
}

interface SectionsTranslations {
  projects_title: string;
  projects_desc: string;
  skills_title: string;
  skills_desc: string;
  exp_title: string;
  exp_desc: string;
  about_title: string;
  about_subtitle: string;
  contact_title: string;
  contact_desc: string;
}

interface ProjectItem {
  title: string;
  type: string;
  desc: string;
  front_tech: string;
  back_tech: string;
  tags: string[];
  icon: string;
  color: "blue" | "sky" | "emerald" | "indigo";
}

interface AcademicProjectItem {
  title: string;
  uni: string;
  desc: string;
}

interface AcademicProjects {
  title: string;
  items: AcademicProjectItem[];
}

interface SkillCategories {
  frontend: string;
  backend: string;
  devops: string;
}

interface EduItem {
  degree: string;
  school: string;
  date: string;
}

interface Education {
  title: string;
  items: EduItem[];
}

interface TranslationSet {
  nav: NavTranslations;
  hero: HeroTranslations;
  sections: SectionsTranslations;
  projects: ProjectItem[];
  academic_projects: AcademicProjects;
  skills_categories: SkillCategories;
  education: Education;
  about_text: string[];
}

const translations: Record<"tr" | "en", TranslationSet> = {
  tr: {
    nav: {
      projects: "Projelerim",
      skills: "Yetenekler",
      experience: "Deneyim",
      about: "Hakkımda",
      contact: "İletişim",
    },
    hero: {
      badge: "Yeni Fırsatlara Açık / Fullstack Developer",
      title_part1: "Fikirleri Güçlü ",
      title_gradient: "Fullstack Sistemlere",
      title_part2: " Dönüştürüyorum.",
      description:
        "Ben Sezer Doğru. Kullanıcı dostu akıcı arayüzleri, arka planda tıkır tıkır çalışan güvenilir backend, API entegrasyonları ve veri tabanı çözümleriyle birleştiriyorum.",
      btn_projects: "Projelerimi Gör",
      btn_contact: "Bana Ulaşın",
    },
    sections: {
      projects_title: "Öne Çıkan Projeler & İşler",
      projects_desc:
        "Uçtan uca mimarisini kurguladığım, gerçek kullanıcılara dokunan ticarileşmiş SaaS, e-ticaret ve otomasyon sistemleri.",
      skills_title: "Yetenek Havuzu",
      skills_desc:
        "Sadece arayüz giydirme değil, sistemin veri akışını ve performansını optimize eden araçlar.",
      exp_title: "Profesyonel İş Deneyimi",
      exp_desc:
        "Yüksek trafikli platformlar ve global SDK projelerinde aldığım sorumluluklar.",
      about_title: "Hakkımda & Mühendislik Yaklaşımım",
      about_subtitle: "Akademik Teori ile Pratik Üretim Bir Arada",
      contact_title: "Birlikte Çalışalım",
      contact_desc:
        "İş teklifleri, SaaS fikirleri veya teknik bir danışmanlık için bana her zaman yazabilirsiniz.",
    },
    projects: [
      {
        title: "PDF2Portfolio SaaS",
        type: "Aktif SaaS / Web App",
        desc: "Yüklenen PDF özgeçmişlerini akıllı dosya analiz algoritmalarıyla tarayarak saniyeler içinde dinamik, modern ve SEO uyumlu web portfolyolarına dönüştüren uçtan uca bir SaaS platformu.",
        front_tech:
          "Next.js App Router, Tailwind CSS, Zustand, Responsive Layouts",
        back_tech:
          "Python FastAPI, PostgreSQL, PDF Analiz Kütüphaneleri, RESTful API",
        tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS"],
        icon: "fa-solid fa-file-pdf",
        color: "blue",
      },
      {
        title: "Kaplan Makro Otomasyon Sistemi",
        type: "Masaüstü & Web Entegrasyonu",
        desc: "MMORPG oyunları için OpenCV tabanlı ekran/pixel analiz algoritmaları kullanan masaüstü yazılımı. Otomatik Shopier webhook ödeme entegrasyonu, lisans kontrol API'leri ve kullanıcı paneli tasarımı.",
        front_tech: "ReactJS, Tailwind CSS, Admin Kontrol Paneli",
        back_tech:
          "Python OpenCV, Windows API, Node.js Express, Shopier Webhook, JWT",
        tags: ["Python", "OpenCV", "ReactJS", "Node.js", "Webhooks"],
        icon: "fa-solid fa-robot",
        color: "sky",
      },
      {
        title: "Pınar Online ( pinaronline.com )",
        type: "Yüksek Trafikli E-Ticaret",
        desc: "Yaşar Holding bünyesindeki yüksek trafikli e-ticaret platformunun geliştirilmesi. Content Security Policy (CSP) güvenlik protokolleri ve Insider analitik takip araçlarının entegrasyonu.",
        front_tech: "Next.js, Tailwind CSS, Bootstrap, State Management",
        back_tech: "E-Ticaret API entegrasyonları, Güvenlik Politikaları",
        tags: ["Next.js", "Bootstrap", "CSP Entegrasyonu", "Analytics Tools"],
        icon: "fa-solid fa-cart-shopping",
        color: "emerald",
      },
      {
        title: "Yataş EnzaHome & EveShop",
        type: "Shopify Headless Architecture",
        desc: "Yataş Group (EnzaHome) ve EveShop markalarının e-ticaret altyapılarının headless mimariye taşınması sürecinde GraphQL veri sorguları ve performans odaklı geliştirme süreçleri.",
        front_tech:
          "Shopify Hydrogen, Remix Framework, TypeScript, Tailwind CSS",
        back_tech:
          "Shopify Storefront API, GraphQL Entegrasyonları, Third Party Tracker Entegrasyonları",
        tags: ["Hydrogen", "Remix", "GraphQL", "TypeScript", "Shopify API"],
        icon: "fa-solid fa-store",
        color: "indigo",
      },
    ],
    academic_projects: {
      title: "Akademik Araştırma Projeleri",
      items: [
        {
          title:
            "Locating Undetected Objects in Multi-View Kitchen Scenes with YOLOv8-M and VLM Analysis",
          uni: "Technische Universität Wien (Mar 2025 - Jun 2025)",
          desc: "YOLOv8-M ve Vision-Language Models (VLM) kullanarak mutfak sahnelerinde tespit edilemeyen nesnelerin konumlandırılması üzerine bilgisayarlı görü ve dil modelleri entegrasyonu araştırması.",
        },
      ],
    },
    skills_categories: {
      frontend: "Frontend Mimari",
      backend: "Backend & Veri",
      devops: "Entegrasyon & DevOps",
    },
    education: {
      title: "Eğitim",
      items: [
        {
          degree: "Yüksek Lisans (MSc) - Computer Science",
          school: "University of Pannonia (Macaristan)",
          date: "2024 - 2026",
        },
        {
          degree: "Değişim Programı - Computational Science",
          school: "Technische Universität Wien (Viyana)",
          date: "2025",
        },
        {
          degree: "Lisans - Bilgisayar Mühendisliği",
          school: "Düzce Üniversitesi",
          date: "2012 - 2018",
        },
      ],
    },
    about_text: [
      "Bilgisayar Mühendisliği lisans eğitimimin ardından, Macaristan'da Computer Science üzerine yüksek lisans derecemi tamamladım. Akademik arka planımı, gerçek iş dünyası problemlerini çözen pratik fullstack çözümlerle harmanlıyorum.",
      "Frontend tarafında React, Next.js, Shopify Hydrogen ve Remix ekosistemindeki güçlü uzmanlığımı; backend tarafında Python (FastAPI/OpenCV), Node.js ve veritabanı yönetimi ile birleştirerek uçtan uca modern mimariler inşa ediyorum. Benim için her yazılım projesi, kullanıcıya ve işletmeye değer katması gereken yaşayan bir üründür.",
    ],
  },
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      about: "About Me",
      contact: "Contact",
    },
    hero: {
      badge: "Open to Opportunities / Fullstack Developer",
      title_part1: "Converting Ideas into ",
      title_gradient: "Powerful Fullstack Systems",
      title_part2: "",
      description:
        "I am Sezer Doğru. I combine user-friendly, fluid interfaces with reliable backend services, API integrations, and database solutions running seamlessly behind the scenes.",
      btn_projects: "See My Projects",
      btn_contact: "Contact Me",
    },
    sections: {
      projects_title: "Featured Projects & Products",
      projects_desc:
        "Commercialized SaaS, e-commerce, and automation systems designed and implemented by me from scratch, end-to-end.",
      skills_title: "Technical Skill Set",
      skills_desc:
        "Tools and technologies focused on maximizing performance, data flow, and reliable system architectures.",
      exp_title: "Professional Work Experience",
      exp_desc:
        "My roles and responsibilities in high-traffic web platforms and global identity SDK developments.",
      about_title: "About Me & Engineering Approach",
      about_subtitle: "Bridging Academic Theory with Practical Production",
      contact_title: "Let's Build Together",
      contact_desc:
        "Feel free to reach out for career opportunities, SaaS ideas, or technical consultations.",
    },
    projects: [
      {
        title: "PDF2Portfolio SaaS",
        type: "Active SaaS / Web App",
        desc: "An end-to-end SaaS platform that parses uploaded PDF resumes using smart file analysis algorithms to generate modern, dynamic, and SEO-friendly web portfolios in seconds.",
        front_tech:
          "Next.js App Router, Tailwind CSS, Zustand, Responsive Layouts",
        back_tech:
          "Python FastAPI, PostgreSQL, PDF Analysis Libraries, RESTful API",
        tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS"],
        icon: "fa-solid fa-file-pdf",
        color: "blue",
      },
      {
        title: "Kaplan Macro Automation System",
        type: "Desktop & Web Integration",
        desc: "A desktop automation software utilizing advanced OpenCV-based screen/pixel analysis algorithms. Integrated automatic Shopier webhook payments, license verification APIs, and an admin panel.",
        front_tech: "ReactJS, Tailwind CSS, Admin Dashboard",
        back_tech:
          "Python OpenCV, Windows API, Node.js Express, Shopier Webhook, JWT",
        tags: ["Python", "OpenCV", "ReactJS", "Node.js", "Webhooks"],
        icon: "fa-solid fa-robot",
        color: "sky",
      },
      {
        title: "Pınar Online ( pinaronline.com )",
        type: "High-Traffic E-Commerce",
        desc: "Development of a high-traffic e-commerce platform under Yaşar Holding. Implemented Content Security Policy (CSP) security standards and integrated Insider analytical tracking tools.",
        front_tech: "Next.js, Tailwind CSS, Bootstrap, State Management",
        back_tech: "E-Commerce API Integrations, Security Policies",
        tags: ["Next.js", "Bootstrap", "CSP Integration", "Analytics Tools"],
        icon: "fa-solid fa-cart-shopping",
        color: "emerald",
      },
      {
        title: "Yataş EnzaHome & EveShop",
        type: "Shopify Headless Architecture",
        desc: "Migration of Yataş Group (EnzaHome) and EveShop platforms to headless Shopify architectures using GraphQL data queries and performance-driven development.",
        front_tech:
          "Shopify Hydrogen, Remix Framework, TypeScript, Tailwind CSS",
        back_tech:
          "Shopify Storefront API, GraphQL Integrations, Third-Party Tracker Integrations",
        tags: ["Hydrogen", "Remix", "GraphQL", "TypeScript", "Shopify API"],
        icon: "fa-solid fa-store",
        color: "indigo",
      },
    ],
    academic_projects: {
      title: "Academic Research Projects",
      items: [
        {
          title:
            "Locating Undetected Objects in Multi-View Kitchen Scenes with YOLOv8-M and VLM Analysis",
          uni: "Technische Universität Wien (Vienna, Mar 2025 - Jun 2025)",
          desc: "Research on locating undetected objects in kitchen environments using YOLOv8-M and Vision-Language Models (VLMs), incorporating computer vision and VLM integration.",
        },
      ],
    },
    skills_categories: {
      frontend: "Frontend Architecture",
      backend: "Backend & Data",
      devops: "Integration & DevOps",
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Master in Computer Science (MSc)",
          school: "University of Pannonia (Hungary)",
          date: "2024 - 2026",
        },
        {
          degree: "Exchange Student - Computational Science",
          school: "Technische Universität Wien (Vienna)",
          date: "2025",
        },
        {
          degree: "Bachelor - Computer Engineering",
          school: "Düzce University",
          date: "2012 - 2018",
        },
      ],
    },
    about_text: [
      "Following my Bachelor's degree in Computer Engineering, I completed my Master's (MSc) in Computer Science in Hungary. I combine academic depth with practical fullstack development principles that solve real-world problems.",
      "By combining my expertise in React, Next.js, Shopify Hydrogen, and Remix on the frontend with Python (FastAPI/OpenCV), Node.js, and database management on the backend, I design reliable end-to-end architectures. To me, every codebase is a living product that must deliver immense business and user value.",
    ],
  },
};

export default function App() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const t = translations[lang];

  const profileImage = "./sezer.jpg";
  const fallbackImage =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300";

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-xl font-extrabold tracking-tight text-brand-dark flex items-center gap-2"
              >
                <span className="w-3 h-3 rounded-full bg-brand-primary"></span>{" "}
                SEZER<span className="text-brand-primary">.</span>DEV
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#projects"
                className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors"
              >
                {t.nav.projects}
              </a>
              <a
                href="#skills"
                className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors"
              >
                {t.nav.skills}
              </a>
              <a
                href="#experience"
                className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors"
              >
                {t.nav.experience}
              </a>
              <a
                href="#about"
                className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-brand-primary text-white hover:bg-blue-700 text-sm font-bold transition-all shadow-sm shadow-blue-500/10"
              >
                {t.nav.contact}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-border bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition-all"
              >
                <i className="fa-solid fa-globe text-brand-primary"></i>
                {lang === "tr" ? "English (EN)" : "Türkçe (TR)"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs text-brand-primary font-semibold mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                {t.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-dark tracking-tight leading-tight mb-6">
                {t.hero.title_part1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                  {t.hero.title_gradient}
                </span>
                {t.hero.title_part2}
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3.5 bg-brand-primary hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center gap-2"
                >
                  {t.hero.btn_projects}{" "}
                  <i className="fa-solid fa-arrow-down text-sm"></i>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-brand-border text-slate-700 font-bold rounded-xl transition-all flex items-center gap-2"
                >
                  {t.hero.btn_contact}{" "}
                  <i className="fa-solid fa-paper-plane text-xs text-brand-primary"></i>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-64 h-72 bg-white rounded-2xl border border-brand-border overflow-hidden shadow-lg flex items-center justify-center">
                  <img
                    src={profileImage}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                    alt="Sezer Doğru"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-extrabold text-brand-dark text-lg">
                  Sezer Doğru
                </h3>
                <p className="text-xs text-brand-primary font-bold tracking-wider mt-1">
                  Senior Fullstack Developer
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  <i className="fa-solid fa-location-dot mr-1"></i> Bursa,
                  Türkiye
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-24 border-t border-brand-border bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                {lang === "tr" ? "ÇÖZÜMLERİM" : "SOLUTIONS"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
                {t.sections.projects_title}
              </h2>
            </div>
            <p className="text-slate-500 max-w-md mt-4 md:mt-0 text-sm leading-relaxed">
              {t.sections.projects_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-brand-bg rounded-2xl border border-brand-border p-6 sm:p-8 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${
                        proj.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : proj.color === "sky"
                            ? "bg-sky-100 text-sky-600"
                            : proj.color === "emerald"
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-indigo-100 text-indigo-600"
                      }`}
                    >
                      <i className={proj.icon}></i>
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-brand-border">
                      {proj.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-brand-dark mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {proj.desc}
                  </p>

                  <div className="space-y-3 mb-6 bg-white p-4 rounded-xl border border-brand-border/60">
                    <div className="flex items-start gap-2.5">
                      <i className="fa-solid fa-layer-group text-blue-500 mt-1 text-xs"></i>
                      <div className="text-xs">
                        <strong className="text-slate-700">
                          {lang === "tr"
                            ? "Arayüz / Mimari:"
                            : "Frontend / UI:"}
                        </strong>{" "}
                        {proj.front_tech}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <i className="fa-solid fa-server text-sky-500 mt-1 text-xs"></i>
                      <div className="text-xs">
                        <strong className="text-slate-700">
                          {lang === "tr"
                            ? "Sistem / Backend:"
                            : "System / Backend:"}
                        </strong>{" "}
                        {proj.back_tech}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold bg-white text-slate-600 border border-brand-border px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-brand-border">
                    <a
                      href="#"
                      className="text-brand-primary hover:text-blue-700 font-bold text-xs flex items-center gap-1 transition-colors"
                    >
                      {lang === "tr" ? "İncele" : "View Project"}{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50/50 border border-blue-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-brand-dark mb-2 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-brand-primary"></i>{" "}
              {t.academic_projects.title}
            </h3>
            {t.academic_projects.items.map((item, idx) => (
              <div key={idx} className="mt-4">
                <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-primary font-semibold mt-1">
                  {item.uni}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yetenekler */}
      <section
        id="skills"
        className="py-24 border-t border-brand-border bg-brand-bg"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              {lang === "tr" ? "YETKİNLİKLER" : "COMPETENCES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2">
              {t.sections.skills_title}
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              {t.sections.skills_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-brand-border p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center text-xl mb-6">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-6">
                {t.skills_categories.frontend}
              </h3>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>ReactJS & Next.js</span>
                  <span className="text-xs font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded">
                    Uzman
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>Shopify Hydrogen / Remix</span>
                  <span className="text-xs font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded">
                    Uzman
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>TypeScript & JavaScript</span>
                  <span className="text-xs font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded">
                    Uzman
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Tailwind CSS & Bootstrap</span>
                  <span className="text-xs font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded">
                    Uzman
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-brand-border p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-brand-secondary flex items-center justify-center text-xl mb-6">
                <i className="fa-solid fa-server"></i>
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-6">
                {t.skills_categories.backend}
              </h3>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>Python (FastAPI, OpenCV)</span>
                  <span className="text-xs font-bold text-brand-secondary bg-sky-50 px-2 py-0.5 rounded">
                    İleri
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>Node.js / Express</span>
                  <span className="text-xs font-bold text-brand-secondary bg-sky-50 px-2 py-0.5 rounded">
                    İleri
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>PostgreSQL & MongoDB</span>
                  <span className="text-xs font-bold text-brand-secondary bg-sky-50 px-2 py-0.5 rounded">
                    İleri
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>RESTful API & GraphQL</span>
                  <span className="text-xs font-bold text-brand-secondary bg-sky-50 px-2 py-0.5 rounded">
                    Uzman
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-brand-border p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-6">
                <i className="fa-solid fa-gears"></i>
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-6">
                {t.skills_categories.devops}
              </h3>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>Webhook & Ödeme (Shopier vb.)</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Uzman
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>Docker Container</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Orta
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>CI/CD (GitHub Actions)</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Orta
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Git, Bash & Linux</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    İleri
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deneyim */}
      <section
        id="experience"
        className="py-24 border-t border-brand-border bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              {lang === "tr" ? "KARİYER" : "CAREER"}
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark mt-2">
              {t.sections.exp_title}
            </h2>
            <p className="text-slate-500 mt-2 text-sm">{t.sections.exp_desc}</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200">
            <div className="relative flex flex-col sm:flex-row items-start sm:justify-between group">
              <div className="absolute left-4 sm:left-1/2 -translate-x-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-primary group-hover:bg-brand-primary transition-all z-10"></div>

              <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                <span className="text-xs font-bold text-brand-primary">
                  08/2025 - 09/2025
                </span>
                <h3 className="text-lg font-bold text-brand-dark mt-1">
                  Strivacity KFT (Hungary)
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  Software Intern (MSc Requirement)
                </p>
              </div>

              <div className="w-full sm:w-[45%] pl-10 sm:pl-8 mt-4 sm:mt-0">
                <p className="text-sm text-slate-500 leading-relaxed">
                  {lang === "tr"
                    ? "Rolex ve H&M gibi 5 milyondan fazla kullanıcıya hizmet veren markalar için StrivacityJS SDK (React, NextJS, Remix) Passkey (WebAuthn) entegrasyon çekirdeğini geliştirdim. Auth mantığını Angular, Vue, Kotlin ve iOS Swift dillerine aktararak platformlar arası uyum sağladım."
                    : "Engineered the core Passkey (WebAuthn) implementation for the StrivacityJS SDK (React, NextJS, Remix) serving 5M+ users (H&M, Rolex). Replicated the core authentication logic in Angular, Vue, Android (Kotlin), and iOS (Swift) to ensure consistency."}
                </p>
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row items-start sm:justify-between group">
              <div className="absolute left-4 sm:left-1/2 -translate-x-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-primary group-hover:bg-brand-primary transition-all z-10"></div>

              <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                <span className="text-xs font-bold text-brand-primary">
                  06/2022 - 05/2024
                </span>
                <h3 className="text-lg font-bold text-brand-dark mt-1">
                  Machinarium
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  Senior ReactJS Web Developer
                </p>
              </div>

              <div className="w-full sm:w-[45%] pl-10 sm:pl-8 mt-4 sm:mt-0">
                <p className="text-sm text-slate-500 leading-relaxed">
                  {lang === "tr"
                    ? "Pınar Online, Boyner MarketPlace, EveShop ve Yataş EnzaHome gibi dev markaların web altyapılarını kurguladım. Shopify Hydrogen, Remix, GraphQL ve NextJS teknolojilerini aktif olarak kullanarak Core Web Vitals optimizasyonlarını yürüttüm."
                    : "Developed high-traffic e-commerce solutions like pinaronline.com (Next.js & Bootstrap), Boyner Marketplace (NextJS & RTK), EveShop, and EnzaHome (Shopify Hydrogen, Remix, GraphQL, and TypeScript)."}
                </p>
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row items-start sm:justify-between group">
              <div className="absolute left-4 sm:left-1/2 -translate-x-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-primary group-hover:bg-brand-primary transition-all z-10"></div>

              <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                <span className="text-xs font-bold text-brand-primary">
                  05/2020 - 07/2021
                </span>
                <h3 className="text-lg font-bold text-brand-dark mt-1">
                  Stokyok
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  Associate Founder
                </p>
              </div>

              <div className="w-full sm:w-[45%] pl-10 sm:pl-8 mt-4 sm:mt-0">
                <p className="text-sm text-slate-500 leading-relaxed">
                  {lang === "tr"
                    ? "ReactJS ile e-ticaret ön yüzü ve Flutter ile admin/müşteri mobil panellerini sıfırdan hayata geçirdim."
                    : "Designed and developed the e-commerce infrastructure with ReactJS and cross-platform mobile apps with Flutter (Customer/Admin panels)."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımda */}
      <section
        id="about"
        className="py-24 border-t border-brand-border bg-brand-bg"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-white rounded-2xl border border-brand-border p-6 flex flex-col items-center shadow-md w-full max-w-sm">
                <i className="fa-solid fa-graduation-cap text-4xl text-brand-primary mb-4"></i>
                <h3 className="font-extrabold text-brand-dark text-center">
                  {t.education.title}
                </h3>
                <div className="mt-4 space-y-4 w-full">
                  {t.education.items.map((edu, idx) => (
                    <div
                      key={idx}
                      className="border-l-2 border-brand-primary pl-3"
                    >
                      <h4 className="text-xs font-bold text-slate-800">
                        {edu.degree}
                      </h4>
                      <p className="text-[10px] text-slate-400">{edu.school}</p>
                      <p className="text-[9px] text-brand-primary font-bold">
                        {edu.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                {t.sections.about_title}
              </span>
              <h2 className="text-3xl font-extrabold text-brand-dark mt-2 mb-6">
                {t.sections.about_subtitle}
              </h2>
              {t.about_text.map((paragraph, idx) => (
                <p key={idx} className="text-slate-500 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section
        id="contact"
        className="py-24 border-t border-brand-border bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            {t.nav.contact}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-2 mb-4">
            {t.sections.contact_title}
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto mb-12 text-sm sm:text-base">
            {t.sections.contact_desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sezer.dogru91@gmail.com"
              className="flex items-center gap-3 bg-brand-bg hover:bg-slate-100 border border-brand-border px-6 py-4 rounded-2xl transition-all"
            >
              <i className="fa-solid fa-envelope text-xl text-brand-primary"></i>
              <div>
                <p className="text-[10px] text-slate-400 text-left">Email</p>
                <span className="text-sm font-bold text-slate-700">
                  sezer.dogru91@gmail.com
                </span>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/sezerdogru"
              target="_blank"
              className="flex items-center gap-3 bg-brand-bg hover:bg-slate-100 border border-brand-border px-6 py-4 rounded-2xl transition-all"
            >
              <i className="fa-brands fa-linkedin text-xl text-blue-600"></i>
              <div>
                <p className="text-[10px] text-slate-400 text-left">LinkedIn</p>
                <span className="text-sm font-bold text-slate-700">
                  sezerdogru
                </span>
              </div>
            </a>
            <a
              href="https://github.com/sezerdogru"
              target="_blank"
              className="flex items-center gap-3 bg-brand-bg hover:bg-slate-100 border border-brand-border px-6 py-4 rounded-2xl transition-all"
            >
              <i className="fa-brands fa-github text-xl text-slate-900"></i>
              <div>
                <p className="text-[10px] text-slate-400 text-left">GitHub</p>
                <span className="text-sm font-bold text-slate-700">
                  sezerdogru
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-brand-border text-center text-xs text-slate-400 bg-brand-bg">
        <p>&copy; 2026 Sezer Doğru. All rights reserved.</p>
      </footer>
    </div>
  );
}
