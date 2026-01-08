import "./ProductDescription.css";

export default function ProductDescription({ description }) {
  return (
    <section className="product-description">
      <h2>Descrição do produto</h2>

      <div className="description-content">
        {description.map((block, index) => (
          <p key={index}>{block}</p>
        ))}
      </div>
    </section>
  );
}
