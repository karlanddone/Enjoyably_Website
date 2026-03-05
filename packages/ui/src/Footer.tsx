import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-brand-border/10 mt-16 bg-brand-bg/60 backdrop-blur-xl relative z-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-1 mb-6">
                            <span className="text-2xl font-extrabold text-brand-high tracking-tighter">Enjoyably</span>
                            <span className="text-brand-primary font-bold text-2xl">.</span>
                        </div>
                        <p className="text-brand-muted max-w-sm text-sm leading-relaxed font-light">
                            Empowering creators, teams, and institutions to build the world&apos;s most effective and personalized learning experiences.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-brand-fg font-semibold mb-6 tracking-wide text-sm uppercase">Ecosystem</h3>
                        <ul className="space-y-4">
                            <li><a href="https://courses.enjoyably.app" className="text-brand-muted hover:text-brand-primary transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-brand-primary before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity">Courses</a></li>
                            <li><a href="https://ytc.enjoyably.app" className="text-brand-muted hover:text-brand-primary transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-brand-primary before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity">YouTube Content</a></li>
                            <li><a href="https://internal.enjoyably.app" className="text-brand-muted hover:text-brand-primary transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-brand-primary before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity">Internal Training</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-brand-fg font-semibold mb-6 tracking-wide text-sm uppercase">Legal</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-brand-muted hover:text-brand-primary transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-brand-muted hover:text-brand-primary transition-colors text-sm">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-brand-muted/70 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} Enjoyably. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
