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

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        // THIS IS THE CRITICAL FIX FOR THE 404 ERROR
        redirectTo: `${window.location.origin}/auth/callback`,
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
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <Image 
              src="/logo.png" 
              alt="SecretStash Logo" 
              width={32}
              height={32}
            />
            <span className="text-xl font-bold gradient-text">SecretStash</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/"><Button variant="ghost">Home</Button></Link>
            <Link href="/dashboard"><Button variant="ghost">Vault</Button></Link>
            <Link href="/finance"><Button variant="ghost">Finance</Button></Link>
            <Link href="/snippets"><Button variant="ghost">Snippets</Button></Link>
            <Link href="/docs"><Button variant="ghost">Docs</Button></Link>
          </div>

          {user ? (
            <div className="flex items-center space-x-4">
               <span className="text-sm text-muted-foreground">Welcome!</span>
               <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button onClick={handleLogin}>Login</Button>
              <Button onClick={handleLogin}>Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}