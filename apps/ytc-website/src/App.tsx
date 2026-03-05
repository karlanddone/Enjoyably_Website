
import { Navbar } from '@repo/ui/Navbar';
import { Footer } from '@repo/ui/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-fg flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20">

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
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining! We'll be in touch soon."); }}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-grow px-6 py-4 rounded-full bg-brand-bg/50 border border-white/10 text-brand-high placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
            />
            <button type="submit" className="whitespace-nowrap rounded-full bg-brand-primary px-8 py-4 text-sm font-bold text-brand-bg shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:bg-[#0D9488] hover:scale-105 transition-all duration-300">
              Join Waitlist
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-white/5">
            <a href="http://localhost:5173" className="text-sm font-semibold text-brand-muted hover:text-brand-high transition-colors">
              &larr; Back to Ecosystem
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
