# Descubrimiento de Hosts (Host Discovery)

El descubrimiento de hosts es el proceso de identificar dispositivos activos en una red. A continuación, se describen las técnicas más comunes y su uso con Nmap.

## Técnicas de Descubrimiento
1. **Ping Sweeps (ICMP Echo Requests)**  
   - Envía peticiones ICMP Echo a un rango de IPs para detectar hosts activos.
   - Pros: Rápido y simple.
   - Contras: Muchos firewalls bloquean ICMP (ej. Windows Firewall).
   - Ejemplo:
     ```bash
     ping -c 5 10.2.31.121
     ```
     Resultado: Si no hay respuesta, el host puede estar offline o bloqueado.

2. **ARP Scanning**  
   - Usa solicitudes ARP para encontrar hosts en la misma red local.
   - Pros: Efectivo en redes locales, no bloqueado por firewalls IP.
   - Contras: Requiere estar en la misma subred.
   - Ejemplo: Nmap realiza ARP automáticamente en redes locales.

3. **TCP SYN Ping (Half-Open Scan)**  
   - Envía paquetes TCP SYN a un puerto (ej. 80) para verificar si el host está vivo.
   - Pros: Sigiloso (stealth), evita completar la conexión.
   - Ejemplo:
     ```bash
     nmap -sn -PS80 10.2.31.121
     ```

4. **UDP Ping**  
   - Envía paquetes UDP a puertos específicos para detectar hosts.
   - Pros: Útil cuando ICMP y TCP están bloqueados.
   - Contras: Menos confiable, depende de puertos abiertos.

5. **TCP ACK Ping y SYN-ACK Ping**  
   - Envía paquetes ACK o SYN-ACK y espera un RST como respuesta.
   - Pros: Puede evadir ciertas configuraciones de firewalls.

## Uso de Nmap para Host Discovery
- Comando básico:
  ```bash
  nmap -sn 10.10.49.0/24
  ```
  - `-sn`: Desactiva el escaneo de puertos, solo descubre hosts.
  - Resultado: Lista de IPs activas (ej. 10.10.49.1, 10.10.49.2).

- Ejemplo con TCP SYN:
  ```bash
  nmap -sn -PS21,22,25,80,445,3389 10.2.31.121
  ```
  - Prueba múltiples puertos comunes para maximizar detección.

## Interpretación de Resultados
- **Host is up**: El host está activo.
- **Host seems down**: Puede estar offline o bloqueando sondas. Usa `-Pn` para omitir esta verificación.
- Si no hay respuesta, considera firewalls o configuraciones de red.

Estas técnicas son el primer paso para mapear una red antes de pasar al escaneo de puertos.

## Aprender Más sobre Nmap

Para explorar el uso completo de Nmap y dominar sus funcionalidades, se puede consultar esta guía detallada: [Guía Completa de Nmap](https://xhetic-shards.vercel.app/tools/nmap.html).
