import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Email AI Agent – Dashboard',
  description:
    'AI-powered email monitoring dashboard that classifies and surfaces important emails in real time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} h-full`}>
        <Providers>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1e293b',
                color: '#f1f5f9',
                border: '1px solid #334155',
                borderRadius: '12px',
                fontSize: '13px',
              },
              success: {
                iconTheme: { primary: '#4ade80', secondary: '#1e293b' },
              },
              error: {
                iconTheme: { primary: '#f87171', secondary: '#1e293b' },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
