import HeroSection from '../components/home/HeroSection.jsx';
import IndustrySection from '../components/home/IndustrySection.jsx';
import CapabilitiesSection from '../components/home/CapabilitiesSection.jsx';
import SelectedWork from '../components/home/SelectedWork.jsx';
import ApproachSection from '../components/home/ApproachSection.jsx';
import FinalCTA from '../components/home/FinalCTA.jsx';

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