import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Ingest Content',
        description: 'Provide your source material. This could be an entire textbook PDF, a series of YouTube videos, or raw company documentation.'
    },
    {
        number: '02',
        title: 'AI Analysis',
        description: 'The Enjoyably Core Engine breaks down the content, identifies key learning objectives, and structures the optimal andragogical path.'
    },
    {
        number: '03',
        title: 'Generate Assets',
        description: 'Automatically create the final output tailored to your specific app, be it an interactive course, a video script, or an internal training module.'
    }
];

export const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-24 sm:py-32 relative bg-brand-modal/30">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-[#2DD4BF] tracking-wide uppercase">The Process</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-high sm:text-4xl">
                        How the Core Engine operates
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-border/40 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-brand-bg border border-brand-border/50 flex items-center justify-center shadow-xl shadow-black/20 mb-6 relative group">
                                <div className="absolute inset-0 rounded-full bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-300" />
                                <span className="text-2xl font-bold text-brand-primary font-mono">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-brand-high mb-3">{step.title}</h3>
                            <p className="text-brand-muted leading-relaxed font-light">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
