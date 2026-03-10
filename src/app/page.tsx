import Header from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Hero } from '@/components/sections/hero';
import { SimpleProcess } from '@/components/sections/simple-process';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Hero />
      <SimpleProcess />
      <Footer />
    </div>
  );
}
