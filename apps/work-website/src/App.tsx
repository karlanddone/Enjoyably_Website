
import { Navbar } from '@repo/ui/Navbar';
import { Footer } from '@repo/ui/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-fg flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-24 text-center">

        <div className="w-24 h-24 bg-[#1E293B] rounded-3xl flex items-center justify-center mb-8 border border-white/5 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-muted">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" />
            <path d="M12 10h.01" /><path d="M12 14h.01" />
            <path d="M16 10h.01" /><path d="M16 14h.01" />
            <path d="M8 10h.01" /><path d="M8 14h.01" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-high mb-6 opacity-80">
          Enjoyably <span className="text-brand-muted">Work</span>
        </h1>

        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-medium tracking-wide text-sm mb-12">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
          In Active Development
        </div>

        <p className="text-xl md:text-2xl text-brand-muted max-w-2xl font-light leading-relaxed mb-12">
          The platform for transforming your company documents into personalized internal training is currently under construction.
        </p>

        <a href="https://enjoyably.app" className="text-brand-primary hover:text-[#2DD4BF] font-semibold transition-colors flex items-center gap-2 border-b border-transparent hover:border-[#2DD4BF] pb-1">
          <span aria-hidden="true">&larr;</span> Return to Ecosystem
        </a>

      </main>
      <Footer />
    </div>
  );
}

export default App;
