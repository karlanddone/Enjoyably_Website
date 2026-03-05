import React from "react";

export const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-brand-bg/80 border-b border-brand-border/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Left side: Logo */}
                    <div className="flex-shrink-0 flex items-center gap-1.5 z-10 w-[140px]">
                        <span className="text-xl font-bold text-brand-high tracking-tight">Enjoyably</span>
                        <span className="text-brand-primary font-bold text-2xl leading-none -mt-1">.</span>
                    </div>

                    {/* Center: Navigation Links (Absolutely centered) */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="flex gap-8 pointer-events-auto">
                            <a href="/#features" className="text-sm font-medium text-brand-muted hover:text-brand-high transition-colors tracking-wide">Features</a>
                            <a href="/#ecosystem" className="text-sm font-medium text-brand-muted hover:text-brand-high transition-colors tracking-wide">Ecosystem</a>
                            <a href="/#pricing" className="text-sm font-medium text-brand-muted hover:text-brand-high transition-colors tracking-wide">Pricing</a>
                        </div>
                    </div>

                    {/* Right side: CTA */}
                    <div className="z-10 w-[140px] flex justify-end">
                        <a href="https://courses.enjoyably.app" className="bg-brand-primary/10 border border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-brand-bg px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.1)] hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] hover:-translate-y-0.5 whitespace-nowrap">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
