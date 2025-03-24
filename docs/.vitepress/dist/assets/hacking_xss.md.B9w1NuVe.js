import{_ as s,c as i,o as e,ae as t}from"./chunks/framework.Dh1jimFm.js";const k=JSON.parse('{"title":"Cross-Site Scripting (XSS)","description":"","frontmatter":{},"headers":[],"relativePath":"hacking/xss.md","filePath":"hacking/xss.md"}'),n={name:"hacking/xss.md"};function r(o,a,l,c,p,h){return e(),i("div",null,a[0]||(a[0]=[t('<h1 id="cross-site-scripting-xss" tabindex="-1">Cross-Site Scripting (XSS) <a class="header-anchor" href="#cross-site-scripting-xss" aria-label="Permalink to &quot;Cross-Site Scripting (XSS)&quot;">​</a></h1><h2 id="¿que-es-xss" tabindex="-1">¿Qué es XSS? <a class="header-anchor" href="#¿que-es-xss" aria-label="Permalink to &quot;¿Qué es XSS?&quot;">​</a></h2><p>XSS es una vulnerabilidad que permite a atacantes inyectar scripts maliciosos en páginas web vistas por otros usuarios.</p><h2 id="¿para-que-sirve" tabindex="-1">¿Para qué sirve? <a class="header-anchor" href="#¿para-que-sirve" aria-label="Permalink to &quot;¿Para qué sirve?&quot;">​</a></h2><p>Se usa para robar cookies, redirigir usuarios, o mostrar contenido malicioso.</p><h2 id="tipos-de-xss" tabindex="-1">Tipos de XSS <a class="header-anchor" href="#tipos-de-xss" aria-label="Permalink to &quot;Tipos de XSS&quot;">​</a></h2><ul><li><strong>Reflejado (Reflected):</strong> El script se refleja en la respuesta del servidor.</li><li><strong>Persistente (Stored):</strong> El script se almacena en el servidor (ej. en una base de datos).</li><li><strong>DOM-based:</strong> Se ejecuta en el cliente manipulando el DOM.</li></ul><h2 id="¿como-funciona" tabindex="-1">¿Cómo funciona? <a class="header-anchor" href="#¿como-funciona" aria-label="Permalink to &quot;¿Cómo funciona?&quot;">​</a></h2><p>Un atacante encuentra un campo de entrada (como un formulario) que no valida correctamente y envía algo como:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">&lt;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">script</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">&gt;</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">alert</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&#39;Hacked!&#39;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#9399B2;">;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">&lt;</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">/</span><span style="--shiki-light:#1E66F5;--shiki-dark:#89B4FA;">script</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">&gt;</span></span></code></pre></div>',10)]))}const u=s(n,[["render",r]]);export{k as __pageData,u as default};
