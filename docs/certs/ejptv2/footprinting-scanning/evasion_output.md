
# Evasion, Scan Performance & Output

En esta entrada, exploraremos técnicas avanzadas para evadir sistemas de seguridad como firewalls e IDS (Intrusion Detection Systems), optimizar el rendimiento de los escaneos con Nmap y gestionar los resultados mediante diferentes formatos de salida. Estas prácticas son esenciales para realizar pruebas de penetración (pentesting) de manera efectiva y sigilosa.

## Firewall Detection & IDS Evasion

Los firewalls y los sistemas de detección de intrusos (IDS) son barreras comunes en redes objetivo. Comprender cómo detectarlos y evadirlos es clave para un escaneo exitoso.

### Detección de Firewalls
Un puerto en estado **filtered** indica la presencia de un firewall que bloquea el acceso. Esto se diferencia de un puerto **closed** (cerrado, sin servicio activo) o **open** (abierto, con un servicio escuchando). Herramientas como Nmap pueden identificar estos estados durante un escaneo.

### Evadir IDS con Fragmentación
Para evadir sistemas IDS, se puede emplear la **fragmentación de paquetes** usando la opción `-f`. Esto divide los paquetes en fragmentos más pequeños, lo que dificulta su detección por parte de sistemas que buscan patrones de escaneo estándar. 

Además, la opción `--mtu` permite especificar el tamaño máximo de cada fragmento (en bytes, múltiplo de 8), ofreciendo un control más granular sobre la fragmentación.

Ejemplo:
```bash
nmap -Pn -sS -sV -p80,445,3389 -f --mtu 24 10.2.21.189
```
Este comando fragmenta los paquetes con un MTU de 24 bytes, lo que puede ayudar a evadir ciertos sistemas de detección.

Para un control más preciso, se puede especificar el tamaño de los paquetes con `--data-length`. Por ejemplo:
```bash
nmap -Pn -sS -sV -p445,3389 -f --data-length 200 10.2.21.189
```
Aquí, se añaden **200 bytes de datos aleatorios** a los paquetes, alterando su tamaño para despistar a firewalls y IDS.

### Spoofing de Direcciones IP
El **spoofing** permite suplantar direcciones IP para ocultar el origen del escaneo. La opción `-D` de Nmap especifica una o más direcciones IP falsas. Por ejemplo:
```bash
nmap -Pn -sS -sV -p445,3389 -f --data-length 200 -D 10.10.41.1 10.2.21.189
```
En este caso, la dirección 10.10.41.1 (que podría ser una dirección de broadcast o cualquier otra) se usa como señuelo. Se pueden incluir múltiples direcciones separadas por comas.

Otra técnica es simular que el tráfico proviene de un puerto específico, como el 53 (DNS), con la opción `-g`:
```bash
nmap -Pn -sS -sV -p445,3389 -g 53 10.2.21.189
```
Esto hace que el tráfico parezca originarse en el puerto 53, lo que puede engañar a sistemas que permiten tráfico DNS.

## Optimizing Nmap Scans

Optimizar los escaneos de Nmap es crucial para equilibrar velocidad, sigilo y precisión, especialmente cuando se enfrentan sistemas de detección avanzados.

### Plantillas de Temporización
Nmap ofrece plantillas de temporización con la opción `-T`, que controlan la velocidad del escaneo. La siguiente tabla resume las opciones disponibles:

| Plantilla | Nombre       | Descripción                                   |
|-----------|--------------|-----------------------------------------------|
| T0        | Paranoid     | Muy lento, ideal para máxima evasión         |
| T1        | Sneaky       | Sigiloso, para evitar detección              |
| T2        | Polite       | Cortés, reduce impacto en la red             |
| T3        | Normal       | Predeterminado, equilibrado                  |
| T4        | Aggressive   | Rápido, para redes estables                  |
| T5        | Insane       | Muy rápido, puede ser detectado              |

Ejemplo:
```bash
nmap -sS -T1 10.2.21.189
```
Este comando usa la plantilla Sneaky para un escaneo sigiloso.

### Retraso entre Paquetes
Para que el tráfico parezca más natural y evada sistemas de detección, se puede añadir un retraso entre paquetes con `--scan-delay`. Por ejemplo:
```bash
nmap -sS --scan-delay 15s 10.2.21.189
```
Aquí, cada paquete se envía con un intervalo de 15 segundos, simulando tráfico menos sospechoso.

### Tiempo Máximo por Host
La opción `--host-timeout` permite establecer un tiempo máximo para escanear un host, evitando que el proceso se atasque en objetivos lentos o no responsivos. Por ejemplo:
```bash
nmap -sS --host-timeout 30m 10.2.21.189
```
Este comando limita el escaneo a 30 minutos por host, descartando el objetivo si no responde en ese tiempo.

## Nmap Output Formats

Guardar los resultados de los escaneos es fundamental para documentar el progreso, analizar datos y planificar próximas fases del pentesting. Nmap ofrece varios formatos de salida:

- **-oN**: Genera un archivo con el mismo formato que la salida en terminal.
  ```bash
  nmap -sS -oN scan_results.txt 10.2.21.189
  ```

- **-oX**: Produce un archivo en formato XML, ideal para importar resultados a herramientas como Metasploit.
  ```bash
  nmap -sS -oX scan_results.xml 10.2.21.189
  ```

- **-oG**: Crea un archivo en formato "grepeable", que permite manipular los datos con herramientas como `grep` para filtrar resultados.
  ```bash
  nmap -sS -oG scan_results.grep 10.2.21.189
  ```

### Recomendación
Es buena práctica guardar los resultados en múltiples formatos para diferentes propósitos. Por ejemplo, el formato XML es útil para integraciones con otras herramientas, mientras que el formato normal facilita la revisión manual.

## Aprender Más sobre Nmap

Para dominar estas técnicas y explorar todas las funcionalidades de Nmap, consulta esta guía detallada: [Guía Completa de Nmap](https://xhetic-shards.vercel.app/tools/nmap.html).

