import HeroSection from '../components/home/HeroSection';
import IndustrySection from '../components/home/IndustrySection';
import CapabilitiesSection from '../components/home/CapabilitiesSection';
import SelectedWork from '../components/home/SelectedWork';
import ApproachSection from '../components/home/ApproachSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IndustrySection />
      <CapabilitiesSection />
      <SelectedWork />
      <ApproachSection />
      <FinalCTA />
    </div>
  );
}