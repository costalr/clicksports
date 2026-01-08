import "./ProductReviews.css";

export default function ProductReviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p className="no-reviews">Ainda não há avaliações.</p>;
  }

  return (
    <div className="product-reviews">
      <h3>Avaliações</h3>

      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="review-header">
            <strong>{review.author}</strong>
            <span className="review-date">{review.date}</span>
          </div>

          <div className="review-rating">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>

          <p className="review-comment">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
