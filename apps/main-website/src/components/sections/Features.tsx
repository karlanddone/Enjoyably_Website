import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        name: 'Transformational AI',
        description: 'Our engine goes beyond summarization. It actually understands andragogical structures and builds learning paths that stick.',
    },
    {
        name: 'Multi-Modal Inputs',
        description: 'Upload PDFs, paste raw text, drop in video links, or connect your company\'s knowledge base directly. We process it all.',
    },
    {
        name: 'Automated Assessments',
        description: 'Generate context-aware quizzes, flashcards, and practical exercises instantly to validate comprehension and retention.',
    },
    {
        name: 'Deep Analytics',
        description: 'Track how your audience engages with your content. Identify drop-off points, weak areas, and optimize your material.',
    }
];

export const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 sm:py-32 bg-brand-bg relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-primary tracking-wide uppercase">Advanced Capabilities</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-high sm:text-4xl">
                        Everything you need to build effective learning
                    </p>
                    <p className="mt-6 text-lg leading-8 text-brand-muted">
                        Enjoyably is more than an AI wrapper. It's a purpose-built engine designed specifically for education, training, and knowledge transfer.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col relative pl-6 border-l-2 border-brand-border hover:border-brand-primary transition-colors"
                            >
                                <dt className="text-xl font-semibold leading-7 text-brand-high">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-brand-muted">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
