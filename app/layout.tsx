import type { Metadata } from 'next';
import { StoreProvider } from '@/app/providers/StoreProvider';
import '@/app/styles/index.scss';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export const metadata: Metadata = {
    title: 'Cleex Web',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body>
                <StoreProvider>
                    <Header />
                    <main className="app">
                        {children}
                    </main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
