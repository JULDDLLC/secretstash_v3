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
          __html: `
            console.log('%c🔐 SecretStash Developer Console', 'color: #06b6d4; font-size: 24px; font-weight: bold;');
            console.log('%c\\n👋 Well, well, well... look who\\'s snooping around!', 'color: #a855f7; font-size: 16px;');
            console.log('%c\\n🕵️‍♀️ Julie sees you exploring the dev tools - she totally approves!', 'color: #ec4899; font-size: 14px; font-weight: bold;');
            console.log('%c\\n✨ You\\'ve discovered the secret developer easter egg!', 'color: #10b981; font-size: 14px;');
            console.log('%c\\n🎉 Welcome to the SecretStash multiverse, fellow code explorer!', 'color: #f59e0b; font-size: 14px;');
            console.log('%c\\n🚀 Built with ❤️ by JULDD LLC', 'color: #06b6d4; font-size: 12px;');
            console.log('%c- React + TypeScript\\n- Next.js 14\\n- Tailwind CSS\\n- Framer Motion\\n- 100% Local Storage\\n- Privacy First Design', 'color: #6b7280; font-size: 11px;');
            console.log('%c\\n🔒 Keep your secrets safe and your code cleaner than your room!', 'color: #ef4444; font-size: 12px; font-style: italic;');
            console.log('%c\\n💡 Pro tip: Try typing "julie()" in the console for a surprise...', 'color: #8b5cf6; font-size: 11px;');
            
            // Hidden function for extra fun
            window.julie = function() {
              console.log('%c\\n🌟 JULIE\\'S SPECIAL MESSAGE 🌟', 'color: #ec4899; font-size: 18px; font-weight: bold; background: linear-gradient(45deg, #06b6d4, #a855f7); -webkit-background-clip: text;');
              console.log('%c\\n"Hey there, code detective! 🔍\\nYou found my secret function! I\\'m impressed by your curiosity.\\n\\nAs a reward, here\\'s a secret: The cosmic cursor follows your mouse\\nbecause even in the digital realm, magic should feel interactive.\\n\\nKeep exploring, keep coding, and remember -\\nyour secrets are safe with SecretStash! 🛡️\\n\\n- Julie ✨"', 'color: #10b981; font-size: 12px; font-style: italic; line-height: 1.5;');
              console.log('%c\\n🎁 Bonus: Try "julie.surprise()" for one more treat!', 'color: #f59e0b; font-size: 11px;');
            };
            
            window.julie.surprise = function() {
              console.log('%c\\n🎊 SURPRISE! 🎊', 'color: #ec4899; font-size: 20px; font-weight: bold;');
              console.log('%c\\nYou\\'ve unlocked the ultimate easter egg!\\nHere\\'s the SecretStash theme song (in ASCII):\\n\\n♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫\\n🎵 "Keep your secrets safe and sound,\\n    In the vault where they\\'re found,\\n    Julie\\'s watching, code\\'s flowing,\\n    SecretStash keeps on growing!" 🎵\\n♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫\\n\\nThanks for being awesome! 🚀', 'color: #06b6d4; font-size: 12px; font-family: monospace; line-height: 1.4;');
            };
          `
        }} />
      </body>
    </html>
  )
}