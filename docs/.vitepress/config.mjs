import { defineConfig } from "vitepress";

export default defineConfig({
  title: "! xhetic .. /",
  description: "Mi bitácora pública sobre ciberseguridad y hacking ético",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' }],
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' }],
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
          text: "Vulnerabilidades y Técnicas",
          collapsed: true,
          items: [
            { text: "XSS", link: "/hacking/xss" },
            { text: "SQL Injection", link: "/hacking/sql-injection" },
            { text: "Reverse Shells", link: "/hacking/reverse-shells" },
            { text: "Privilege Escalation", link: "/hacking/privilege-escalation" },
          ],
        },
        {
          text: "Herramientas",
          collapsed: true,
          items: [
            { text: "Nmap", link: "/tools/nmap" },
            { text: "Mimikatz", link: "/tools/mimikatz" },
            { text: "Metasploit", link: "/tools/metasploit" },
          ],
        },
        {
          text: "CVEs",
          collapsed: true,
          items: [
            { text: "CVE-2017-0144 (EternalBlue)", link: "/cves/cve-2017-0144" },
            { text: "CVE-2021-44228 (Log4Shell)", link: "/cves/cve-2021-44228" },
          ],
        },
        {
          text: "Certificaciones",
          collapsed: true,
          items: [
            {
              text: "eJPTv2",
              collapsed: true,
              items: [
                { text: "Information Gathering", link: "/certs/ejptv2/information-gathering/introduction" },
                { text: "Footprinting & Scanning", link: "/certs/ejptv2/footprinting-scanning/introduction" },
              ],
            },
            {
              text: "OSCP",
              collapsed: true,
              items: [
                { text: "Tema1 OSCP", link: "/certs/oscp/tema1" },
              ],
            },
          ],
        },
        {
          text: "Glosario",
          collapsed: true,
          items: [
            { text: "ISP", link: "/glossary/ISP" },
            { text: "Payload", link: "/glossary/payload" },
            { text: "Exploit", link: "/glossary/exploit" },
            { text: "Zero-day", link: "/glossary/zero-day" },
          ],
        },
      ],
      '/hacking/': [
        {
          text: "Vulnerabilidades y Técnicas",
          collapsed: false,
          items: [
            { text: "XSS", link: "/hacking/xss" },
            { text: "SQL Injection", link: "/hacking/sql-injection" },
            { text: "Reverse Shells", link: "/hacking/reverse-shells" },
            { text: "Privilege Escalation", link: "/hacking/privilege-escalation" },
          ],
        },
      ],
      '/tools/': [
        {
          text: "Herramientas",
          collapsed: false,
          items: [
            { text: "Nmap", link: "/tools/nmap" },
            { text: "Mimikatz", link: "/tools/mimikatz" },
            { text: "Metasploit", link: "/tools/metasploit" },
          ],
        },
      ],
      '/cves/': [
        {
          text: "CVEs",
          collapsed: false,
          items: [
            { text: "CVE-2017-0144 (EternalBlue)", link: "/cves/cve-2017-0144" },
            { text: "CVE-2021-44228 (Log4Shell)", link: "/cves/cve-2021-44228" },
          ],
        },
      ],
      '/glossary/': [
        {
          text: "Glosario",
          collapsed: false,
          items: [
            { text: "ISP", link: "/glossary/ISP" },
            { text: "Payload", link: "/glossary/payload" },
            { text: "Exploit", link: "/glossary/exploit" },
            { text: "Zero-day", link: "/glossary/zero-day" },
          ],
        },
      ],
      '/certs/ejptv2/': [
        {
          text: "eJPT v2",
          collapsed: false,
          items: [
            {
              text: "Information Gathering",
              collapsed: true,
              items: [
                { text: "Introducción", link: "/certs/ejptv2/information-gathering/introduction" },
                { text: "Recolección Pasiva", link: "/certs/ejptv2/information-gathering/passive" },
                { text: "Recolección Activa", link: "/certs/ejptv2/information-gathering/active" },
              ],
            },
            { 
              text: "Footprinting & Scanning", link: "/certs/ejptv2/footprinting-scanning/introduction",
              collapsed: true,
              items: [
                { text: "Introducción", link: "/certs/ejptv2/footprinting-scanning/introduction" },
                { text: "Conceptos básicos redes", link: "/certs/ejptv2/footprinting-scanning/networking_primer" },
                { text: "Descubrimiento de Hosts", link: "/certs/ejptv2/footprinting-scanning/host_discovery" },
                { text: "Escaneo de Puertos", link: "/certs/ejptv2/footprinting-scanning/port_scanning" },
              ],
            }
          ],
        },
      ],
      '/certs/ejptv2/information-gathering/': [
        {
          text: "eJPT v2",
          collapsed: false,
          items: [
            {
              text: "Information Gathering",
              collapsed: false,
              items: [
                { text: "Introducción", link: "/certs/ejptv2/information-gathering/introduction" },
                { text: "Recolección Pasiva", link: "/certs/ejptv2/information-gathering/passive" },
                { text: "Recolección Activa", link: "/certs/ejptv2/information-gathering/active" },
              ],
            },
            { 
              text: "Footprinting & Scanning", link: "/certs/ejptv2/footprinting-scanning/introduction",
              collapsed: true,
              items: [
                { text: "Introducción", link: "/certs/ejptv2/footprinting-scanning/introduction" },
                { text: "Conceptos básicos redes", link: "/certs/ejptv2/footprinting-scanning/networking_primer" },
                { text: "Descubrimiento de Hosts", link: "/certs/ejptv2/footprinting-scanning/host_fiscovery" },
                { text: "Escaneo de Puertos", link: "/certs/ejptv2/footprinting-scanning/port_scanning" },
              ],
             }
          ],
        },
      ],
      '/certs/oscp/': [
        {
          text: "OSCP",
          collapsed: false,
          items: [
            { text: "Tema1 OSCP", link: "/certs/oscp/tema1" },
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