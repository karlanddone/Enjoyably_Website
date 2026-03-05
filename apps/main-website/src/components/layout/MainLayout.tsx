import React from 'react';
import { Navbar } from '@repo/ui/Navbar';
import { Footer } from '@repo/ui/Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-brand-bg text-brand-fg flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};
