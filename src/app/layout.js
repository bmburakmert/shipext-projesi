import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'SHIPEXT',
  description: 'Fulfillment & Logistics Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col">
        
        <Navbar />

        <main className="flex-1 w-full">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}