import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/java.svg";
import Tools4 from "/assets/tools/springboot.svg";
import Tools6 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/github.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Version Control",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Backend Platform",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools14,
    nama: "HTML",
    ket: "Markup",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools15,
    nama: "CSS",
    ket: "Styling",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools3,
    nama: "Java",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools4,
    nama: "Spring Boot",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools18,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools19,
    nama: "MySQL",
    ket: "Database",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/blood-donor-finder.svg";
import Proyek2 from "/assets/proyek/skycast-weather-app.svg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Blood Donor Finder",
    subtitle:
      "Live blood donor search platform for finding donors by group and location.",
    fullDescription:
      "Blood Donor Finder is a React web application built to help users quickly locate blood donors based on blood group and area. The live version highlights clear filtering, responsive layout, and a practical user flow for urgent situations, showing my ability to build useful interfaces around a real community need.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://pradeep11022004.github.io/blood-donor-finder/",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Skycast Weather App",
    subtitle:
      "Live weather dashboard powered by OpenWeatherMap API with a simple, readable UI.",
    fullDescription:
      "Skycast Weather App is a JavaScript weather website that consumes the OpenWeatherMap API to deliver current conditions in an easy-to-read interface. The live deployment highlights my API integration workflow, front-end rendering, and focus on making data-driven features feel clean and accessible.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://pradeep11022004.github.io/skycast-weather-app/",
    dad: "200",
  },
];
