'use client';

import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  if (!products || products.length === 0) {
    return (
      <section id="plans" className="bg-background py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-text-secondary">در حال بارگذاری محصولات...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="plans" className="bg-background py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center"
          style={{ gap: '20px', padding: '24px 0' }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

