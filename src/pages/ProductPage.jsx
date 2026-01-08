// src/pages/ProductPage.jsx
import { useParams } from "react-router-dom";
import { fakeEvents } from "../data/fakeEvents";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDescription from "../components/product/ProductDescription";
import ProductReviews from "../components/product/ProductReviews";
import RelatedProducts from "../components/product/RelatedProducts";

import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const product = fakeEvents.find(p => p.id === Number(id));

  if (!product) return <p>Produto não encontrado</p>;

  return (
    <main className="product-page">

      {/* BLOCO SUPERIOR */}
      <section className="product-main">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </section>

      {/* ABAIXO */}
      <ProductDescription description={product.description} />
      <ProductReviews reviews={product.reviews} />
      <RelatedProducts currentId={product.id} />

    </main>
  );
}
