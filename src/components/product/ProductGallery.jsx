import "./ProductGallery.css";

export default function ProductGallery({ images }) {
  return (
    <div className="product-gallery">
      <img src={images[0]} alt="Produto" className="main-image" />

      <div className="thumbnails">
        {images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>
    </div>
  );
}
