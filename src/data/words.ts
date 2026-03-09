import { Difficulty, WordData } from '../types/game';

export const wordsData: Record<Difficulty, WordData[]> = {
  "fácil": [
    { word: "GATO", category: "Animales" },
    { word: "PERRO", category: "Animales" },
    { word: "CASA", category: "Hogar" },
    { word: "LAPIZ", category: "Escuela" },
    { word: "RELOJ", category: "Objetos" },
    { word: "PIZZA", category: "Comida" },
    { word: "TIGRE", category: "Animales" },
    { word: "ARBOL", category: "Naturaleza" },
    { word: "NUBE", category: "Naturaleza" },
    { word: "SILLA", category: "Hogar" },
    { word: "COCHE", category: "Vehículos" },
    { word: "LIBRO", category: "Objetos" }
  ],
  "media": [
    { word: "TECLADO", category: "Tecnología" },
    { word: "GUITARRA", category: "Instrumentos" },
    { word: "MANZANA", category: "Comida" },
    { word: "PLANETA", category: "Ciencia" },
    { word: "TORTUGA", category: "Animales" },
    { word: "ESCUELA", category: "Lugares" },
    { word: "CAMISA", category: "Ropa" },
    { word: "ZAPATOS", category: "Ropa" },
    { word: "HELADO", category: "Comida" },
    { word: "CELULAR", category: "Tecnología" },
    { word: "PINTURA", category: "Arte" },
    { word: "ESPEJO", category: "Hogar" }
  ],
  "difícil": [
    { word: "MURCIELAGO", category: "Animales" },
    { word: "COMPUTADORA", category: "Tecnología" },
    { word: "ASTRONAUTA", category: "Profesiones" },
    { word: "ESTETOSCOPIO", category: "Medicina" },
    { word: "KALEIDOSCOPIO", category: "Objetos" },
    { word: "REFRIGERADOR", category: "Electrodomésticos" },
    { word: "MOTOCICLETA", category: "Vehículos" },
    { word: "RINOCERONTE", category: "Animales" },
    { word: "UNIVERSIDAD", category: "Lugares" },
    { word: "ROMPECABEZAS", category: "Juegos" },
    { word: "FERROCARRIL", category: "Vehículos" },
    { word: "MICROONDAS", category: "Electrodomésticos" }
  ]
};
