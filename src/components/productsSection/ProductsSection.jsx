import React from "react";
import "./productsSection.css";
import ProductCard from "../productCard/ProductCard";

const ProductsSection = ({ title, bgColor, products }) => {
  return (
    <section className="section" style={{ backgroundColor: bgColor }}>
      <div className="container-xl">
        <h1 className="heading">{title}</h1>
        <div className="row justify-content-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="col-10 col-sm-6 col-md-4 col-lg-3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
