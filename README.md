# SJO Coffee - Sitio web

Sitio web estatico para una cafeteria virtual. Funciona sin servidor: solo abres el archivo en el navegador.

## Archivos

- index.html - contenido y estructura del sitio
- styles.css - colores, tipografia y diseno
- script.js - menu movil y formulario de pedidos
- logo-warm.png - emblema circular (tonos calidos, el que aparece en el sitio)
- logo-original.png - version en tonos verdes del mismo emblema

## Verlo en tu computadora

Abre index.html con doble clic.

## Recibir pedidos por WhatsApp

1. Abre script.js.
2. Busca la linea WHATSAPP_NUMBER.
3. Escribe tu numero completo con codigo de pais, sin "+", espacios ni guiones.

Ejemplo:

    const WHATSAPP_NUMBER = '17875551234';

Mientras este vacio, el formulario prepara y copia el pedido para que lo envies manualmente.

## Personalizar

- Bebidas, textos y precios: index.html
- Colores y tipografia: seccion :root de styles.css
- Datos de contacto y horario: seccion CONTACTO de index.html
- Cambiar el emblema: reemplaza logo-warm.png conservando el mismo nombre

## Publicar

Sube index.html, styles.css, script.js y logo-warm.png (los cuatro en la misma carpeta) a cualquier servicio de alojamiento de sitios estaticos.
