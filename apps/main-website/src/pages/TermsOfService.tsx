export const TermsOfService = () => {
    return (
        <section className="py-20 bg-brand-bg min-h-screen text-brand-fg">
            <div className="max-w-3xl mx-auto px-6 sm:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-high mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-brand-muted text-lg">Last updated: March 2026</p>
                </div>

                <div className="space-y-8 text-brand-muted/90 leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-brand-high mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using any of the Enjoyably platforms, including Enjoyably Courses, Enjoyably YTC, and Enjoyably Work, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-brand-high mb-4">2. Description of Service</h2>
                        <p>
                            Enjoyably provides AI-powered content transformation tools. Our platform enables users to convert various media formats into structured courses, interactive quizzes, engaging video scripts, and custom internal training modules.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-brand-high mb-4">3. User Responsibilities</h2>
                        <p>
                            You agree to use our services only for lawful purposes. You retain full ownership of any original content you input into the Enjoyably system, and you are responsible for ensuring that you have the right to process such content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-brand-high mb-4">4. Early Access & Waitlists</h2>
                        <p>
                            Certain features, including the Enjoyably YTC generator, may currently be restricted to an early access waitlist. Joining the waitlist does not guarantee immediate access to the technology, and Enjoyably reserves the right to manage admissions.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};
