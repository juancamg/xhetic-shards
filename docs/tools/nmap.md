---
title: "Nmap"
description: "Guía teórica sobre la herramienta de escaneo Nmap"
---

# Exploración de Redes con Nmap

**Nmap** es una herramienta de código abierto que permite escanear redes para identificar hosts, puertos, servicios y sistemas operativos. En pruebas de penetración, se utiliza para recopilar información sobre objetivos, detectar vulnerabilidades y mapear la infraestructura de red. Este documento presenta una guía clara y técnica sobre su uso, enfocada en principiantes.

## Introducción a Nmap

**Nmap** (Network Mapper) es un programa que envía paquetes a hosts en una red y analiza las respuestas para obtener información. Sirve para descubrir dispositivos activos, puertos abiertos, servicios en ejecución y posibles puntos débiles. Es útil en auditorías de seguridad porque proporciona datos detallados que ayudan a planificar pruebas de penetración.

## Instalación de Nmap

Instalar **Nmap** depende del sistema operativo. El proceso es sencillo y asegura que la herramienta esté lista para usar.

- En **Linux** (Debian/Ubuntu), ejecutar:
  ```bash
  sudo apt-get install nmap
  ```
- En **Linux** (RedHat/CentOS), usar:
  ```bash
  sudo yum install nmap
  ```
- En **Windows**, descargar el instalador desde [Nmap Download](https://nmap.org/download.html).
- En **macOS**, instalar con:
  ```bash
  brew install nmap
  ```

La instalación permite ejecutar comandos básicos y avanzados, aunque algunos requieren privilegios de administrador.

## Funcionalidades Principales

**Nmap** ofrece varias capacidades para explorar redes. Cada función tiene un propósito específico en una prueba de penetración.

- **Detección de hosts**: Identifica dispositivos activos en la red.
- **Escaneo de puertos**: Muestra puertos abiertos, cerrados o filtrados.
- **Detección de servicios**: Revela servicios y versiones, como **Apache** o **SSH**.
- **Detección de sistemas operativos**: Estima el sistema operativo del objetivo.
- **Scripts NSE**: Ejecuta scripts para tareas avanzadas, como encontrar vulnerabilidades.

Estas funcionalidades hacen que **Nmap** sea versátil para analizar redes pequeñas o grandes.

## Comandos Básicos

Ejecutar **Nmap** requiere comandos específicos. La sintaxis general es:
```bash
nmap [opciones] [objetivo]
```

Algunos ejemplos comunes incluyen:

- Escanear un host:
  ```bash
  nmap 192.168.1.1
  ```
- Escanear una red:
  ```bash
  nmap 192.168.1.0/24
  ```
- Escanear puertos específicos:
  ```bash
  nmap -p 22,80,443 192.168.1.1
  ```

Estos comandos muestran información básica, como puertos abiertos y servicios.

## Tipos de Escaneo

**Nmap** soporta diferentes técnicas de escaneo. Cada una se adapta a necesidades específicas, como sigilo o rapidez.

- **Escaneo SYN** (`-sS`): Envía paquetes SYN sin completar conexiones. Es rápido y discreto, pero requiere privilegios.
  ```bash
  nmap -sS 192.168.1.1
  ```
- **Escaneo TCP** (`-sT`): Establece conexiones completas. No necesita privilegios, pero es más lento.
  ```bash
  nmap -sT 192.168.1.1
  ```
- **Escaneo UDP** (`-sU`): Busca servicios UDP, como **DNS** o **DHCP**.
  ```bash
  nmap -sU 192.168.1.1
  ```

Seleccionar el tipo correcto depende del objetivo y las restricciones de la red.

## Detección de Servicios

Identificar servicios y versiones es clave para encontrar vulnerabilidades. La opción `-sV` analiza los puertos abiertos y muestra detalles.

- Ejecutar:
  ```bash
  nmap -sV 192.168.1.1
  ```

Esto puede revelar, por ejemplo, que un servidor ejecuta **OpenSSH 3.9p1**, útil para buscar exploits conocidos.

## Detección de Sistemas Operativos

Estimar el sistema operativo ayuda a planificar ataques. La opción `-O` analiza respuestas para identificar el SO.

- Ejecutar:
  ```bash
  nmap -O 192.168.1.1
  ```

El resultado puede indicar el SO del objetivo, aunque no siempre es preciso y habrá que investigar más a fondo.

## Uso de Scripts NSE

El **Nmap Scripting Engine** (**NSE**) permite ejecutar scripts para tareas avanzadas. Los scripts se activan con `--script`.

- Ejemplo para detectar vulnerabilidades:
  ```bash
  nmap --script vuln 192.168.1.1
  ```
- Enumerar directorios web:
  ```bash
  nmap --script http-enum 192.168.1.1
  ```

Los scripts amplían las capacidades de **Nmap**, desde detectar configuraciones mal implementadas que exponen información hasta probar contraseñas con fuerza bruta.

## Guardado de Resultados

**Nmap** permite guardar los resultados para análisis posterior. Las opciones incluyen:

- Formato normal:
  ```bash
  nmap -oN output.txt 192.168.1.1
  ```
- Formato XML:
  ```bash
  nmap -oX output.xml 192.168.1.1
  ```

Esto facilita documentar y compartir hallazgos.

## Recursos Adicionales

Explorar más sobre **Nmap** mejora su uso. Algunos recursos útiles son:

- Sitio oficial: [Nmap](https://nmap.org/)
- Guía de referencia: [Nmap Manual](https://nmap.org/book/man.html)
- Libro oficial: [Nmap Network Scanning](https://nmap.org/book/)

Estos materiales ofrecen información detallada y ejemplos prácticos.