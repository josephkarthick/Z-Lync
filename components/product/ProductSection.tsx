"use client";

import { useState } from "react";

import ProductCard from "./ProductCard";
import ProductQuickView from "./ProductQuickView";

type Product = {
  id: number;
  name: string;
  image: string;
  weight: string;
  price: number;
};

interface ProductSectionProps {
  title: string;
  description: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductSection({
  title,
  description,
  products,
  onAddToCart,
}: ProductSectionProps) {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  return (
    <>
      <div className="title d-block">
        <h2 className="text-theme font-sm">
          {title}
        </h2>

        <p>{description}</p>
      </div>

      <div className="row row-cols-xxl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 section-b-space">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              setSelectedProduct={setSelectedProduct}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>	

      <ProductQuickView product={selectedProduct} />
    </>
  );
}