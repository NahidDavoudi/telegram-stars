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
        colors={['#a2d9ff', '#8bcfff', '#74c6ff']}
        layers={3}
      />
      <ProductsGrid products={products} />
      <ContactSection />
    </Layout>
  );
}

