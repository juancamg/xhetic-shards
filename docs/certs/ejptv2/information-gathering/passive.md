# Recopilación Pasiva de Información

La Recopilación Pasiva de Información consiste en recolectar datos sobre un objetivo sin interactuar directamente con él, usando solo fuentes públicas para no alertarlo.
Es el primer paso en una prueba de penetración y permite construir una visión inicial del sistema, sitio web o entidad que se está analizando.


## ¿Qué buscamos?

Buscamos información pública que nos dé una visión general del objetivo. Esto puede incluir:

- **Direcciones IP**: Para ubicar el objetivo y su proveedor.
- **Directorios ocultos a motores de búsqueda**: Archivos o carpetas no indexadas pero accesibles.
- **Nombres**: De personas relacionadas (empleados, administradores, etc.).
- **Correos electrónicos**: Asociados al dominio o individuos clave.
- **Números de teléfono**: Útiles para ingeniería social.
- **Direcciones físicas**: Oficinas o sedes del objetivo.
- **Tecnologías web utilizadas**: Para detectar posibles vulnerabilidades.


## Encontrando Direcciones IP

Para obtener las direcciones IP de un dominio, se puede usar el comando `host` en la terminal. Al ejecutar:

```bash
host xhetic.com
```

El resultado muestra las IPs vinculadas al dominio. Si aparecen varias, puede indicar que el sitio utiliza proxies o firewalls, como Cloudflare, para protegerse. Esto da una pista inicial sobre su infraestructura.


## Archivos Públicos Relevantes

Algunos sitios dejan archivos públicos que revelan detalles sobre su estructura o contenido. Entre los más comunes están:

- **Robots.txt**: Indica qué partes del sitio no deben rastrearse por motores de búsqueda. A veces, expone directorios ocultos que no son visibles navegando.
- **Sitemap.xml**: Contiene una lista de URLs del sitio, útil para descubrir páginas no enlazadas directamente.

Estos archivos se encuentran escribiendo en el navegador algo como `xhetic.com/robots.txt` o `xhetic.com/sitemap.xml`. El resultado puede mostrar rutas o recursos que no aparecen en una búsqueda normal.


## Investigación de tecnologías

### Extensiones

Existen extensiones que identifican las tecnologías usadas por un sitio web. Por ejemplo:

- **BuiltWith**: Analiza el CMS (como WordPress), frameworks (como React), servidores (como Apache) y otros componentes.
- **Wappalyzer**: Detecta tecnologías en tiempo real, incluyendo sistemas, librerías y herramientas similares.

Estas se instalan en el navegador desde sus respectivas tiendas (Chrome o Firefox) y, al visitar un sitio como `xhetic.com`, generan una lista detallada de lo que se detecta. Esa información sirve para buscar vulnerabilidades conocidas más adelante.

### Comandos

Otra opción es el comando `whatweb` permite analizar tecnologías desde la terminal. Al ejecutar:

```bash
whatweb xhetic.com
```

Muestra detalles como el CMS, el servidor o los frameworks utilizados. Es una opción rápida para recolectar datos sin interacción directa.


## Informe Rápido

Para hacer un resumen rápido de un sitio, se puede usar [Netcraft](https://sitereport.netcraft.com/). Netcraft es una página que ofrece un informe gratis. Solo hay que escribir el dominio, como `xhetic.com`, y muestra detalles interesantes: los registros DNS, información sobre su seguridad y hasta si tiene vulnerabilidades conocidas, como SSLv3 o Heartbleed, que son fallos que podrían ser un problema. Es una forma fácil de tener una primera impresión sin instalar nada.


## Investigando DNS

### Con dnsrecon

El DNS contiene información valiosa sobre un dominio. El comando `dnsrecon` ayuda a explorarlo. Al usar:

```bash
dnsrecon -d xhetic.com
```

Devuelve subdominios, registros DNS y datos sobre su organización. Es una manera efectiva de mapear la infraestructura.

### Con dnsdumpster.com

Otra opción es [dnsdumpster.com](https://dnsdumpster.com/), una herramienta en línea. Al ingresar un dominio, genera un mapa visual de subdominios y conexiones relacionadas, ofreciendo una vista clara de la red.


## Detección de WAFs

Algunos sitios están protegidos por un Web Application Firewall (WAF). Para detectarlo, existe `wafw00f`, disponible en [GitHub](https://github.com/EnableSecurity/wafw00f). Con el comando:

```bash
wafw00f xhetic.com -a
```

Indica si hay un WAF (como Cloudflare o Akamai) y su tipo. Esto ayuda a entender las defensas del objetivo.


## Buscando Subdominios con Sublist3r

Los subdominios, como `shadows.xhetic.com`, pueden revelar más sobre un sitio. **Sublist3r**, disponible en [GitHub](https://github.com/aboul3la/Sublist3r), los encuentra usando fuentes públicas. Al ejecutar:

```bash
sublist3r -d xhetic.com
```

Lista todos los subdominios detectados, ampliando el alcance de la investigación.


## Trucos con Google Dorks

Las consultas avanzadas en Google, conocidas como "dorks", permiten hallar datos expuestos. Ejemplos están en [Exploit-DB](https://www.exploit-db.com/google-hacking-database), como `site:xhetic.com filetype:pdf`. Esto puede descubrir archivos o páginas que el sitio no pretendía mostrar.


## Recolectando Correos

**TheHarvester** es una herramienta para encontrar correos, nombres y subdominios desde fuentes públicas. Al usar:

```bash
theharvester -d xhetic.com -b all
```

Recolecta información como `admin@xhetic.com` de múltiples plataformas. También existe [Spyse](https://spyse.com/), una web que ofrece datos adicionales, como certificados SSL.


## Contraseñas Filtradas

Para verificar si los correos encontrados están comprometidos, se puede usar [Have I Been Pwned](https://haveibeenpwned.com/). Al ingresar un correo, indica si aparece en filtraciones conocidas. Además, sitios como [pentester.com](https://pentester.com/) ofrecen información adicional.