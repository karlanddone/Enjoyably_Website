export const PrivacyPolicy = () => {
    return (
        <section className="py-20 bg-brand-bg min-h-screen text-brand-fg">
            <div className="max-w-3xl mx-auto px-6 sm:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-high mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-brand-muted text-lg">Last updated: March 2026</p>
                </div>

                <div className="space-y-8 text-brand-muted/90 leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-brand-high mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Enjoyably. We are highly committed to protecting your privacy and ensuring the security of the personal data you provide us. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-brand-high mb-4">2. Information Collection</h2>
                        <p>
                            We collect information that you manually provide us, such as when you join our waitlist (email address) or interact with our learning modules. When using our YTC, Courses, or Work products, the documents, videos, and texts you upload for processing are analyzed by our AI engine.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-brand-high mb-4">3. Use of Information</h2>
                        <p>
                            We use the information we collect to operate, maintain, and improve our services, communicate with you regarding updates, and provide personalized learning tools. Your generated training materials are strictly isolated to your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold tracking-tight text-brand-high mb-4">4. Data Security</h2>
                        <p>
                            Enjoyably employs robust security measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the Internet can be guaranteed to be 100% secure.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};
