import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
    const { scrollY } = useScroll();

    // Scale down and fade out as the user scrolls down
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.9]);
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <motion.section
            style={{ opacity, scale, y }}
            className="relative px-6 py-6 sm:py-12 lg:px-8 overflow-hidden rounded-3xl mt-4 z-0"
        >
            <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 flex justify-center overflow-hidden pointer-events-none opacity-30">
                <div className="w-[150%] max-w-5xl flex-none bg-gradient-to-r from-brand-accent to-brand-primary opacity-40 blur-[100px] aspect-[1155/678]" />
            </div>
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-brand-high sm:text-7xl leading-tight">
                    Transform Your Knowledge into <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#2DD4BF] to-brand-accent drop-shadow-sm">Experiences</span>
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-brand-muted max-w-2xl mx-auto font-light">
                    AI should understand how people learn, not just what they are taught.
                    Build the world&apos;s most effective and personalized learning experiences automatically.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#ecosystem" className="rounded-full bg-brand-primary px-8 py-4 text-sm font-bold text-brand-bg shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:bg-[#0D9488] hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
                        Explore the Ecosystem
                    </a>
                    <a href="#how-it-works" className="text-sm font-semibold leading-6 text-brand-muted hover:text-brand-high flex items-center gap-2 group transition-colors">
                        Learn how it works <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </motion.section>
    );
};
