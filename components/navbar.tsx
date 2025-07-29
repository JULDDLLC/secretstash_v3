'use client';

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Home, Lock, FileText, HelpCircle, Calculator, Code, DollarSign, Settings, LogIn, UserPlus } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';
import { Button } from './ui/button';
import { Switch } from './ui/switch';

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="SecretStash Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold gradient-text">SecretStash</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <Link
              href="/dashboard"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/dashboard') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Vault</span>
            </Link>

            <Link
              href="/finance"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/finance') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Finance</span>
            </Link>

            <Link
              href="/snippets"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/snippets') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Snippets</span>
            </Link>

            <Link
              href="/pricing"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/pricing') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Pricing</span>
            </Link>

            <Link
              href="/terms"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/terms') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Terms</span>
            </Link>
          </div>

          {/* Auth & Theme */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">Light</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                aria-label="Toggle theme"
              />
              <span className="text-sm text-muted-foreground">Dark</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};