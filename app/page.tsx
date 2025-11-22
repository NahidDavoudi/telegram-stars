import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ProductsGrid from '@/components/ProductsGrid';
import ContactSection from '@/components/ContactSection';
import WaveDivider from '@/components/WaveDivider';
import productsData from '@/data/products.json';
import { Product } from '@/types';

export default function Home() {
  // Ensure products is always an array
  const products: Product[] = Array.isArray(productsData) ? productsData : [];

  return (
    <Layout>
      <HeroSection />
      <WaveDivider 
        colors={['#a8c0d8', '#9bb5d0', '#8da9c4']}
        layers={3}
      />
      <ProductsGrid products={products} />
      <ContactSection />
    </Layout>
  );
}

