// src/components/EventsCarousel.jsx
import { useState, useRef, useEffect } from "react";
import EventCard from "./EventCard";
import "./EventsCarousel.css";

export default function EventsCarousel({ events, onQuickBuy }) {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const startX = useRef(0);
  const currentX = useRef(0);

  // ===== BREAKPOINT =====
  useEffect(() => {
    function handleResize() {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
      setIndex(0);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(events.length / itemsPerPage);
  const maxIndex = totalPages - 1;

  function next() {
    setIndex(i => Math.min(i + 1, maxIndex));
  }

  function prev() {
    setIndex(i => Math.max(i - 1, 0));
  }

  // ===== SWIPE =====
  function onTouchStart(e) {
    startX.current = e.touches[0].clientX;
  }

  function onTouchMove(e) {
    currentX.current = e.touches[0].clientX;
  }

  function onTouchEnd() {
    const diff = startX.current - currentX.current;

    if (diff > 50 && index < maxIndex) next();
    if (diff < -50 && index > 0) prev();
  }

  return (
    <div className="carousel-wrapper">

      {/* SETA ESQUERDA */}
      <button
        className="carousel-arrow left"
        onClick={prev}
        disabled={index === 0}
        aria-label="Evento anterior"
      >
        ‹
      </button>

      <div
        className="carousel-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * 100}%)`
          }}
        >
          {events.map(event => (
            <div
              className="carousel-item"
              style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
              key={event.id}
            >
              <EventCard
                event={event}
                onQuickBuy={onQuickBuy} // 👈 AQUI
              />
            </div>
          ))}
        </div>
      </div>

      {/* SETA DIREITA */}
      <button
        className="carousel-arrow right"
        onClick={next}
        disabled={index === maxIndex}
        aria-label="Próximo evento"
      >
        ›
      </button>
    </div>
  );
}
