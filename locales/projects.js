import projectImage1_1 from "../src/image/portofolio_1/portofolio_1.1.png";
import projectImage1_2 from "../src/image/portofolio_1/portofolio_1.2.png";
import projectImage1_3 from "../src/image/portofolio_1/portofolio_1.3.png";
import projectImage1_4 from "../src/image/portofolio_1/portofolio_1.4.png";
import projectImage1_5 from "../src/image/portofolio_1/portofolio_1.5.png";
import projectImage2_1 from "../src/image/portofolio_2/portofolio_2.1.png";
import projectImage2_2 from "../src/image/portofolio_2/portofolio_2.2.png";
import projectImage2_3 from "../src/image/portofolio_2/portofolio_2.3.png";
import projectImage2_4 from "../src/image/portofolio_2/portofolio_2.4.png";
import projectImage2_5 from "../src/image/portofolio_2/portofolio_2.5.png";
import projectImage2_6 from "../src/image/portofolio_2/portofolio_2.6.png";
import projectImage2_7 from "../src/image/portofolio_2/portofolio_2.7.png";
import projectImage2_8 from "../src/image/portofolio_2/portofolio_2.8.png";
import projectImage3_1 from "../src/image/portofolio_3/portofolio_3.1.png";
import projectImage3_2 from "../src/image/portofolio_3/portofolio_3.2.png";
import projectImage3_3 from "../src/image/portofolio_3/portofolio_3.3.png";
import projectImage3_4 from "../src/image/portofolio_3/portofolio_3.4.png";
import projectImage3_5 from "../src/image/portofolio_3/portofolio_3.5.png";
import projectImage3_6 from "../src/image/portofolio_3/portofolio_3.6.png";
import projectImage4_1 from "../src/image/portofolio_4/portofolio_4.1.png";
import projectImage4_2 from "../src/image/portofolio_4/portofolio_4.2.png";
import projectImage4_3 from "../src/image/portofolio_4/portofolio_4.3.png";
import projectImage4_4 from "../src/image/portofolio_4/portofolio_4.4.png";
import projectImage4_5 from "../src/image/portofolio_4/portofolio_4.5.png";
import projectImage4_6 from "../src/image/portofolio_4/portofolio_4.6.png";
import projectImage4_7 from "../src/image/portofolio_4/portofolio_4.7.png";
import projectImage4_8 from "../src/image/portofolio_4/portofolio_4.8.png";
import projectImage4_9 from "../src/image/portofolio_4/portofolio_4.9.png";
import projectImage5 from "../src/image/portofolio_5/portofolio_5.png";
import projectImage6 from "../src/image/portofolio_6/portofolio_6.png";
import projectImage7_1 from "../src/image/portofolio_7/portofolio_7.1.png";
import projectImage7_2 from "../src/image/portofolio_7/portofolio_7.2.png";
import projectImage7_3 from "../src/image/portofolio_7/portofolio_7.3.png";
import projectImage7_4 from "../src/image/portofolio_7/portofolio_7.4.png";
import projectImage8_1 from "../src/image/portofolio_8/portofolio_8.1.png";
import projectImage8_2 from "../src/image/portofolio_8/portofolio_8.2.png";
import projectImage8_3 from "../src/image/portofolio_8/portofolio_8.3.png";
import projectImage8_4 from "../src/image/portofolio_8/portofolio_8.4.png";
import projectImage8_5 from "../src/image/portofolio_8/portofolio_8.5.png";
import projectImage8_6 from "../src/image/portofolio_8/portofolio_8.6.png";
import projectImage8_7 from "../src/image/portofolio_8/portofolio_8.7.png";
import projectImage8_8 from "../src/image/portofolio_8/portofolio_8.8.png";
import projectImage8_9 from "../src/image/portofolio_8/portofolio_8.9.png";
import projectImage8_10 from "../src/image/portofolio_8/portofolio_8.10.png";
import projectImage8_11 from "../src/image/portofolio_8/portofolio_8.11.png";
import projectImage8_12 from "../src/image/portofolio_8/portofolio_8.12.png";
import projectImage8Training from "../src/image/portofolio_8/training_output.png";
import projectImage8Gantt from "../src/image/portofolio_8/gantt_chart.png";

export const projectCategoryStyles = {
  thesis: { label: "THESIS PROJECT", color: "#a85568", background: "rgba(237, 181, 189, .24)", border: "rgba(185, 111, 126, .4)" },
  intern: { label: "INTERN PROJECT", color: "#9a6844", background: "rgba(242, 195, 139, .26)", border: "rgba(233, 178, 109, .44)" },
  competition: { label: "COMPETITION", color: "#8c5b4b", background: "rgba(240, 179, 157, .25)", border: "rgba(228, 154, 165, .42)" },
  personal: { label: "PERSONAL PROJECT", color: "var(--primary-strong)", background: "var(--badge-bg)", border: "var(--badge-border)" },
};

