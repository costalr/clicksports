// src/pages/Home.jsx

// Dados mockados dos eventos (simula API)
import { fakeEvents } from "../data/fakeEvents";

// Componente responsável por renderizar cada card
import EventCard from "../components/EventCard";
import EventsCarousel from "../components/EventsCarousel";

// Estilos específicos da página Home
import "./Home.css";

export default function Home() {
  return (
    // Elemento principal da página
    <main className="home">

      {/* =========================
          BLOCO EDITORIAL / HERO
          ========================= */}
        <section className="intro">
        <div className="intro-inner">
            <div className="intro-text">
            <h1>Desafios esportivos virtuais</h1>
            <p>
                Escolha um evento, complete o desafio no seu ritmo
                e receba seu kit em casa.
            </p>
            </div>
        </div>
        </section>


      {/* =========================
          CATÁLOGO DE EVENTOS
          ========================= */}
        <section className="events-section">
        <h2>Eventos disponíveis</h2>

        {/* Catálogo único */}
        <EventsCarousel events={fakeEvents} />
        </section>

    </main>
  );
}
