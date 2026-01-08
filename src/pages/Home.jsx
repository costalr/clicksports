// src/pages/Home.jsx
import { useState } from "react";

// Dados mockados
import { fakeEvents } from "../data/fakeEvents";

// Componentes
import EventsCarousel from "../components/EventsCarousel";
import ProductQuickBuyModal from "../components/ProductQuickBuyModal";

// Estilos
import "./Home.css";

export default function Home() {
  const [quickBuyOpen, setQuickBuyOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleQuickBuy(event) {
    setSelectedProduct(event);
    setQuickBuyOpen(true);
  }

  function handleAddToCart(item) {
    console.log("Adicionar ao carrinho:", item);
    // depois vira CartContext
  }

  return (
    <main className="home">

      {/* HERO */}
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

      {/* CATÁLOGO */}
      <section className="events-section">
        <h2>Eventos disponíveis</h2>

        <EventsCarousel
          events={fakeEvents}
          onQuickBuy={handleQuickBuy}   
        />
      </section>

      {/* MODAL GLOBAL */}
      <ProductQuickBuyModal
        open={quickBuyOpen}
        onClose={() => setQuickBuyOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />

    </main>
  );
}
