# Hierro y Ceniza

Juego de lucha medieval de 16 bits para navegador. El archivo `index.html` contiene el juego completo y se puede abrir sin conexión en un navegador. El botón **Descargar** guarda una copia del mismo archivo.

## Publicar en GitHub Pages

1. Descomprimí el ZIP y subí su contenido a la raíz de un repositorio GitHub en la rama `main`. Conservá la carpeta oculta `.github` y el archivo `.github/workflows/pages.yml`. Podés usar GitHub Desktop, Git o crear ese archivo desde la web en la ruta indicada.
2. En **Settings → Pages → Build and deployment → Source**, elegí **GitHub Actions**.
3. En **Actions**, abrí **Publicar Hierro y Ceniza** y elegí **Run workflow** si el primer despliegue aún no se ejecutó.
4. Abrí la URL pública que muestra **Settings → Pages**. Compartí esa dirección por WhatsApp. El flujo publica `vista-previa.png` y escribe su URL absoluta en los metadatos Open Graph del sitio.

Si preferís publicar directamente desde una rama, reemplazá manualmente `./vista-previa.png` en la etiqueta `og:image` de `index.html` por la URL HTTPS pública de la imagen.

## Instalar y compartir

- Abrí el enlace público de GitHub Pages para instalar el juego en el celular. En Android, usá el botón **Instalar** si está disponible o abrí la opción de instalación del navegador. En iPhone, abrí el enlace en Safari y elegí **Compartir → Agregar a inicio**. Si aparece **Abrir como app web**, dejalo activado.
- La app instalada usa la imagen de portada como ícono. El servicio de caché habilita el juego sin conexión una vez que termine la primera carga en línea.
- El botón **Descargar** guarda un HTML autocontenido. Un archivo HTML local usa el ícono del sistema para ese tipo de archivo. El ícono personalizado de la pantalla de inicio corresponde a la app web instalada.
- La portada está integrada en el HTML. La tarjeta de WhatsApp usa la misma ilustración en `vista-previa.png` (1200 × 630 px). Compartí la URL pública del juego.

## Jugar

| Acción | J1 | J2 |
| --- | --- | --- |
| Movimiento, salto y agacharse | WASD | Flechas |
| Golpe débil, fuerte y patada | F, G, H | Num 1, Num 2, Num 3 |
| Especial | J | Num 0 |

La fila superior 1, 2, 3 y 0 también funciona para J2. Mantené la dirección opuesta al rival para bloquear. Para ataques bajos, agregá abajo. El especial también se activa pulsando abajo y después adelante con un golpe. La barra de furia completa potencia el siguiente especial. Enter confirma y Esc pausa.

En el teléfono, girá a horizontal y usá los botones superpuestos. En Versus, los de la izquierda corresponden a J1 y los de la derecha a J2. La opción de pantalla completa depende de lo que admita el navegador.
