import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxZ6E3lYBdHBTIHaoFJ_vqzMAb6CLDT_hOmNobY-8zNEu20b5thWVsUID06SZMNvnFf/exec";

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
            await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: formData.toString() });
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
        <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-brand-primary/10 rounded-3xl flex items-center justify-center mb-8 border border-brand-primary/20 shadow-[0_0_30px_rgba(20,184,166,0.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
                    <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-center text-brand-high mb-6">
                Enjoyably <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">YTC</span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-brand-muted max-w-2xl font-light leading-relaxed mb-12">
                The first application in the Enjoyably ecosystem is ready to transform how you create educational video content.
            </p>

            <div className="bg-brand-modal/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 w-full max-w-2xl text-center shadow-2xl">
                <h2 className="text-2xl font-bold text-brand-high mb-4">Request Early Access</h2>
                <p className="text-brand-muted mb-8">
                    We are currently onboarding creators in batches. Join the waitlist to get access to the YTC generator.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder={status === 'success' ? "Successfully added to waitlist!" : status === 'error' ? "Error. Try again." : "Enter your email address"}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'submitting' || status === 'success'}
                        className={`flex-grow px-6 py-4 rounded-full bg-brand-bg/50 border text-brand-high focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${status === 'success' ? 'border-green-500/50 focus:ring-green-500/50 placeholder:text-green-500' : status === 'error' ? 'border-red-500/50 focus:ring-red-500/50 placeholder:text-red-500' : 'border-white/10 focus:ring-brand-primary/50 placeholder:text-brand-muted'}`}
                    />
                    <button
                        type="submit"
                        disabled={status === 'submitting' || status === 'success'}
                        className="whitespace-nowrap rounded-full bg-brand-primary px-8 py-4 text-sm font-bold text-brand-bg shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:bg-[#0D9488] hover:scale-105 transition-all duration-300 disabled:opacity-75 disabled:hover:scale-100 flex justify-center items-center min-w-[140px]"
                    >
                        {status === 'submitting' ? (
                            <svg className="animate-spin h-5 w-5 text-brand-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : status === 'success' ? "✓ Added" : "Join Waitlist"}
                    </button>
                </form>
                <div className="mt-8 pt-6 border-t border-white/5">
                    <Link to="/" className="text-sm font-semibold text-brand-muted hover:text-brand-high transition-colors">
                        &larr; Back to Ecosystem
                    </Link>
                </div>
            </div>
        </div>
    );
};
