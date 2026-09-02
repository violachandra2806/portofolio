import project1_1 from "../src/assets/project1_1.svg";
import project1_2 from "../src/assets/project1_2.svg";
import project2_1 from "../src/assets/project2_1.svg";
import project2_2 from "../src/assets/project2_2.svg";
import project3_1 from "../src/assets/project3_1.svg";

export const projectData = {
  en: [
    {
      title: "Productivity Dashboard",
      description: "Built a business analytics dashboard used by teams to track operations, automate updates, and improve visibility across workstreams.",
      tags: ["React", "Node", "Charts"],
      gallery: [project1_1, project1_2],
      details: [
        {
          title: "Challenge",
          text: "The product needed to surface operational insight without overwhelming the team with noisy reports or fragmented data.",
        },
        {
          title: "Solution",
          text: "I designed a clean analytics interface with clear KPI summaries, real-time signal visibility, and simplified reporting flows for business teams.",
        },
      ],
    },
    {
      title: "Marketplace Platform",
      description: "Designed and deployed an e-commerce experience focused on speed, conversion, and minimal friction between user search and checkout.",
      tags: ["Next.js", "Stripe", "UX"],
      gallery: [project2_1, project2_2],
      details: [
        {
          title: "Challenge",
          text: "The shopping flow needed to feel fast and premium while minimizing hesitation at the final conversion points.",
        },
        {
          title: "Solution",
          text: "I optimized the storefront experience with a streamlined product journey, polished conversion states, and a cleaner interaction model for discovery and checkout.",
        },
      ],
    },
    {
      title: "Internal Workflow Tool",
      description: "Created a clean workflow management interface that helped teams reduce repetitive tasks and centralize operational information.",
      tags: ["TypeScript", "API", "Design"],
      gallery: [project3_1],
      details: [
        {
          title: "Challenge",
          text: "Internal operations were scattered across disconnected tools and repetitive processes that slowed delivery.",
        },
        {
          title: "Solution",
          text: "I consolidated team workflows into a single interface, improving transparency and reducing friction for day-to-day coordination.",
        },
      ],
    },
  ],
  id: [
    {
      title: "Productivity Dashboard",
      description: "Membangun dashboard analitik bisnis yang digunakan tim untuk melacak operasi, memperbarui informasi, dan meningkatkan visibilitas lintas pekerjaan.",
      tags: ["React", "Node", "Charts"],
      gallery: [project1_1, project1_2],
      details: [
        {
          title: "Tantangan",
          text: "Produk ini perlu menampilkan insight operasional tanpa membebani tim dengan laporan yang terlalu ramai atau data yang terfragmentasi.",
        },
        {
          title: "Solusi",
          text: "Saya merancang antarmuka analitik yang bersih dengan ringkasan KPI, visibilitas sinyal real-time, dan alur pelaporan yang lebih sederhana untuk tim bisnis.",
        },
      ],
    },
    {
      title: "Marketplace Platform",
      description: "Merancang dan meluncurkan pengalaman e-commerce yang fokus pada kecepatan, konversi, dan hambatan minimal antara pencarian pengguna dan checkout.",
      tags: ["Next.js", "Stripe", "UX"],
      gallery: [project2_1, project2_2],
      details: [
        {
          title: "Tantangan",
          text: "Alur belanja perlu terasa cepat dan premium sambil meminimalkan keraguan pada titik konversi akhir.",
        },
        {
          title: "Solusi",
          text: "Saya mengoptimalkan pengalaman storefront dengan perjalanan produk yang lebih halus, state konversi yang lebih rapi, dan model interaksi yang lebih bersih untuk discovery dan checkout.",
        },
      ],
    },
    {
      title: "Internal Workflow Tool",
      description: "Membuat antarmuka manajemen workflow yang membantu tim mengurangi tugas berulang dan memusatkan informasi operasional.",
      tags: ["TypeScript", "API", "Design"],
      gallery: [project3_1],
      details: [
        {
          title: "Tantangan",
          text: "Operasional internal tersebar di banyak alat yang tidak terhubung dan proses berulang yang memperlambat eksekusi.",
        },
        {
          title: "Solusi",
          text: "Saya menggabungkan workflow tim ke dalam satu antarmuka yang lebih jelas, meningkatkan transparansi, dan mengurangi hambatan dalam koordinasi harian.",
        },
      ],
    },
  ],
};
