import { useState, useRef, useEffect } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0);
  const thumbsRef = useRef(null);
  const trackRef = useRef(null);

  /* ========= MOBILE: scroll programático ========= */

  const scrollTo = (index) => {
    if (!trackRef.current) return;

    const width = trackRef.current.clientWidth;

    trackRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  };

  /* ========= MOBILE: sincroniza active com swipe ========= */

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActive(index);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="product-gallery">

      {/* ================= DESKTOP: THUMBS ================= */}
      <div className="product-thumbs-wrapper desktop-only">
        <div className="product-thumbs" ref={thumbsRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      {/* ================= MOBILE: CARROSSEL ================= */}
      <div className="product-carousel mobile-only">

        {/* SETA ESQUERDA */}
        <button
          className="carousel-arrow left"
          onClick={() => scrollTo(Math.max(0, active - 1))}
        >
          ‹
        </button>

        {/* TRACK */}
        <div className="carousel-track" ref={trackRef}>
          {images.map((img, index) => (
            <div key={index} className="carousel-slide">
              <img src={img} alt="" />
            </div>
          ))}
        </div>

        {/* SETA DIREITA */}
        <button
          className="carousel-arrow right"
          onClick={() =>
            scrollTo(Math.min(images.length - 1, active + 1))
          }
        >
          ›
        </button>

        {/* CONTADOR */}
        <div className="carousel-indicator">
          {active + 1}/{images.length}
        </div>

        {/* DOTS */}
        <div className="carousel-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={i === active ? "active" : ""}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>

      </div>

      {/* ================= DESKTOP: IMAGEM PRINCIPAL ================= */}
      <div className="product-main-image desktop-only">
        <img src={images[active]} alt="Produto" />
      </div>

    </div>
  );
}
