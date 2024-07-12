import type { Metadata } from 'next';
import { StoreProvider } from '@/app/providers/StoreProvider';
import '@/app/styles/index.scss';
import { Header } from '@/widgets/header';

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
                    <div className="app">
                        <Header />
                        <main>
                            {children}
                        </main>
                    </div>
                </StoreProvider>
            </body>
        </html>
    );
}
