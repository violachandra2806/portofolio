import { personalInfo } from "./information";

export const defaultLocale = "en";

let currentLocale = defaultLocale;

export const setLocale = (locale = defaultLocale) => {
  currentLocale = locale;
};

export const translations = {
  nav_home: { en: "Home", id: "Beranda" },
  nav_about: { en: "About", id: "Tentang" },
  nav_skills: { en: "Skills", id: "Keahlian" },
  nav_projects: { en: "Projects", id: "Proyek" },
  nav_contact: { en: "Contact", id: "Kontak" },
  cta_lets_talk: { en: "Let's Talk", id: "Mari Bicara" },
  cta_view_projects: { en: "Projects", id: "Proyek" },
  cta_about_me: { en: "Learn more", id: "Pelajari lebih lanjut" },
  hero_greeting: { en: "HELLO THERE! I AM", id: "HAI! PERKENALKAN SAYA" },
  hero_eyebrow: { en: "AND I AM A", id: "DAN SAYA ADALAH SEORANG" },
  hero_lead: {
    en: "I'm a software engineer who turns ideas into polished web experiences, clean interfaces, and scalable systems that help businesses grow.",
    id: "Saya seorang software engineer yang mengubah ide menjadi pengalaman web yang halus, interface yang rapi, dan sistem yang scalable untuk membantu bisnis berkembang.",
  },
  hero_roles: {
    en: [
      "Software Engineer",
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
      "Android Developer",
      "Content Creator",
    ],
    id: [
      "Software Engineer",
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
      "Android Developer",
      "Content Creator",
    ],
  },
  about_label: { en: "About", id: "Tentang" },
  about_title: {
    en: "Turning ideas into useful products.",
    id: "Mengubah ide menjadi produk yang bermanfaat.",
  },
  about_card_1: {
    en: "I'm a software engineer focused on crafting thoughtful, scalable, user-centered digital experiences. I enjoy working across frontend, product thinking, and implementation to create intuitive systems that feel smooth from the first click to the final interaction.",
    id: "Saya adalah software engineer yang fokus pada pembuatan pengalaman digital yang thoughtful, scalable, dan berorientasi pada pengguna. Saya menikmati bekerja di berbagai bidang mulai dari frontend, product thinking, hingga implementasi untuk menciptakan sistem yang intuitif dan terasa lancar dari klik pertama sampai interaksi akhir.",
  },
  about_card_2: {
    en: "My process combines clean architecture, strong communication, and a practical eye for design. I care deeply about performance, clarity, and building experiences that help teams move faster and users stay engaged.",
    id: "Proses saya menggabungkan arsitektur yang bersih, komunikasi yang kuat, dan sudut pandang desain yang praktis. Saya sangat memperhatikan performa, kejelasan, dan pengalaman yang membantu tim bergerak lebih cepat serta pengguna tetap terlibat.",
  },
  history_details: { en: "Details", id: "Detail" },
  skills_label: { en: "Skills", id: "Keahlian" },
  skills_title: {
    en: "Tools, Systems, and Creative Problem-Solving.",
    id: "Alat, sistem, dan pemecahan masalah secara kreatif.",
  }, 
  skills_text: {
    en: "Technologies and technical skills I have developed through hands-on experience and applied to build practical solutions, solve complex problems, and create useful products.",
    id: "Teknologi dan keterampilan teknis yang saya kembangkan melalui pengalaman langsung dan terapkan untuk membangun solusi yang praktis, menyelesaikan berbagai permasalahan, serta menciptakan produk yang bermanfaat.",
  },
  skills_category_languages: { en: "Languages", id: "Bahasa" },
  skills_category_frameworksLibraries: { en: "Frameworks & Libraries", id: "Framework & Library" },
  skills_category_toolsPlatforms: { en: "Tools & Platforms", id: "Alat & Platform" },
  skills_category_technologiesConcepts: { en: "Technologies / Concepts", id: "Teknologi / Konsep" },
  projects_label: { en: "Projects", id: "Proyek" },
  projects_title: {
    en: "Selected work with real product impact.",
    id: "Pilihan pekerjaan dengan dampak nyata.",
  },
  projects_badge: { en: "Featured", id: "Unggulan" },
  projects_item_1_title: { en: "Productivity Dashboard", id: "Productivity Dashboard" },
  projects_item_1_description: {
    en: "Built a business analytics dashboard used by teams to track operations, automate updates, and improve visibility across workstreams.",
    id: "Membangun dashboard analitik bisnis yang digunakan tim untuk melacak operasi, memperbarui informasi, dan meningkatkan visibilitas lintas pekerjaan.",
  },
  projects_item_1_tags: { en: ["React", "Node", "Charts"], id: ["React", "Node", "Charts"] },
  projects_item_2_title: { en: "Marketplace Platform", id: "Marketplace Platform" },
  projects_item_2_description: {
    en: "Designed and deployed an e-commerce experience focused on speed, conversion, and minimal friction between user search and checkout.",
    id: "Merancang dan meluncurkan pengalaman e-commerce yang fokus pada kecepatan, konversi, dan hambatan minimal antara pencarian pengguna dan checkout.",
  },
  projects_item_2_tags: { en: ["Next.js", "Stripe", "UX"], id: ["Next.js", "Stripe", "UX"] },
  projects_item_3_title: { en: "Internal Workflow Tool", id: "Internal Workflow Tool" },
  projects_item_3_description: {
    en: "Created a clean workflow management interface that helped teams reduce repetitive tasks and centralize operational information.",
    id: "Membuat antarmuka manajemen workflow yang membantu tim mengurangi tugas berulang dan memusatkan informasi operasional.",
  },
  projects_item_3_tags: { en: ["TypeScript", "API", "Design"], id: ["TypeScript", "API", "Design"] },
  contact_label: { en: "Contact", id: "Kontak" },
  contact_title: {
    en: "Let's build something meaningful.",
    id: "Mari bangun sesuatu yang berarti.",
  },
  contact_text: {
    en: "I'm open to product engineering roles, freelance work, and collaboration on ideas that need creative and technical execution.",
    id: "Saya terbuka untuk peran engineering produk, pekerjaan freelance, dan kolaborasi pada ide yang membutuhkan eksekusi kreatif dan teknis.",
  },
  contact_email: { en: personalInfo.email, id: personalInfo.email },
  contact_linkedin: { en: "LinkedIn", id: "LinkedIn" },
  contact_instagram: { en: "Instagram", id: "Instagram" },
  contact_github: { en: "GitHub", id: "GitHub" },
  footer_copyright: {
    en: `© ${new Date().getFullYear()} ${personalInfo.name}. All Rights Reserved.`,
    id: `© ${new Date().getFullYear()} ${personalInfo.name}. Semua Hak Dilindungi.`,
  },
  locale_label: { en: "Language", id: "Bahasa" },
  profile_name: { en: personalInfo.name, id: personalInfo.name },
  profile_age: { en: personalInfo.age, id: personalInfo.age },
  profile_school: { en: personalInfo.school, id: personalInfo.school },
  profile_major: { en: personalInfo.major, id: personalInfo.major },
  profile_city: { en: personalInfo.city, id: personalInfo.city },
  profile_email: { en: personalInfo.email, id: personalInfo.email },
  profile_bio: {
    en: personalInfo.bio,
    id: personalInfo.bio,
  },
  profile_link_linkedin: { en: personalInfo.links.linkedin, id: personalInfo.links.linkedin },
  profile_link_instagram: { en: personalInfo.links.instagram, id: personalInfo.links.instagram },
  profile_link_github: { en: personalInfo.links.github, id: personalInfo.links.github },
};

export const getTranslation = (key, locale = defaultLocale) => {
  return translations[key]?.[locale] ?? translations[key]?.[defaultLocale] ?? "";
};

export const t = (key) => {
  return getTranslation(key, currentLocale);
};
