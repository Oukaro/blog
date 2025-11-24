import type { Metadata } from "next";
import "./globals.css";
import Avatar from "../components/Avatar";

export const metadata: Metadata = {
    title: "OukaroMF Blog",
    description: "Thoughts, stories, and ideas by OukaroMF.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="container">
                    <header className="header">
                        <nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Avatar size={24} />
                                OukaroMF
                            </a>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <a href="/" style={{ fontSize: '0.875rem', color: 'var(--accents-5)', fontWeight: 500 }}>Blog</a>
                                <a href="#" style={{ fontSize: '0.875rem', color: 'var(--accents-5)', fontWeight: 500 }}>About</a>
                            </div>
                        </nav>
                    </header>
                    <main className="section">
                        {children}
                    </main>
                    <footer style={{
                        textAlign: 'center',
                        padding: '2rem 0',
                        borderTop: '1px solid var(--accents-2)',
                        marginTop: '4rem',
                        color: 'var(--accents-4)',
                        fontSize: '0.875rem'
                    }}>
                        <p>© {new Date().getFullYear()} OukaroMF. All rights reserved.</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
