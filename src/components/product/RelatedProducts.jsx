import { fakeEvents } from "../../data/fakeEvents";
import EventCard from "../EventCard";
import "./RelatedProducts.css";

export default function RelatedProducts({ currentId }) {
  const related = fakeEvents
    .filter(e => e.id !== currentId)
    .slice(0, 4);

  return (
    <section className="related-products">
      <h2>Produtos relacionados</h2>

      <div className="related-grid">
        {related.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
