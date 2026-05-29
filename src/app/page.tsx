import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Solutions from '@/components/sections/Solutions';
import CB7Banking from '@/components/sections/CB7Banking';
import CB7Features from '@/components/sections/CB7Features';
import PaperlessCTA from '@/components/sections/PaperlessCTA';
import N7Mobile from '@/components/sections/N7Mobile';
import Insights from '@/components/sections/Insights';
import CaseStudies from '@/components/sections/CaseStudies';

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#000d12]">
      <Header />
      <Hero />
      <Solutions />
      <CB7Banking />
      <CB7Features />
      <PaperlessCTA
        brand="CB7"
        title="Take the full advantage of going paper-less now."
        body="CB7 helps your financial institution improve the client experience, automate procedures and ensure full regulatory compliance — without the legacy paperwork."
      />
      <N7Mobile />
      <PaperlessCTA
        brand="N7"
        title="A digital banking experience customers will love."
        body="Launch a modern digital bank in weeks, not years. N7 ships with the building blocks you need to delight customers from day one."
      />
      <Insights />
      <CaseStudies />
      <Footer />
    </main>
  );
}
