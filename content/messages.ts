export interface Message {
  id: string;
  author: string;
  date: string;
  message: string;
}

export const messages: Message[] = [
  {
    id: "1",
    author: "Felipe Andres Guerra Araya",
    date: "Febrero 2026",
    message:
      "Totita, recordaré tu sonrisa en cada referencia rebuscada, en cada OST o en cada juego que solíamos jugar. Tu risa ilumina mis días.",
  },
  {
    id: "2",
    author: "Gustavo Patricio Szigethi Araya",
    date: "Febrero 2026",
    message:
      "Gracias por ser mi amigo, por compartir las risas y los momentos inolvidables. Recordaré siempre tu personalidad única y tu espíritu alegre. Echaré de menos nuestras conversaciones de anime y debates de videojuegos. Tu amistad ha sido un regalo invaluable en mi vida. Descansa en paz, Totita.",
  },
];
