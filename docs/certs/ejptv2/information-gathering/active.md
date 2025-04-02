# Recopilación Activa de Información

La recopilación activa de información implica interactuar directamente con el objetivo para obtener datos específicos durante una prueba de penetración. A diferencia de los métodos pasivos, este enfoque utiliza herramientas y comandos que envían solicitudes al sistema objetivo, como consultas DNS, escaneos de red o análisis de directorios. El propósito es identificar hosts, servicios, puertos abiertos y posibles puntos de entrada para evaluar la seguridad.


## ¿Qué buscamos?

La recopilación activa de información se enfoca en obtener datos específicos del objetivo mediante interacción directa. Los elementos clave que se buscan incluyen:

- **Direcciones IP**: Identifican los hosts activos en una red o asociados a un dominio, como `192.168.2.10` o `10.4.19.218`. Sirven para ubicar sistemas objetivo.
- **Subdominios**: Revelan hosts adicionales relacionados con un dominio principal, como `mail.xhetic.com` o `admin.zonetransfer.me`. Amplían el alcance del análisis.
- **Puertos abiertos**: Indican servicios activos en un host, como el puerto 80 (HTTP) o 22 (SSH). Permiten detectar puntos de entrada potenciales.
- **Directorios y archivos**: Muestran rutas accesibles en un servidor web, como `/admin` o `/backup`. Pueden exponer recursos sensibles o mal protegidos.
- **Servicios y versiones**: Detallan software en ejecución, como Apache 2.4 o OpenSSH 7.6. Facilitan la búsqueda de vulnerabilidades conocidas.


## Descubrimiento de Hosts

El descubrimiento de hosts permite identificar dispositivos activos en una red. Esto se logra enviando solicitudes y analizando las respuestas.

### Con nmap

El comando **nmap** se utiliza para detectar hosts en un rango de direcciones IP. Por ejemplo:

```bash
sudo nmap -sn 192.168.2.0/24
```

El parámetro `-sn` desactiva el escaneo de puertos y solo verifica qué hosts responden. En este caso, explora la subred `192.168.2.0/24` y lista los dispositivos activos. Es útil para mapear una red antes de un análisis más profundo.

### Con netdiscover

Otra herramienta, **netdiscover**, detecta hosts en una red local. Al ejecutar:

```bash
netdiscover -i eth0 -r 192.2.0.0/24
```

El parámetro `-i eth0` especifica la interfaz de red, y `-r` define el rango a escanear, como `192.2.0.0/24`. Muestra direcciones IP y MAC de los dispositivos encontrados, proporcionando una visión rápida de la red.


## Enumeración de DNS

La enumeración de DNS busca información sobre dominios y subdominios asociados al objetivo. Esto revela posibles puntos de acceso adicionales.

### Con dnsenum

El comando **dnsenum** recopila datos DNS de un dominio. Por ejemplo:

```bash
dnsenum zonetransfer.me
```

Muestra registros como subdominios (ej. `mail.zonetransfer.me`) y servidores de nombres. Es útil para identificar hosts relacionados con el dominio objetivo.

### Con dig

El comando **dig** permite realizar transferencias de zona DNS cuando están mal configuradas. Al ejecutar:

```bash
dig axfr @nsztm1.digi.ninja zonetransfer.me
```

El parámetro `axfr` solicita una transferencia completa de la zona desde el servidor `nsztm1.digi.ninja`. Si tiene éxito, proporciona una lista de todos los registros DNS del dominio `zonetransfer.me`, como subdominios y direcciones IP.

### Con fierce

La herramienta **fierce** realiza enumeración de subdominios. Por ejemplo:

```bash
fierce -dns hackersploit.org
```

El parámetro `-dns` indica el dominio objetivo. Busca subdominios como `admin.hackersploit.org` o `dev.hackersploit.org` mediante fuerza bruta y consultas DNS, ofreciendo una lista de hosts potenciales.


## Escaneo de Puertos

El escaneo de puertos identifica servicios activos en un host específico al verificar qué puertos están abiertos.

### Con nmap

El comando **nmap** analiza puertos en una dirección IP. Por ejemplo:

```bash
nmap -Pn -p- 10.4.19.218
```

El parámetro `-Pn` omite la verificación de host activo, y `-p-` escanea todos los puertos (1-65535) de `10.4.19.218`. Muestra puertos abiertos, como el 80 (HTTP) o 22 (SSH), y sus servicios asociados. Esto ayuda a detectar puntos de entrada vulnerables.


## Listado de Directorios

El listado de directorios busca rutas ocultas o accesibles en un sitio web, como paneles administrativos o archivos sensibles.

### Con dirb

La herramienta **dirb** explora directorios en un servidor web. Al ejecutar:

```bash
dirb https://target.ine.local/
```

Analiza la URL `https://target.ine.local/` y devuelve una lista de directorios o archivos disponibles, como `/admin` o `/backup`. Esto permite identificar recursos no protegidos que podrían ser explotados.