import React from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
);

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
);

const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" />
        <path d="M12 10h.01" /><path d="M12 14h.01" />
        <path d="M16 10h.01" /><path d="M16 14h.01" />
        <path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
);

const apps = [
    {
        name: 'Enjoyably Courses',
        description: 'Instantly generate structured, multi-module learning courses and quizzes from raw text, videos, or PDFs.',
        url: '/courses',
        icon: <BookIcon />,
        status: 'In Development'
    },
    {
        name: 'Enjoyably YouTube',
        description: 'Convert scripts and outlines into optimized long-form educational video scripts, title variations, and assets.',
        url: '/ytc',
        icon: <PlayIcon />,
        status: 'First Available'
    },
    {
        name: 'Enjoyably Work',
        description: 'Transform standard company documents into personalized, trackable, and engaging internal training modules.',
        url: '/work',
        icon: <BuildingIcon />,
        status: 'In Development'
    }
];

export const EcosystemShowcase: React.FC = () => {
    return (
        <section id="ecosystem" className="py-12 sm:py-16 relative bg-brand-bg z-10 rounded-t-[3rem] shadow-[0_-40px_60px_-15px_rgba(0,0,0,0.5)] mt-8">
            <div className="absolute inset-x-0 top-0 h-full bg-brand-modal/20 skew-y-3 -z-10 origin-top-left rounded-t-[3rem]" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm">The Gateway</h2>
                    <p className="mt-3 text-4xl font-extrabold tracking-tight text-brand-high sm:text-5xl">One Platform. Infinite Learning Modes.</p>
                    <p className="mt-6 text-lg leading-relaxed text-brand-muted max-w-xl mx-auto font-light">
                        Select the application that fits your audience. Each specialized tool uses our core AI engine to generate the perfect learning format.
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none"
                >
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
                        {apps.map((app) => (
                            <motion.div
                                variants={itemVariants}
                                key={app.name}
                                className="flex flex-col relative overflow-hidden group rounded-3xl"
                            >
                                <a href={app.url} className="flex flex-col h-full bg-brand-modal/30 backdrop-blur-xl border border-white/5 rounded-3xl p-10 shadow-2xl shadow-black/50 hover:bg-brand-modal/50 hover:border-brand-primary/30 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] transition-all duration-500 hover:-translate-y-2 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg">
                                    <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-primary/0 to-brand-accent/0 group-hover:from-brand-primary/10 group-hover:to-brand-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                                    <div className="absolute -right-20 -top-20 bg-brand-primary/10 w-48 h-48 rounded-full blur-3xl group-hover:bg-brand-primary/20 transition-all duration-700 pointer-events-none" />

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#2D3748] to-[#1A202C] rounded-2xl border border-white/10 group-hover:border-brand-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner text-brand-high">
                                            {app.icon}
                                        </div>
                                        <div className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full border ${app.status === 'First Available' ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary' : 'bg-white/5 border-white/10 text-brand-muted/70'}`}>
                                            {app.status}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-brand-high tracking-tight mb-2 group-hover:text-brand-primary transition-colors duration-300">{app.name}</h3>

                                    <div className="mt-4 flex flex-auto flex-col text-base leading-relaxed text-brand-muted/90 font-light">
                                        <p className="flex-auto">{app.description}</p>
                                        <div className="mt-8 pt-6 border-t border-white/5 group-hover:border-brand-primary/20 transition-colors">
                                            <span className="text-sm font-semibold leading-6 text-brand-primary group-hover:text-[#2DD4BF] transition-colors flex items-center gap-2 group/link w-fit">
                                                Open Application
                                                <span aria-hidden="true" className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </dl>
                </motion.div>
            </div>
        </section>
    );
};
