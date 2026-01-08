// src/components/EventCard.jsx
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ event, onQuickBuy }) {
  const navigate = useNavigate();

  return (
    <article className="event-card">

      {event.discount && (
        <span className="event-badge">
          -{event.discount}%
        </span>
      )}

      {/* IMAGEM (clique futuro → página do produto) */}
      <div className="event-card-image-wrapper">
        <img
          src={event.images[0]}
          alt={event.title}
          className="event-card-image"
          onClick={() => navigate(`/produto/${event.id}`)}
        />

        <h3 onClick={() => navigate(`/produto/${event.id}`)}>
          {event.title}
        </h3>
      </div>

      <div className="event-card-content">

        <div className="event-rating">
          {"★".repeat(event.rating)}
          {"☆".repeat(5 - event.rating)}
          <span>({event.reviewsCount})</span>
        </div>

        <h3 className="event-title">{event.title}</h3>

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

      
        <button
          className="event-buy-button"
          onClick={() => onQuickBuy(event)}
        >
          Comprar
        </button>

      </div>
    </article>
  );
}
