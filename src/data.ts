// Dil Veritabanı
export const translations = {
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
