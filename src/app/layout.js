import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://shipext.co.uk'),
  title: {
    default: 'Shipext | UK Fulfillment & Logistics',
    template: '%s | Shipext',
  },
  description:
    'UK Fulfillment, warehousing, Amazon FBA prep, storage, shipping and returns management for e-commerce businesses.',
  keywords: [
    'UK Fulfillment',
    '3PL',
    'Warehouse',
    'Storage',
    'Returns',
    'Amazon FBA Prep',
    'Royal Mail',
    'Logistics',
  ],
  openGraph: {
    title: 'Shipext | UK Fulfillment & Logistics',
    description:
      'Your UK Fulfillment & Logistics Partner for storage, shipping, returns and e-commerce operations.',
    url: 'https://shipext.co.uk',
    siteName: 'Shipext',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans flex flex-col overflow-x-hidden">
        <Navbar />

        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}