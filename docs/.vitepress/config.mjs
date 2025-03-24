import { defineConfig } from "vitepress";

export default defineConfig({
  title: "xhetic-shards",
  description: "Mi proyecto increíble sobre hacking y pentesting",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Hacking", link: "/hacking/xss" },
      { text: "Comandos", link: "/commands/nmap" },
    ],
    sidebar: {
      "/hacking/": [
        {
          text: "Técnicas de Hacking",
          items: [
            { text: "XSS", link: "/hacking/xss" },
            { text: "SQL Injection", link: "/hacking/sql-injection" },
            { text: "Phishing", link: "/hacking/phishing" },
          ],
        },
      ],
      "/commands/": [
        {
          text: "Herramientas y Comandos",
          items: [
            { text: "Nmap", link: "/commands/nmap" },
            { text: "John the Ripper", link: "/commands/john-the-ripper" },
            { text: "Metasploit", link: "/commands/metasploit" },
          ],
        },
      ],
    },
  },
});