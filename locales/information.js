import profilePicture from "../src/image/profile_pic_no_bg.png";
import workingImage from "../src/image/working_1.jpg";
import mentorshipImage from "../src/image/mentorship.png";

export const personalInfo = {
  name: "VIOLA YENNALIS CHANDRA",
  age: 21,
  school: "BINUS UNIVERSITY",
  major: "Software Engineering",
  city: "Bekasi",
  email: "violachandra2806@gmail.com",
  bio: "Software engineer focused on building digital products that are fast, reliable, and user-centered.",
  links: {
    linkedin: "https://www.linkedin.com/in/viola-yennalis-chandra/",
    linkedinUsername: "viola-yennalis-chandra",
    instagram: "https://www.instagram.com/piopiollama",
    instagramUsername: "piopiollama",
    github: "https://github.com/violachandra2806",
    githubUsername: "violachandra2806",
    youtube: "https://www.youtube.com/@vazemuzz",
    youtubeUsername: "@vazemuzz",
  },
};

export const experienceHistory = [
  {
    type: "work",
    current: true,
    period: { en: "Mar 2026 - Present", id: "Mar 2026 - Sekarang" },
    title: { en: "Software Engineer", id: "Software Engineer" },
    organization: { en: "Innopharm Indonesia", id: "Innopharm Indonesia" },
    location: { en: "Tangerang, Indonesia", id: "Tangerang, Indonesia" },
    gallery: [workingImage.src, profilePicture.src],
    summary: { en: "Building full stack products and distributable applications at Innopharm Indonesia.", id: "Membangun produk full stack dan aplikasi distributable di Innopharm Indonesia." },
    details: {
      en: [
        "Develop full stack applications using Next.js, Python, Flask, MySQL, and WebSocket across system design, backend, database, and frontend.",
        "Develop Next.js interfaces and reusable components using JavaScript and Material UI, integrating multiple backend routes and services.",
        "Build a standalone executable combining backend services and frontend into a unified distributable application.",
        "Handle complex full stack features independently and collaboratively, from database design and API development to frontend integration.",
      ],
      id: [
        "Mengembangkan aplikasi full stack menggunakan Next.js, Python, Flask, MySQL, dan WebSocket dalam perancangan sistem, backend, database, dan frontend.",
        "Mengembangkan interface Next.js dan komponen reusable menggunakan JavaScript dan Material UI dengan mengintegrasikan berbagai route serta layanan backend.",
        "Membangun executable mandiri yang menggabungkan layanan backend dan frontend menjadi satu aplikasi distributable.",
        "Menangani fitur full stack yang kompleks secara mandiri maupun kolaboratif, mulai dari perancangan database dan API hingga integrasi frontend.",
      ],
    },
  },
  {
    type: "education",
    current: false,
    period: { en: "Aug 2022 - Feb 2026", id: "Agu 2022 - Feb 2026" },
    title: { en: "Bachelor of Computer Science, Software Engineering, S.Kom.", id: "Sarjana Komputer, Software Engineering, S.Kom." },
    organization: { en: "BINUS UNIVERSITY", id: "BINUS UNIVERSITY" },
    location: { en: "Bekasi, Indonesia", id: "Bekasi, Indonesia" },
    gallery: [profilePicture.src],
    summary: { en: "Completed a Software Engineering degree with a GPA of 3.68/4.00 in 3.5 years.", id: "Menyelesaikan gelar Software Engineering dengan IPK 3.68/4.00 dalam 3,5 tahun." },
    description: {
      en: "GPA 3.68/4.00. Completed in 3.5 years.",
      id: "IPK 3.68/4.00. Diselesaikan dalam 3,5 tahun.",
    },
    details: {
      en: ["Thesis: Development of an AI Based Inclusive Communication Application for Deaf and General Users"],
      id: ["Skripsi: Development of an AI Based Inclusive Communication Application for Deaf and General Users"],
    },
    activities: [
      {
        label: { en: "Leadership & Activities", id: "Kepemimpinan & Aktivitas" },
        title: { en: "Mentor", id: "Mentor" },
        organization: { en: "Scholarship Mentorship Program", id: "Scholarship Mentorship Program" },
        period: { en: "Sep 2023 - Jan 2024", id: "Sep 2023 - Jan 2024" },
        location: { en: "Bekasi, Indonesia", id: "Bekasi, Indonesia" },
        details: {
          en: [
            "Mentored approximately 10 students through individual sessions focused on academic progress, problem solving, and study planning.",
            "Conducted approximately 10 mentoring sessions per student while managing multiple student schedules and academic responsibilities.",
          ],
          id: [
            "Membimbing sekitar 10 siswa melalui sesi individual yang berfokus pada perkembangan akademik, pemecahan masalah, dan perencanaan studi.",
            "Melaksanakan sekitar 10 sesi mentoring per siswa sambil mengatur berbagai jadwal siswa dan tanggung jawab akademik.",
          ],
        },
      },
    ],
  },
  {
    type: "work",
    current: false,
    period: { en: "Feb 2025 - Feb 2026", id: "Feb 2025 - Feb 2026" },
    title: { en: "Software Engineer Intern", id: "Software Engineer Intern" },
    organization: { en: "Innopharm Indonesia", id: "Innopharm Indonesia" },
    location: { en: "Tangerang, Indonesia", id: "Tangerang, Indonesia" },
    gallery: [profilePicture.src],
    summary: { en: "Supported web and Android product development as part of the engineering team.", id: "Mendukung pengembangan produk web dan Android sebagai bagian dari tim engineering." },
    details: {
      en: [
        "Develop full stack applications for web and Android using Next.js, JavaScript, Android Studio, Python, Flask, and MySQL.",
        "Design databases and develop REST APIs using MySQL and Flask, connecting backend services with web and Android applications.",
        "Develop reusable Next.js components and WebSocket functionality, contributing across system design, backend development, and frontend integration.",
      ],
      id: [
        "Mengembangkan aplikasi full stack untuk web dan Android menggunakan Next.js, JavaScript, Android Studio, Python, Flask, dan MySQL.",
        "Merancang database dan mengembangkan REST API menggunakan MySQL dan Flask untuk menghubungkan layanan backend dengan aplikasi web dan Android.",
        "Mengembangkan komponen Next.js reusable dan fungsionalitas WebSocket dalam perancangan sistem, pengembangan backend, dan integrasi frontend.",
      ],
    },
  },
  {
    type: "activity",
    current: false,
    period: { en: "Late 2023 - Early 2024", id: "Akhir 2023 - Awal 2024" },
    title: { en: "Mentorship Program", id: "Program Mentoring" },
    organization: { en: "College Mentorship", id: "Mentoring Perkuliahan" },
    location: { en: "Bekasi, Indonesia", id: "Bekasi, Indonesia" },
    gallery: [mentorshipImage.src],
    summary: { en: "Mentored around 10-12 students with their studies while developing communication, teaching, and time-management skills.", id: "Membimbing sekitar 10-12 siswa dalam studi mereka sambil mengembangkan kemampuan komunikasi, mengajar, dan manajemen waktu." },
    details: {
      en: [
        "Mentored around 10-12 students from my class or the year below, helping them understand topics and make progress with their studies.",
        "Prepared material in advance when teaching topics I had not fully learned myself, strengthening my own understanding in the process.",
        "Balanced mentoring with personal coursework while improving communication, teaching, and time-management skills.",
      ],
      id: [
        "Membimbing sekitar 10-12 siswa dari kelas atau angkatan di bawah saya, membantu mereka memahami materi dan berkembang dalam studi.",
        "Mempersiapkan materi terlebih dahulu ketika mengajarkan topik yang belum sepenuhnya saya kuasai, sekaligus memperkuat pemahaman saya sendiri.",
        "Menyeimbangkan kegiatan mentoring dengan perkuliahan sambil meningkatkan kemampuan komunikasi, mengajar, dan manajemen waktu.",
      ],
    },
  },
];
