import React from "react";

export const Navbar: React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("submitting");

        try {
            // Note: Google Apps Script Web Apps often require 'no-cors' mode
            // We use URLSearchParams to send the data as form data
            const formData = new URLSearchParams();
            formData.append("email", `${email} [Source: Global Navbar]`);

            await fetch("https://script.google.com/macros/s/AKfycbxZ6E3lYBdHBTIHaoFJ_vqzMAb6CLDT_hOmNobY-8zNEu20b5thWVsUID06SZMNvnFf/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString()
            });

            // Since 'no-cors' hides the actual response status, we assume success if no network error occurred
            setStatus("success");
            setEmail("");

            // Revert back to idle after a few seconds
            setTimeout(() => setStatus("idle"), 3000);

        } catch (error) {
            console.error("Error submitting waitlist form:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

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
                            className={`hidden sm:flex items-center bg-brand-bg/90 border rounded-full pl-4 pr-1 py-1 transition-all shadow-inner ${status === 'success' ? 'border-green-500/50 focus-within:ring-green-500/50' : status === 'error' ? 'border-red-500/50 focus-within:ring-red-500/50' : 'border-white/10 focus-within:border-brand-primary/50 focus-within:ring-1 focus-within:ring-brand-primary/50'}`}
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                placeholder={status === 'success' ? "Added!" : status === 'error' ? "Error. Try again." : "Email address..."}
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'submitting' || status === 'success'}
                                className="bg-transparent text-sm text-brand-high placeholder:text-brand-muted focus:outline-none w-32 md:w-48 disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className="bg-brand-primary text-brand-bg hover:bg-[#0D9488] px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:scale-105 disabled:opacity-75 disabled:hover:scale-100 min-w-[60px] flex justify-center items-center"
                            >
                                {status === 'submitting' ? (
                                    <svg className="animate-spin h-4 w-4 text-brand-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : status === 'success' ? (
                                    "✓"
                                ) : (
                                    "Join"
                                )}
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
