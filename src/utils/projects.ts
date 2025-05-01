import type { Project } from "../types";


import { TAGS } from "./tags";

export const PROJECTS: Project[] = [
  {
    title: "Odoo v13 Plastigesa E.I.R.L.",
    description:
      "Implementación de Odoo v13 con facturación electrónica (SUNAT), gestión de ventas, producción, personal, mantenimiento, inventarios y dashboards personalizados.",
    date: "Abril - Septiembre 2024",
    image: "/img/plastigesa-odoo.webp",
    link: "/project-info",
    repo: "https://github.com/jsalvador-zsh/powerpallet",
    tags: [TAGS.Python, TAGS.Docker, TAGS.Ubuntu, TAGS.Nginx, TAGS.Odoo],
  },
  {
    title: "Odoo v17 Escuela de Derecho LP",
    description:
      "Odoo 17 en VPS con Nginx y Cloudflare. Desarrollo de módulos para gestión documental, alumnos, personal, gastos, publicidad y flujos internos.",
    date: "Mayo - Agosto 2024",
    image: "/img/lpderecho-odoo.webp",
    repo: "https://github.com/jsalvador-zsh/",
    tags: [TAGS.Python, TAGS.Docker, TAGS.Cloudflare, TAGS.Nginx, TAGS.Odoo],
  },
  {
    title: "Rediseño página web Plastigesa",
    description:
      "Sitio estático con Astro + Tailwind. Optimizado para SEO, rendimiento y visualmente atractivo.",
    date: "Abril 2024",
    image: "/img/plastigesa-web.webp",
    repo: "https://github.com/jsalvador-zsh/plastigesa-web",
    link: "https://plastigesa.com",
    tags: [TAGS.Astro, TAGS.Tailwind, TAGS.JavaScript],
  },
];
