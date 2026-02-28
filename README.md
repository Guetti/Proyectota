# Memorial Web – Tota

## 🌱 Motivo del proyecto

Este proyecto nace como una iniciativa colectiva para crear un **sitio web memorial** en honor a nuestro amigo Tota.  
El objetivo principal es construir un espacio digital respetuoso, sobrio y duradero, donde podamos:

- Recordar su vida, su historia y los momentos que compartimos.
- Reunir fotografías, recuerdos y mensajes significativos.
- Dejar un testimonio que pueda mantenerse en el tiempo.
- Trabajar juntos, de forma colaborativa, tomando decisiones en grupo.

Este no es un proyecto comercial ni técnico en su esencia, sino un homenaje construido con cuidado, respeto y cariño.

---

## 🎯 Objetivos del sitio

- Crear un memorial accesible desde cualquier lugar.
- Mantener una estética personalizada y respetuosa.
- Facilitar la colaboración entre quienes participamos del proyecto.
- Permitir que el sitio crezca con el tiempo, si así lo decidimos.

---

## 🧭 Alcance inicial

En esta primera etapa, el sitio incluirá:

- Página de inicio con presentación y mensaje central.
- Sección biográfica o línea de vida.
- Galería de fotografías.
- Sección de capturas de pantalla (recortes de conversaciones).
- Sección de recuerdos o mensajes.
- Información de contacto o créditos del proyecto.

Las funcionalidades adicionales se decidirán de forma grupal.

---

## 🛠️ Tecnologías

- **Frontend:** Next.js (React)
- **Estilos:** Tailwind CSS
- **Hosting:** Vercel
- **Dominio:** Ya adquirido (tota.cl por Denis Miranda Jauregui)

---

## 📋 Lista de tareas

### Organización y contenido
- [x] Definir el nombre final del sitio (tota.cl).
- [x] Definir el tono del memorial (alegre)
- [ ] Reunir textos base (biografía, descripciones, frases).
- [x] Seleccionar fotografías iniciales.
- [x] Definir quién puede aportar contenido.

### Diseño
- [x] Definir paleta de colores.
- [x] Elegir tipografía principal.
- [x] Definir estructura de navegación.
- [x] Diseñar layout general.

### Desarrollo
- [x] Inicializar el proyecto.
- [x] Configurar estilos base.
- [x] Crear layout general.
- [x] Implementar página de inicio (Hero Section).
- [x] Implementar galería de fotos (Media Section).
- [x] Implementar sección de capturas de pantalla (Screenshots Section).
- [x] Implementar sección de mensajes (Messages Section).
- [ ] Optimizar versión móvil.

### Publicación
- [x] Configurar dominio.
- [x] Definir hosting.
- [x] Revisión general de contenido.
- [x] Publicación del sitio.


---

## 📝 Cómo agregar contenido

### Agregar mensajes

Edita el archivo `content/messages.ts` y agrega un nuevo objeto al array:

```typescript
{
  id: "3", // ID único, incrementar según el último
  author: "Nombre Completo",
  date: "Febrero 2026",
  message: "Tu mensaje de recuerdo aquí...",
},
```

### Agregar imágenes a la galería

1. Coloca la imagen en `public/images/media/` (ejemplo: `6.png`)
2. Edita el archivo `content/images.ts` y agrega:

```typescript
{
  id: "6", // ID único
  title: "Título de la imagen",
  message: "Descripción breve de la imagen",
  src: "/images/media/6.png",
  cols: 1, // Columnas que ocupa (1-3)
  rows: 2, // Filas que ocupa (1-5)
},
```

### Agregar capturas de pantalla

1. Coloca la captura en `public/screenshots/` (ejemplo: `3.png`)
2. Edita el archivo `content/screenshots.ts` y agrega:

```typescript
{
  id: "3", // ID único
  image: "/screenshots/3.png",
  sender: "Nombre de quien envía",
  description: "Contexto o descripción de la captura",
  date: "Febrero 2025", // Opcional
},
```

> **Nota:** Las capturas se pueden ampliar haciendo clic en ellas para leer mejor el texto.

---

## 🤝 Forma de trabajo

- Todas las decisiones importantes se discutirán en grupo.
- Se prioriza el respeto y el consenso.
- Los cambios significativos deben comentarse antes de integrarse.
- No hay jerarquías técnicas: todas las opiniones importan.

---

## 💙 Nota final

Este proyecto existe gracias a todos nosotros.  
Cada aporte, por pequeño que parezca, ayuda a construir algo significativo y duradero.

Gracias por ser parte de esto.
