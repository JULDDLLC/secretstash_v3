// julddllc/secretstash_v3/secretstash_v3-9f2bd58e77e7b4cedc824a27bcb5de2ea25e71e7/components/navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export default function Navbar() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkUser = async () => {
        const { data } = await supabase.auth.getUser();
        setUser(data.user);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase.auth]);

  const getRedirectUrl = () => {
    // Vercel automatically sets these environment variables
    let url = process.env.NEXT_PUBLIC_SITE_URL || // Set this in Vercel for your production domain
              process.env.NEXT_PUBLIC_VERCEL_URL || // Automatically set by Vercel for preview deployments
              'http://localhost:3000'; // Fallback for local development

    // Ensure it's HTTPS if not localhost
    url = url.startsWith('http') ? url : `https://${url}`;
    // Ensure trailing slash for consistency if needed, though '/auth/callback' handles it well
    // url = url.endsWith('/') ? url : `${url}/`; 
    
    return `${url}/auth/callback`;
  };

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: getRedirectUrl(), // Use the dynamic URL
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 cursor-pointer mr-6">
            <Image 
              src="/logo.png" 
              alt="SecretStash Logo" 
              width={32}
              height={32}
            />
            <span className="text-xl font-bold gradient-text whitespace-nowrap">SecretStash</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {/* REMOVED: <Link href="/"><Button variant="ghost">Home</Button></Link> */}
            <Link href="/dashboard"><Button variant="ghost">Vault</Button></Link>
            <Link href="/finance"><Button variant="ghost">Finance</Button></Link>
            <Link href="/snippets"><Button variant="ghost">Snippets</Button></Link>
            <Link href="/docs"><Button variant="ghost">Docs</Button></Link>
          </div>

          {user ? (
            <div className="flex items-center space-x-4 ml-auto">
               <span className="text-sm text-muted-foreground whitespace-nowrap">Welcome!</span>
               <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2 ml-auto">
              <Button onClick={handleLogin}>Login</Button>
              <Button onClick={handleLogin}>Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}