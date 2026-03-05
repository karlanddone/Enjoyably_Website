import React from 'react';

/** Shared SVG icon components for the YTC feature cards. */
const ScriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

const StoryboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
        <line x1="17" y1="17" x2="22" y2="17" />
    </svg>
);

const SeoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

export interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const ytcFeatures: FeatureItem[] = [
    {
        title: 'Script Generation',
        description: 'Transform raw outlines, notes, or topic ideas into fully structured, long-form educational video scripts optimized for engagement and retention.',
        icon: <ScriptIcon />,
    },
    {
        title: 'Visual Storyboarding',
        description: 'Automatically generate scene-by-scene visual breakdowns, B-roll suggestions, and on-screen text overlays for every section of your video.',
        icon: <StoryboardIcon />,
    },
    {
        title: 'SEO-Optimized Output',
        description: 'Every generated asset comes with optimized titles, descriptions, tags, and thumbnail concepts designed to maximize discoverability and click-through rates.',
        icon: <SeoIcon />,
    }
];
