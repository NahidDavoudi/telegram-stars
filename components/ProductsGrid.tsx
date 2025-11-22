'use client';

import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  if (!products || products.length === 0) {
    return (
      <section id="plans" className="bg-mint-cream py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-prussian-blue/70">در حال بارگذاری محصولات...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="plans" className="bg-mint-cream py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div 
          className="flex flex-wrap justify-center"
          style={{ gap: '0', padding: '24px 0' }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

