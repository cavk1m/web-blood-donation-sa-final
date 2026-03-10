import Header from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Hero } from '@/components/sections/hero';
import { EmergencyCampaigns } from '@/components/sections/emergency-campaigns';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Hero />
      <EmergencyCampaigns />
      <Footer />
    </div>
  );
}