const projects = [
  {
    order: 8,
    category: "personal",
    title: "Mental Health Support Companion (MindMate)",
    description:
      "A voice-based mental health support app concept that lets users interact with a virtual companion through voice instead of text. I created the concept and designed the interface and user experience during my second semester in 2023.",
    tags: ["Figma"],
    preview: projectImage1_1.src,
    gallery: [
      projectImage1_1.src,
      projectImage1_2.src,
      projectImage1_3.src,
      projectImage1_4.src,
      projectImage1_5.src,
    ],
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/file/oEruGAFCfKb4r05687V2OY/MeiMei-Project?type=design&node-id=0-1&mode=design&t=7XXIHEtbyAuJV0lg-0",
      },
    ],
  },

  {
    order: 6,
    category: "personal",
    title: "Carbon Emission Calculator (Emi2C)",
    description:
      "A web application that helps users calculate carbon emissions from transportation activities such as vehicle type, fuel type, and travel distance. I developed the website, interface, database, and backend functionality during my fourth semester in 2024.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    preview: projectImage2_4.src,
    gallery: [
      projectImage2_1.src,
      projectImage2_2.src,
      projectImage2_3.src,
      projectImage2_4.src,
      projectImage2_5.src,
      projectImage2_6.src,
      projectImage2_7.src,
      projectImage2_8.src,
    ],
    links: [
      {
        label: "Web",
        href: "https://vio2806.github.io/EMI2C.github.io/home.html",
      },
    ],
  },

  {
    order: 7,
    category: "personal",
    title: "Jenius Academy",
    description:
      "An online learning platform where students can explore subjects and access free and paid courses. I designed and developed the interface with a simple and user-friendly learning experience during my third semester in 2023.",
    tags: ["HTML", "CSS", "JavaScript"],
    preview: projectImage3_6.src,
    gallery: [
      projectImage3_1.src,
      projectImage3_2.src,
      projectImage3_3.src,
      projectImage3_4.src,
      projectImage3_5.src,
      projectImage3_6.src,
    ],
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/w3DaMUV7jCIgNg4YirBDCg/HCI-LAB?node-id=102-849&t=nqTcqV65f2yjK8ME-1",
      },
      {
        label: "GitHub",
        href: "https://github.com/Vio2806/JeniusAcademy.github.io",
      },
    ],
  },

  {
    order: 4,
    category: "competition",
    title: "Protoathon (B-Thrive)",
    description:
      "An app concept for students who experience anxiety or difficulty concentrating in crowded classrooms. The concept included peer chat support, psychologist appointment scheduling, and a daily emotion check-in, designed in Figma for a 2024 Protoathon competition.",
    tags: ["Figma"],
    preview: projectImage4_1.src,
    gallery: [
      projectImage4_1.src,
      projectImage4_2.src,
      projectImage4_3.src,
      projectImage4_4.src,
      projectImage4_5.src,
      projectImage4_6.src,
      projectImage4_7.src,
      projectImage4_8.src,
      projectImage4_9.src,
    ],
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/R9b8EXudOAySzOD8EokLwc/Protoathon-Opithon?node-id=0-1&t=j8t8mT2GLOSQT5X1-1",
      },
    ],
  },

  {
    order: 3,
    category: "competition",
    title: "CodePlot",
    description:
      "An AI-powered chat interface that helps Python programmers understand and solve coding errors. I developed the front end, back end, and chat-based user experience for a 2024 hackathon competition.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Git"],
    preview: projectImage5.src,
    gallery: [projectImage5.src],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Vio2806/Codeplot",
      },
    ],
  },

  {
    order: 5,
    category: "personal",
    title: "AI Image Classification - Skin Type Detection",
    description:
      "A machine learning project that classifies human skin images into oily, dry, or normal categories. I trained and tested the model multiple times with Google Colab and Torchvision to improve its performance during my fifth semester in 2024.",
    tags: ["Python", "PyTorch", "Torchvision", "Google Colab"],
    preview: projectImage6.src,
    gallery: [projectImage6.src],
    links: [
      {
        label: "Google Colab",
        href: "https://colab.research.google.com/drive/1u2xmVKYmfEx5nZ7fza-SrvP6VCmds1ue?usp=sharing",
      },
    ],
  },

  {
    order: 2,
    category: "intern",
    title: "Remote Patient Examination & Telehealth Application",
    description:
      "An Android-based telehealth application that supports in-home patient examinations, real-time medical data synchronization from devices to doctors, and remote consultations through video calls and Zoom. I worked across the mobile application, backend, and web components as a full-stack developer.",
    tags: ["Android Studio", "XML", "JavaScript", "Python", "MySQL", "Next.js", "Postman"],
    preview: projectImage7_3.src,
    gallery: [projectImage7_1.src, projectImage7_2.src, projectImage7_3.src, projectImage7_4.src],
    links: [],
  },

  {
    order: 1,
    category: "thesis",
    title: "Sign Language Communication Platform",
    description:
      "An Android-based thesis platform that bridges communication between the deaf and hard-of-hearing community and people who can hear and speak. I developed the frontend, backend, and AI components, including a YOLOv8s sign language recognition model that translates signs into text.",
    tags: ["Android Studio", "XML", "JavaScript", "Python", "MySQL", "Supabase", "Next.js", "Postman", "YOLOv8s"],
    preview: projectImage8_2.src,
    gallery: [
      projectImage8_1.src,
      projectImage8_2.src,
      projectImage8_3.src,
      projectImage8_4.src,
      projectImage8_5.src,
      projectImage8_6.src,
      projectImage8_7.src,
      projectImage8_8.src,
      projectImage8_9.src,
      projectImage8_10.src,
      projectImage8_11.src,
      projectImage8_12.src,
      projectImage8Training.src,
      projectImage8Gantt.src,
    ],
    links: [
      {
        label: "Frontend / Android Studio code",
        href: "https://github.com/violachandra2806/ChattingAppFE",
      },
      {
        label: "Sign Language Backend code",
        href: "https://github.com/violachandra2806/SignLanguage",
      },
      {
        label: "Backend / Database code",
        href: "https://github.com/shafaldabilqis/ChattingAppBE",
      },
    ],
  },
];

