// src/data/fakeEvents.js

export const fakeEvents = [
  {
    id: 1,
    slug: "desafio-virtual-das-flores-girassol",
    title: "Desafio Virtual das Flores – Girassol",

    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/960px-Sunflower_sky_backdrop.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sunflowers_field.jpg/960px-Sunflowers_field.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sunflower_closeup.jpg/960px-Sunflower_closeup.jpg",
      "https://images.unsplash.com/photo-1508747703725-719777637510"
    ],

    price: 52.9,
    oldPrice: 70.0,
    discount: 24,

    rating: 4,
    reviewsCount: 12,

    options: null,

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
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/NS_Aparecida.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Basilica_Nossa_Senhora_Aparecida.jpg/960px-Basilica_Nossa_Senhora_Aparecida.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Basilica_Aparecida_interior.jpg/960px-Basilica_Aparecida_interior.jpg",
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
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
      "https://exmedsaude.com.br/wp-content/uploads/2023/05/65-Autismo-que-e-quais-os-sintomas-e-os-tratamentos.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Autism_awareness_ribbon.png/512px-Autism_awareness_ribbon.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Autism_Speaks_logo.svg/512px-Autism_Speaks_logo.svg.png",
      "https://images.unsplash.com/photo-1590086782792-42dd2350140d"
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
