import { Header } from '@/components/shared/header';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to HopeFlow
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Save Lives by Donating Blood. Join our community of donors and help those in need.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 text-lg">
            Start Donating Today
          </Button>
        </div>
      </main>
    </div>
  );
}
