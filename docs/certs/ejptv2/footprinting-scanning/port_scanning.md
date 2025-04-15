# Escaneo de Puertos (Port Scanning)

El escaneo de puertos identifica puertos abiertos, servicios en ejecución y sistemas operativos en un host. Es una fase crítica para encontrar puntos de entrada.

## Técnicas de Escaneo
1. **SYN Scan (Half-Open)**  
   - Envía un paquete SYN y espera un SYN-ACK sin completar la conexión.
   - Pros: Rápido y sigiloso.
   - Ejemplo:
     ```bash
     nmap -sS 10.4.24.205
     ```

2. **Detección de Versiones y Servicios**  
   - Identifica versiones de servicios (ej. Apache 2.4.41).
   - Comando:
     ```bash
     nmap -sS -sV 10.4.24.205
     ```

3. **Detección de Sistema Operativo**  
   - Analiza respuestas TCP/IP para adivinar el SO.
   - Comando:
     ```bash
     nmap -sS -sV -O 10.4.24.205
     ```

4. **Uso de Scripts de Nmap**  
   - Ejecuta scripts para obtener más detalles (ej. vulnerabilidades).
   - Ejemplo:
     ```bash
     nmap -sS -sV --script=ftp-* 10.4.24.205
     ```

## Comandos Útiles
- Escaneo rápido (100 puertos comunes):
  ```bash
  nmap -Pn -F 10.4.24.205
  ```
- Escaneo completo con todo incluido:
  ```bash
  nmap -sS -A -p- -T4 192.155.17.3
  ```
  - `-A`: Incluye detección de SO, versiones y scripts.
  - `-p-`: Escanea todos los puertos.
  - `-T4`: Velocidad optimizada.

## Interpretación de Resultados
- **Open**: Puerto accesible, hay un servicio escuchando.
- **Closed**: Puerto cerrado, no hay servicio.
- **Filtered**: Firewall bloqueando el acceso.
  - En Windows, "filtered" suele indicar Windows Firewall activo.

## Consideraciones sobre Firewalls
- Los firewalls pueden ocultar puertos o bloquear escaneos.
- Usa `-Pn` para asumir que el host está activo y saltar el descubrimiento.

Con estas técnicas, puedes mapear servicios y preparar la siguiente fase del pentesting.

## Aprender Más sobre Nmap

Para explorar el uso completo de Nmap y dominar sus funcionalidades, se puede consultar esta guía detallada: [Guía Completa de Nmap](https://xhetic-shards.vercel.app/tools/nmap.html).