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
        body="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations."
      />
      <N7Mobile />
      <Insights />
      {/* Dashed separator */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="border-t border-dashed border-white/10" />
      </div>
      <CaseStudies />
      <PaperlessCTA
        brand="N7"
        title="Take the full advantage of going paper-less now."
        body="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations."
      />
      <Footer />
    </main>
  );
}
