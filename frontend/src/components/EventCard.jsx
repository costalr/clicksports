// src/components/EventCard.jsx
import "./EventCard.css";

export default function EventCard({ event }) {
  return (
    <article className="event-card">

      {/* BADGE DE DESCONTO */}
      {event.discount && (
        <span className="event-badge">
          -{event.discount}%
        </span>
      )}

      {/* IMAGEM */}
     <div className="event-card-image-wrapper">
    <img
        src={event.image}
        alt={event.title}
        className="event-card-image"
    />
    </div>


      <div className="event-card-content">

        {/* AVALIAÇÃO */}
        <div className="event-rating">
          {"★".repeat(event.rating)}
          {"☆".repeat(5 - event.rating)}
          <span>({event.reviews})</span>
        </div>

        

        {/* TÍTULO */}
        <h3 className="event-title">{event.title}</h3>

        {/* PREÇO */}
        <div className="event-price">
          {event.oldPrice && (
            <span className="old-price">
              R$ {event.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="current-price">
            R$ {event.price.toFixed(2)}
          </span>
        </div>

        {/* CTA */}
        <button className="event-buy-button">
          Comprar
        </button>

      </div>
    </article>
  );
}
