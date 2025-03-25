import { defineConfig } from "vitepress";

export default defineConfig({
  title: "! xhetic .. /",
  description: "Mi proyecto increíble sobre hacking y pentesting",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  lang: 'es-ES',
  themeConfig: {
    nav: [
      {
        text: 'Whoami',
        link: 'https://portfolio-juancamgs-projects.vercel.app/',
      },
      {
        text: 'Shadows',
        link: 'https://blog-beta-beryl-52.vercel.app/',
      },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar'
          },
          modal: {
            noResultsText: 'No se encontraron resultados para',
            resetButtonTitle: 'Restablecer búsqueda',
            footer: {
              selectText: 'Seleccionar',
              navigateText: 'Navegar',
              closeText: 'Cerrar'
            }
          }
        }
      }
    },
    sidebar: {
      '/': [
        {
          text: "Técnicas de Hacking",
          collapsed: true,
          items: [
            { text: "XSS", link: "/hacking/xss" },
            { text: "SQL Injection", link: "/hacking/sql-injection" },
            { text: "Phishing", link: "/hacking/phishing" },
          ],
        },
        {
          text: "Herramientas y Comandos",
          collapsed: true,
          items: [
            { text: "Nmap", link: "/commands/nmap" },
            { text: "John the Ripper", link: "/commands/john-the-ripper" },
            { text: "Metasploit", link: "/commands/metasploit" },
          ],
        },
        {
          text: "Guías Prácticas",
          collapsed: true,
          items: [
            { text: "Writeup: Explotando un Servidor", link: "/guides/server-exploit" },
            { text: "Tutorial: Configuración de Kali Linux", link: "/guides/kali-setup" },
          ],
        },
      ],
      '/hacking/': [
        {
          text: "Técnicas de Hacking",
          collapsed: false,
          items: [
            { text: "XSS", link: "/hacking/xss" },
            { text: "SQL Injection", link: "/hacking/sql-injection" },
            { text: "Phishing", link: "/hacking/phishing" },
          ],
        },
      ],
      '/commands/': [
        {
          text: "Herramientas y Comandos",
          collapsed: false,
          items: [
            { text: "Nmap", link: "/commands/nmap" },
            { text: "John the Ripper", link: "/commands/john-the-ripper" },
            { text: "Metasploit", link: "/commands/metasploit" },
          ],
        },
      ],
      '/guides/': [
        {
          text: "Guías Prácticas",
          collapsed: false,
          items: [
            { text: "Writeup: Explotando un Servidor", link: "/guides/server-exploit" },
            { text: "Tutorial: Configuración de Kali Linux", link: "/guides/kali-setup" },
          ],
        },
      ],
    },
    notFound: {
      title: 'PÁGINA NO ENCONTRADA',
      quote: '¡Te pasaste de curioso! Esta página está tan perdida que ni el creador sabe cómo has llegado aquí.',
      linkLabel: 'volver-al-inicio',
      linkText: 'Volver al Inicio',
      code: '404'
    },
    // Traducciones de los mensajes del tema
    outline: {
      label: 'En esta página'
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },
    darkModeSwitchLabel: 'Apariencia',
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
  },
});