export interface Screenshot {
  id: string;
  image: string;
  sender: string;
  description?: string;
  date?: string;
}

export const screenshots: Screenshot[] = [
  {
    id: "1",
    image: "/screenshots/1.png",
    sender: "Yiyo Garay Tello",
    description: "Fue cuando tuve una crisis depresiva a principios del 2024, su apoyo fue muy importante pa mi pq igual traté de desvivirme por esas fechas y me da entre pena y rabia no haber estado de esa forma con él cuando lo necesitaba.",
    date: "Febrero 2025",
  },
  {
    id: "2",
    image: "/screenshots/2.png",
    sender: "Gustavo Szigethi (Guetti)",
    description: "Poco antes del momento en que tuvimos que despedirnos, me escribió esto. Me hizo sentir que nuestra amistad era algo especial, podía sentir su emoción en sus palabras.",
    date: "Febrero 2025",
  },
];
