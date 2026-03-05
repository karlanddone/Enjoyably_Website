import React from "react";

export const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-brand-bg/80 border-b border-brand-border/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Left side: Logo */}
                    <a href="http://localhost:5173/" className="flex-shrink-0 flex items-center gap-1 z-10 group">
                        <span className="text-3xl font-extrabold text-brand-high tracking-tighter group-hover:text-brand-primary transition-colors">Enjoyably</span>
                        <span className="text-brand-primary font-bold text-4xl leading-none -mt-1.5 group-hover:animate-pulse">.</span>
                    </a>

                    {/* Center: Navigation Links (Absolutely centered) */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="flex gap-8 pointer-events-auto">
                            <a href="/#features" className="text-sm font-medium text-brand-muted hover:text-brand-high transition-colors tracking-wide">Features</a>
                            <a href="/#ecosystem" className="text-sm font-medium text-brand-muted hover:text-brand-high transition-colors tracking-wide">Ecosystem</a>
                        </div>
                    </div>

                    {/* Right side: CTA */}
                    <div className="z-10 flex justify-end min-w-[140px]">
                        <form
                            className="hidden sm:flex items-center bg-brand-bg/90 border border-white/10 rounded-full pl-4 pr-1 py-1 focus-within:border-brand-primary/50 focus-within:ring-1 focus-within:ring-brand-primary/50 transition-all shadow-inner"
                            onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining the waitlist!"); }}
                        >
                            <input
                                type="email"
                                placeholder="Email address..."
                                required
                                className="bg-transparent text-sm text-brand-high placeholder:text-brand-muted focus:outline-none w-32 md:w-48"
                            />
                            <button type="submit" className="bg-brand-primary text-brand-bg hover:bg-[#0D9488] px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:scale-105">
                                Join
                            </button>
                        </form>
                        {/* Fallback for very small screens */}
                        <a href="http://localhost:3001" className="sm:hidden bg-brand-primary/10 border border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-brand-bg px-4 py-2 rounded-full text-sm font-bold transition-all">
                            Join
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
