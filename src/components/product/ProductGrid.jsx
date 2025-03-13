import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, title }) => {
  if (!products?.length) return null;

  return (
    <section className="mb-8 sm:mb-12">
      {title && (
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6">{title}</h3>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;