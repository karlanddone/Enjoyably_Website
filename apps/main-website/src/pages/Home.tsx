import { HeroSection } from '../components/sections/HeroSection';
import { Features } from '../components/sections/Features';
import { HowItWorks } from '../components/sections/HowItWorks';
import { EcosystemShowcase } from '../components/sections/EcosystemShowcase';

export const Home = () => {
    return (
        <>
            <HeroSection />
            <Features />
            <HowItWorks />
            <EcosystemShowcase />
        </>
    );
};
