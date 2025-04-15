# Conceptos Básicos de Redes (Networking Primer)

Entender cómo funcionan las redes es clave para realizar Footprinting y Scanning de manera efectiva. Esta sección presenta los fundamentos necesarios para interpretar los resultados de herramientas como Nmap y adaptar técnicas según las defensas del objetivo.

## Modelo OSI: Una Visión General
Las redes se organizan en capas según el modelo OSI (Open Systems Interconnection), que divide la comunicación en siete niveles: física, enlace de datos, red, transporte, sesión, presentación y aplicación. Para Footprinting y Scanning, las capas más relevantes son:
- **Capa de red**: Maneja direcciones IP y protocolos como ICMP.
- **Capa de transporte**: Gestiona TCP y UDP para conexiones y transferencia de datos.
- **Capa de aplicación**: Incluye servicios como HTTP o FTP, que se detectan en escaneos.

Este modelo ayuda a comprender cómo los paquetes viajan y cómo las herramientas interactúan con ellos.

## Direcciones IP y Subredes
Cada dispositivo en una red tiene una dirección IP única, como por ejemplo 10.2.31.121. Las subredes dividen lógicamente una red mediante una máscara, como 255.255.255.0 o su notación CIDR /24. Por ejemplo, la subred 10.10.0.0/18 incluye direcciones desde 10.10.1.1 hasta 10.10.254.254. Estas divisiones permiten a las herramientas de escaneo explorar rangos definidos para identificar dispositivos activos.

## Protocolos Relevantes
Los protocolos determinan cómo se envían y reciben datos en una red. A continuación, se describen los más importantes para Footprinting y Scanning:

### ICMP (Internet Control Message Protocol)
ICMP se utiliza para diagnósticos y pruebas de conectividad. A través del comando `ping`, se envía un mensaje de tipo Echo Request (tipo 8) y se espera una respuesta Echo Reply (tipo 0). Si no hay respuesta, puede deberse a un firewall bloqueando ICMP o a que el host está desconectado. Sin embargo, su utilidad se ve limitada porque muchos sistemas, como Windows, bloquean ICMP por defecto.

### ARP (Address Resolution Protocol)
ARP permite resolver direcciones IP a direcciones MAC en redes locales. Es especialmente útil dentro de una misma subred, ya que no depende de IP ni puede ser bloqueado por firewalls. Por ejemplo, Nmap lo emplea automáticamente al escanear una red local con el comando `nmap -sn 10.10.49.0/24`.

### TCP (Transmission Control Protocol)
TCP es un protocolo confiable y orientado a conexión. Utiliza un proceso llamado "three-way handshake" compuesto por SYN, SYN-ACK y ACK para establecer comunicaciones. Durante un escaneo SYN Ping, se envía un paquete SYN a un puerto (por ejemplo, el 80) y se espera una respuesta SYN-ACK para confirmar la actividad del host (`nmap -sn -PS80 10.2.31.121`). En el escaneo de puertos, Nmap puede usar SYN Scan (`nmap -sS 10.4.24.205`) para enviar múltiples SYNs y analizar si los puertos están abiertos (respuesta SYN-ACK) o cerrados (respuesta RST), todo sin completar la conexión. Los puertos más comunes en estos análisis son el 21 (FTP), 22 (SSH), 80 (HTTP), 445 (SMB) y 3389 (RDP).

### UDP (User Datagram Protocol)
UDP, por su parte, es un protocolo sin conexión que ofrece rapidez a cambio de confiabilidad. Es común en servicios como DNS y SNMP. En el descubrimiento de hosts, se pueden enviar paquetes a puertos como el 53 para DNS y analizar la respuesta (`nmap -sn -PU53 10.2.31.121`). Aunque también es útil en escaneos de puertos (`nmap -sU 10.4.24.205`), su uso suele limitarse en fases iniciales debido a su lentitud y baja tasa de respuesta.


## Firewalls y su Impacto
Los firewalls controlan el tráfico de red según reglas que pueden bloquear solicitudes como pings, SYN o UDP. Durante el descubrimiento de hosts, pueden impedir respuestas ICMP, haciendo que un host parezca inactivo cuando en realidad no lo está. En Windows, por ejemplo, las peticiones ICMP entrantes están bloqueadas por defecto.

En el escaneo de puertos, los resultados también se ven afectados. Si un puerto aparece como *filtered*, es probable que un firewall esté impidiendo la comunicación. En cambio, un puerto *closed* indica que no hay firewall interfiriendo, aunque tampoco hay un servicio escuchando. Para superar estas barreras, se puede emplear la opción `-Pn` en Nmap para asumir que el host está activo o probar con múltiples puertos (`nmap -PS21,22,80`).


## Paquetes y su Rol
- **Paquetes TCP**: Incluyen banderas como SYN, ACK, RST. En un SYN Scan, un RST indica un puerto cerrado, mientras que un SYN-ACK señala un puerto abierto.
- **Paquetes UDP**: No usan banderas, por lo que un puerto abierto responde con datos del servicio, y un puerto cerrado puede no responder.
- **Paquetes ICMP**: Usados para verificar conectividad, pero su bloqueo por firewalls requiere alternativas como TCP o UDP.

Estos conceptos permiten comprender cómo las herramientas envían paquetes y cómo las respuestas (o su ausencia) revelan información sobre la red objetivo.