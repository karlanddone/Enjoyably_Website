import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { WAITLIST_SCRIPT_URL } from '../config';
import { ytcFeatures } from './ytcFeatures';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const YTC: React.FC = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("submitting");
        try {
            const formData = new URLSearchParams();
            formData.append("email", `${email} [Source: YTC Landing Page]`);
            await fetch(WAITLIST_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: formData.toString() });
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 4000);
        } catch (error) {
            console.error("Error submitting waitlist form:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <div className="w-full">
            {/* ── Hero Section ── */}
            <section className="relative px-6 py-20 sm:py-32 lg:px-8 overflow-hidden">
                <div className="absolute inset-x-0 top-1/3 -z-10 flex justify-center overflow-hidden pointer-events-none opacity-30">
                    <div className="w-[150%] max-w-5xl flex-none bg-gradient-to-r from-brand-primary to-brand-accent opacity-40 blur-[100px] aspect-[1155/678]" />
                </div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-medium tracking-wide text-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                        First Available
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-brand-high sm:text-7xl leading-tight">
                        Enjoyably{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-brand-accent drop-shadow-sm">YouTube Content</span>
                    </h1>
                    <p className="mt-6 text-xl leading-relaxed text-brand-muted max-w-2xl mx-auto font-light">
                        The first application in the Enjoyably ecosystem. Transform your ideas into polished, educational video content: scripts, storyboards, and optimized metadata, all powered by AI.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#waitlist" className="rounded-full bg-brand-primary px-8 py-4 text-sm font-bold text-brand-bg shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:bg-brand-primary-hover hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
                            Request Early Access
                        </a>
                        <a href="#features" className="text-sm font-semibold leading-6 text-brand-muted hover:text-brand-high flex items-center gap-2 group transition-colors">
                            See what it does <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* ── Features Section ── */}
            <section id="features" className="py-24 sm:py-32 relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-border/40 to-transparent" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-brand-primary tracking-wide uppercase">Capabilities</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-brand-high sm:text-4xl">Everything for polished video content</p>
                        <p className="mt-6 text-lg leading-8 text-brand-muted">From raw ideas to publish-ready assets. The YTC engine handles every step of the educational video creation pipeline.</p>
                    </div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
                            {ytcFeatures.map((feature) => (
                                <motion.div variants={itemVariants} key={feature.title} className="flex flex-col relative overflow-hidden group rounded-3xl">
                                    <div className="flex flex-col h-full bg-brand-modal/30 backdrop-blur-xl border border-white/5 rounded-3xl p-10 shadow-2xl shadow-black/50 hover:bg-brand-modal/50 hover:border-brand-primary/30 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] transition-all duration-500 hover:-translate-y-2 relative">
                                        <div className="absolute -right-20 -top-20 bg-brand-primary/10 w-48 h-48 rounded-full blur-3xl group-hover:bg-brand-primary/20 transition-all duration-700 pointer-events-none" />
                                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-icon-from to-brand-icon-to rounded-2xl border border-white/10 group-hover:border-brand-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner text-brand-primary mb-6">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-brand-high mb-3 group-hover:text-brand-primary transition-colors duration-300">{feature.title}</h3>
                                        <p className="text-brand-muted/90 leading-relaxed font-light flex-auto">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </dl>
                    </motion.div>
                </div>
            </section>

            {/* ── Waitlist CTA Section ── */}
            <section id="waitlist" className="py-24 sm:py-32 relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-border/40 to-transparent" />
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl px-6">
                    <div className="bg-brand-modal/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 w-full text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute -right-24 -bottom-24 bg-brand-primary/10 w-64 h-64 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -left-24 -top-24 bg-brand-accent/10 w-64 h-64 rounded-full blur-3xl pointer-events-none" />
                        <h2 className="text-2xl font-bold text-brand-high mb-4 relative">Request Early Access</h2>
                        <p className="text-brand-muted mb-8 relative">We are currently onboarding creators in batches. Join the waitlist to get access to the YTC generator.</p>
                        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto relative" onSubmit={handleSubmit}>
                            <input type="email" placeholder={status === 'success' ? "Successfully added!" : status === 'error' ? "Error. Try again." : "Enter your email address"} required value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === 'submitting' || status === 'success'}
                                className={`flex-grow px-6 py-4 rounded-full bg-brand-bg/50 border text-brand-high focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${status === 'success' ? 'border-green-500/50 focus:ring-green-500/50 placeholder:text-green-500' : status === 'error' ? 'border-red-500/50 focus:ring-red-500/50 placeholder:text-red-500' : 'border-white/10 focus:ring-brand-primary/50 placeholder:text-brand-muted'}`}
                            />
                            <button type="submit" disabled={status === 'submitting' || status === 'success'}
                                className="whitespace-nowrap rounded-full bg-brand-primary px-8 py-4 text-sm font-bold text-brand-bg shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:bg-brand-primary-hover hover:scale-105 transition-all duration-300 disabled:opacity-75 disabled:hover:scale-100 flex justify-center items-center min-w-[140px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                            >
                                {status === 'submitting' ? (
                                    <svg className="animate-spin h-5 w-5 text-brand-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                ) : status === 'success' ? "✓ Added" : "Join Waitlist"}
                            </button>
                        </form>
                        <div className="mt-8 pt-6 border-t border-white/5 relative">
                            <Link to="/" className="text-sm font-semibold text-brand-muted hover:text-brand-high transition-colors">&larr; Back to Ecosystem</Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};
