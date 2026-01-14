import Navbar from '@/components/shared/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* Add padding-top to avoid content being hidden under the fixed navbar */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}