const translations = [
  ["Teman Pendukung Kesehatan Mental (MindMate)", "Konsep aplikasi dukungan kesehatan mental berbasis suara yang memungkinkan pengguna berinteraksi dengan teman virtual melalui suara, bukan teks. Saya membuat konsep serta merancang antarmuka dan pengalaman pengguna pada semester dua tahun 2023."],
  ["Kalkulator Emisi Karbon (Emi2C)", "Aplikasi web untuk membantu pengguna menghitung emisi karbon dari aktivitas transportasi seperti jenis kendaraan, jenis bahan bakar, dan jarak perjalanan. Saya mengembangkan website, antarmuka, database, dan fungsi backend pada semester empat tahun 2024."],
  ["Jenius Academy", "Platform pembelajaran online tempat siswa dapat mengeksplorasi berbagai mata pelajaran dan mengakses kursus gratis maupun berbayar. Saya merancang dan mengembangkan antarmuka yang sederhana dan mudah digunakan pada semester tiga tahun 2023."],
  ["Protoathon (B-Thrive)", "Konsep aplikasi untuk siswa yang mengalami kecemasan atau kesulitan berkonsentrasi di kelas yang ramai. Konsep ini mencakup dukungan chat dengan teman, penjadwalan psikolog, dan check-in emosi harian yang dirancang di Figma untuk kompetisi Protoathon 2024."],
  ["CodePlot", "Antarmuka chat bertenaga AI yang membantu programmer Python memahami dan menyelesaikan error. Saya mengembangkan front end, back end, dan pengalaman chat untuk kompetisi hackathon tahun 2024."],
  ["Klasifikasi Gambar AI - Deteksi Jenis Kulit", "Proyek machine learning yang mengklasifikasikan gambar kulit manusia menjadi kategori berminyak, kering, atau normal. Saya melatih dan menguji model beberapa kali menggunakan Google Colab dan Torchvision pada semester lima tahun 2024."],
  ["Aplikasi Pemeriksaan Pasien Jarak Jauh & Telehealth", "Aplikasi telehealth berbasis Android yang mendukung pemeriksaan pasien di rumah, sinkronisasi data medis secara real-time dari perangkat ke dokter, serta konsultasi jarak jauh melalui video call dan Zoom. Saya mengerjakan komponen aplikasi mobile, backend, dan web sebagai full-stack developer."],
  ["Platform Komunikasi Bahasa Isyarat", "Platform Android untuk skripsi yang menjembatani komunikasi antara komunitas tuli dan teman tuli dengan orang yang dapat mendengar dan berbicara. Saya mengembangkan frontend, backend, dan komponen AI, termasuk model pengenalan bahasa isyarat YOLOv8s yang menerjemahkan isyarat menjadi teks."],
];

export const sortProjectsByOrder = (projectList) => [...projectList].sort((firstProject, secondProject) => firstProject.order - secondProject.order);

const orderedProjects = sortProjectsByOrder(projects);

export const projectData = {
  en: orderedProjects,
  id: orderedProjects.map((project) => {
    const translationIndex = project.order - 1;
    return { ...project, title: translations[translationIndex][0], description: translations[translationIndex][1] };
  }),
};
