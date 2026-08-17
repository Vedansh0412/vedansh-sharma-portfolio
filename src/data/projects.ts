export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
 {
    id: "ai-test-agent",
    title: "AI Test Agent",
    category: "AI Developer Tool",
    year: "2026",
    featured: true,

    description:
      "An AI-powered VS Code extension that monitors changes in a codebase and intelligently generates or updates unit tests based on the modified files and project-specific testing rules. The agent combines Git history, source-code changes and contextual instructions to reduce repetitive testing work and keep test coverage aligned with evolving code.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "VS Code API",
      "Git",
      "AI",
    ],
  },
  {
    id: "trialwyze",
    title: "TrialWyze",
    category: "Digital Agriculture",
    year: "2026",
    featured: true,

    description:
      "A modern agricultural trial management platform built to turn complex field-trial data into actionable insights. The platform brings experiments, plots, treatments, observations and yield data into a unified interface, enabling teams to track trial performance, compare results and generate data-driven reports across agricultural experiments.",

    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "REST APIs",
      "Jest",
    ],
  },
  {
    id: "mayo-clinic-strip-ai",
    title: "Mayo Clinic Strip AI",
    category: "AI / Medical Research",
    year: "2024",
    featured: true,

    description:
      "A deep-learning research project focused on differentiating acute ischemic stroke etiology subtypes from whole-slide digital pathology images. The system explored VGG-based convolutional architectures, including VGG-11, VGG-16 and a modified VGG-16 model, to investigate automated classification of complex pathological patterns at scale.",

    technologies: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "VGG",
      "Computer Vision",
    ],
  },
  {
    id: "datasilo",
    title: "DataSilo",
    category: "Agricultural Intelligence",
    year: "2025",

    description:
      "A data-driven platform for managing and analyzing agricultural datasets and experimental results. The application focuses on transforming large volumes of structured trial data into usable interfaces for researchers and agricultural teams, with robust frontend workflows, reusable components and automated testing supporting a reliable data experience.",

    technologies: [
      "React",
      "TypeScript",
      "Jest",
      "Material UI",
      "REST APIs",
    ],
  },
  {
    id: "mycar-genie",
    title: "MyCarGenie",
    category: "Automotive Platform",
    year: "2026",

    description:
      "A complete automotive service marketplace designed to simplify vehicle care through a single digital experience. The platform connects customers with services including detailing, ceramic coating, PPF, tinting, insurance and vehicle inspections, with a streamlined booking and checkout experience built around real-time service selection and pricing.",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "REST APIs",
    ],
  },

  

//   {
//     id: "tapdesk",
//     title: "TapDesk",
//     category: "Human–Computer Interaction",
//     year: "2026",

//     description:
//       "An experimental desktop interaction system that turns the surface around a laptop into an invisible control interface. Using the laptop microphone, TapDesk analyzes desk-tap sounds and their spatial characteristics to map physical tap locations to user-defined digital actions, creating a touchless interaction layer without additional hardware.",

//     technologies: [
//       "TypeScript",
//       "Node.js",
//       "Audio Processing",
//       "Desktop APIs",
//       "AI",
//     ],
//   },
];