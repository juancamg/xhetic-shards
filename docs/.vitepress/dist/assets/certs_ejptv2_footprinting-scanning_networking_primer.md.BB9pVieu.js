import{_ as o,c as a,o as s,ag as n}from"./chunks/framework.DPDPlp3K.js";const m=JSON.parse('{"title":"Conceptos Básicos de Redes (Networking Primer)","description":"","frontmatter":{},"headers":[],"relativePath":"certs/ejptv2/footprinting-scanning/networking_primer.md","filePath":"certs/ejptv2/footprinting-scanning/networking_primer.md"}'),r={name:"certs/ejptv2/footprinting-scanning/networking_primer.md"};function i(t,e,c,l,d,p){return s(),a("div",null,e[0]||(e[0]=[n('<h1 id="conceptos-basicos-de-redes-networking-primer" tabindex="-1">Conceptos Básicos de Redes (Networking Primer) <a class="header-anchor" href="#conceptos-basicos-de-redes-networking-primer" aria-label="Permalink to &quot;Conceptos Básicos de Redes (Networking Primer)&quot;">​</a></h1><p>Entender cómo funcionan las redes es clave para realizar Footprinting y Scanning de manera efectiva. Esta sección presenta los fundamentos necesarios para interpretar los resultados de herramientas como Nmap y adaptar técnicas según las defensas del objetivo.</p><h2 id="modelo-osi-una-vision-general" tabindex="-1">Modelo OSI: Una Visión General <a class="header-anchor" href="#modelo-osi-una-vision-general" aria-label="Permalink to &quot;Modelo OSI: Una Visión General&quot;">​</a></h2><p>Las redes se organizan en capas según el modelo OSI (Open Systems Interconnection), que divide la comunicación en siete niveles: física, enlace de datos, red, transporte, sesión, presentación y aplicación. Para Footprinting y Scanning, las capas más relevantes son:</p><ul><li><strong>Capa de red</strong>: Maneja direcciones IP y protocolos como ICMP.</li><li><strong>Capa de transporte</strong>: Gestiona TCP y UDP para conexiones y transferencia de datos.</li><li><strong>Capa de aplicación</strong>: Incluye servicios como HTTP o FTP, que se detectan en escaneos.</li></ul><p>Este modelo ayuda a comprender cómo los paquetes viajan y cómo las herramientas interactúan con ellos.</p><h2 id="direcciones-ip-y-subredes" tabindex="-1">Direcciones IP y Subredes <a class="header-anchor" href="#direcciones-ip-y-subredes" aria-label="Permalink to &quot;Direcciones IP y Subredes&quot;">​</a></h2><p>Cada dispositivo en una red tiene una dirección IP única, como por ejemplo 10.2.31.121. Las subredes dividen lógicamente una red mediante una máscara, como 255.255.255.0 o su notación CIDR /24. Por ejemplo, la subred 10.10.0.0/18 incluye direcciones desde 10.10.1.1 hasta 10.10.254.254. Estas divisiones permiten a las herramientas de escaneo explorar rangos definidos para identificar dispositivos activos.</p><h2 id="protocolos-relevantes" tabindex="-1">Protocolos Relevantes <a class="header-anchor" href="#protocolos-relevantes" aria-label="Permalink to &quot;Protocolos Relevantes&quot;">​</a></h2><p>Los protocolos determinan cómo se envían y reciben datos en una red. A continuación, se describen los más importantes para Footprinting y Scanning:</p><h3 id="icmp-internet-control-message-protocol" tabindex="-1">ICMP (Internet Control Message Protocol) <a class="header-anchor" href="#icmp-internet-control-message-protocol" aria-label="Permalink to &quot;ICMP (Internet Control Message Protocol)&quot;">​</a></h3><p>ICMP se utiliza para diagnósticos y pruebas de conectividad. A través del comando <code>ping</code>, se envía un mensaje de tipo Echo Request (tipo 8) y se espera una respuesta Echo Reply (tipo 0). Si no hay respuesta, puede deberse a un firewall bloqueando ICMP o a que el host está desconectado. Sin embargo, su utilidad se ve limitada porque muchos sistemas, como Windows, bloquean ICMP por defecto.</p><h3 id="arp-address-resolution-protocol" tabindex="-1">ARP (Address Resolution Protocol) <a class="header-anchor" href="#arp-address-resolution-protocol" aria-label="Permalink to &quot;ARP (Address Resolution Protocol)&quot;">​</a></h3><p>ARP permite resolver direcciones IP a direcciones MAC en redes locales. Es especialmente útil dentro de una misma subred, ya que no depende de IP ni puede ser bloqueado por firewalls. Por ejemplo, Nmap lo emplea automáticamente al escanear una red local con el comando <code>nmap -sn 10.10.49.0/24</code>.</p><h3 id="tcp-transmission-control-protocol" tabindex="-1">TCP (Transmission Control Protocol) <a class="header-anchor" href="#tcp-transmission-control-protocol" aria-label="Permalink to &quot;TCP (Transmission Control Protocol)&quot;">​</a></h3><p>TCP es un protocolo confiable y orientado a conexión. Utiliza un proceso llamado &quot;three-way handshake&quot; compuesto por SYN, SYN-ACK y ACK para establecer comunicaciones. Durante un escaneo SYN Ping, se envía un paquete SYN a un puerto (por ejemplo, el 80) y se espera una respuesta SYN-ACK para confirmar la actividad del host (<code>nmap -sn -PS80 10.2.31.121</code>). En el escaneo de puertos, Nmap puede usar SYN Scan (<code>nmap -sS 10.4.24.205</code>) para enviar múltiples SYNs y analizar si los puertos están abiertos (respuesta SYN-ACK) o cerrados (respuesta RST), todo sin completar la conexión. Los puertos más comunes en estos análisis son el 21 (FTP), 22 (SSH), 80 (HTTP), 445 (SMB) y 3389 (RDP).</p><h3 id="udp-user-datagram-protocol" tabindex="-1">UDP (User Datagram Protocol) <a class="header-anchor" href="#udp-user-datagram-protocol" aria-label="Permalink to &quot;UDP (User Datagram Protocol)&quot;">​</a></h3><p>UDP, por su parte, es un protocolo sin conexión que ofrece rapidez a cambio de confiabilidad. Es común en servicios como DNS y SNMP. En el descubrimiento de hosts, se pueden enviar paquetes a puertos como el 53 para DNS y analizar la respuesta (<code>nmap -sn -PU53 10.2.31.121</code>). Aunque también es útil en escaneos de puertos (<code>nmap -sU 10.4.24.205</code>), su uso suele limitarse en fases iniciales debido a su lentitud y baja tasa de respuesta.</p><h2 id="firewalls-y-su-impacto" tabindex="-1">Firewalls y su Impacto <a class="header-anchor" href="#firewalls-y-su-impacto" aria-label="Permalink to &quot;Firewalls y su Impacto&quot;">​</a></h2><p>Los firewalls controlan el tráfico de red según reglas que pueden bloquear solicitudes como pings, SYN o UDP. Durante el descubrimiento de hosts, pueden impedir respuestas ICMP, haciendo que un host parezca inactivo cuando en realidad no lo está. En Windows, por ejemplo, las peticiones ICMP entrantes están bloqueadas por defecto.</p><p>En el escaneo de puertos, los resultados también se ven afectados. Si un puerto aparece como <em>filtered</em>, es probable que un firewall esté impidiendo la comunicación. En cambio, un puerto <em>closed</em> indica que no hay firewall interfiriendo, aunque tampoco hay un servicio escuchando. Para superar estas barreras, se puede emplear la opción <code>-Pn</code> en Nmap para asumir que el host está activo o probar con múltiples puertos (<code>nmap -PS21,22,80</code>).</p><h2 id="paquetes-y-su-rol" tabindex="-1">Paquetes y su Rol <a class="header-anchor" href="#paquetes-y-su-rol" aria-label="Permalink to &quot;Paquetes y su Rol&quot;">​</a></h2><ul><li><strong>Paquetes TCP</strong>: Incluyen banderas como SYN, ACK, RST. En un SYN Scan, un RST indica un puerto cerrado, mientras que un SYN-ACK señala un puerto abierto.</li><li><strong>Paquetes UDP</strong>: No usan banderas, por lo que un puerto abierto responde con datos del servicio, y un puerto cerrado puede no responder.</li><li><strong>Paquetes ICMP</strong>: Usados para verificar conectividad, pero su bloqueo por firewalls requiere alternativas como TCP o UDP.</li></ul><p>Estos conceptos permiten comprender cómo las herramientas envían paquetes y cómo las respuestas (o su ausencia) revelan información sobre la red objetivo.</p>',24)]))}const P=o(r,[["render",i]]);export{m as __pageData,P as default};
