// src/data/fakeEvents.js

export const fakeEvents = [
  {
    id: 1,
    slug: "desafio-virtual-das-flores-girassol",
    title: "Desafio Virtual das Flores – Girassol",

    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/960px-Sunflower_sky_backdrop.jpg"
    ],

    price: 52.9,
    oldPrice: 70.0,
    discount: 24,

    rating: 4,
    reviewsCount: 12,

    options: null, // sem camiseta

    description: [
      "Complete o desafio no seu ritmo, onde e quando quiser.",
      "Receba uma medalha exclusiva em casa.",
      "Desafio válido em todo o Brasil."
    ],

    reviews: [
      {
        author: "Ana Paula",
        rating: 5,
        comment: "Medalha linda, adorei!",
        date: "10/11/2025"
      }
    ]
  },

  {
    id: 2,
    slug: "desafio-virtual-nossa-senhora-aparecida",
    title: "Desafio Virtual Nossa Senhora Aparecida",

    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/NS_Aparecida.png"
    ],

    price: 64.9,
    oldPrice: null,
    discount: null,

    rating: 5,
    reviewsCount: 8,

    options: ["P", "M", "G", "GG"],

    description: [
      "Desafio especial em homenagem à Nossa Senhora Aparecida.",
      "Inclui medalha e camiseta temática."
    ],

    reviews: []
  },

  {
    id: 3,
    slug: "desafio-virtual-juntos-pelo-autismo-2025",
    title: "Desafio Virtual Juntos pelo Autismo 2025",

    images: [
      "https://exmedsaude.com.br/wp-content/uploads/2023/05/65-Autismo-que-e-quais-os-sintomas-e-os-tratamentos.jpg"
    ],

    price: 49.9,
    oldPrice: null,
    discount: null,

    rating: 5,
    reviewsCount: 15,

    options: null,

    description: [
      "Parte da renda é destinada a projetos de apoio ao autismo.",
      "Desafio simbólico e inclusivo."
    ],

    reviews: [
      {
        author: "Carlos",
        rating: 5,
        comment: "Iniciativa linda, fiquei emocionado.",
        date: "29/10/2025"
      }
    ]
  }
];
