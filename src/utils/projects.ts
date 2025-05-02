import type { Project } from "../types";


import { TAGS } from "./tags";

export const PROJECTS: Project[] = [
  {
    title: "Rediseño página web Conresa Tours",
    description:
      "Sitio web para empresa de turismo. Desarrollado con Astro y Tailwind CSS, optimizado para SEO y rendimiento. Incluye diseño responsivo, así como múltiples secciones mostrando contenido manejado en un json.",
    date: "Febrero - Marzo 2025",
    image: "/img/conresa-web.webp",
    link: "https://conresatours.com.pe",
    repo: "https://github.com/jsalvador-zsh/web-conresa",
    tags: [TAGS.Astro, TAGS.Tailwind, TAGS.TypeScript, TAGS.Json],
  },
  {
    title: "Rediseño página web CYAM S.R.L.",
    description:
      "Sitio web para empresa que brinda servicios de calibración y mantenimiento de equipos de medición. Desarrollado con Astro para sitios web estaticos, optimizado para SEO y rendimiento. Incluye diseño responsivo.",
    date: "Marzo 2025",
    image: "/img/cyam-web.webp",
    link: "https://cyamsrl.com",
    repo: "https://github.com/jsalvador-zsh/cyam-web",
    tags: [TAGS.Astro, TAGS.Tailwind],
  },
  {
    title: "Odoo v13 Plastigesa E.I.R.L.",
    description:
      "Implementación de Odoo v13 con facturación electrónica (SUNAT), gestión de ventas, producción, personal, mantenimiento, inventarios y dashboards personalizados.",
    date: "Abril - Septiembre 2024",
    image: "/img/plastigesa-odoo.webp",
    link: "/project-info",
    repo: "https://github.com/jsalvador-zsh/powerpallet",
    tags: [TAGS.Python, TAGS.Docker, TAGS.Ubuntu, TAGS.Nginx, TAGS.Odoo, TAGS.Bootstrap],
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
