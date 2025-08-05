import { HeroSection } from '@/components/sections/HeroSection';
import { PortalSelector } from '@/components/sections/PortalSelector';
import { FeatureGrid } from '@/components/sections/FeatureGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <HeroSection 
          title="yo-whatsup-healthcare-patient-portal-1754411815494"
          description="This is awesome"
        />
        <PortalSelector />
        <FeatureGrid />
      </div>
    </main>
  );
}