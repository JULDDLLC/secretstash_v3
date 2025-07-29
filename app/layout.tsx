import './globals.css';
import { ThemeProvider } from '@/contexts/theme-context';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Navbar } from '@/components/navbar';
import { Footer } from './footer';

export const metadata = {
  title: 'SecretStash - Developer Secrets Vault',
  description: 'A beautiful, secure, and user-friendly web application for managing your sensitive developer data like API keys, passwords, certificates, and more.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-manrope">
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground cosmic-background">
            <CustomCursor />
            <FloatingParticles />
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        
        <script dangerouslySetInnerHTML={{
          __html: `console.log('🔐 SecretStash Developer Console\\n\\nWell, well, well... look who\\'s snooping around!\\n\\nJulie sees you exploring the dev tools - she approves! 🕵️‍♀️\\n\\nYou\\'ve discovered the secret developer easter egg!\\n\\nBuilt with ❤️ by JULDD LLC\\n- React + TypeScript\\n- Tailwind CSS\\n- Framer Motion\\n- 100% Local Storage\\n- Privacy First Design\\n\\nKeep your secrets safe! 🚀');`
        }} />
      </body>
    </html>
  )
}