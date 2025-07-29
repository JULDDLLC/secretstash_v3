'use client';

import { useState } from 'react';
import { PricingCard } from '@/components/pricing/pricing-card';
import { Calculator, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const freeFeatures = [
  'Demo vault with sample data',
  'Basic secrets management',
  'Local browser storage only',
  'No authentication required',
  'Limited to demo functionality'
];

const proFeatures = [
  'Unlimited secrets storage',
  'User authentication & accounts',
  'Finance Matrix module',
  'Code snippets manager',
  'Advanced search & filters',
  'Export to PDF/CSV',
  'Custom themes & cursors',
  'Enhanced local backup options',
  'Priority support',
  'Advanced export formats'
];

export default function PricingPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert('Stripe integration would be implemented here. For now, this is a demo!');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Join the SecretStash Multiverse
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Privacy-first digital organization for developers, engineers, and power users. 
            Start your cosmic journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="glass rounded-2xl p-8 border border-green-500/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Free Demo</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-green-400">$0</span>
                <span className="text-muted-foreground">/forever</span>
              </div>
              <p className="text-muted-foreground">Try SecretStash with sample data</p>
            </div>

            <div className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild className="w-full py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white">
              <Link href="/dashboard">
                Try Free Demo
              </Link>
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="relative glass rounded-2xl p-8 border border-cyan-500/50 ring-2 ring-cyan-500/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Beta Price
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">SecretStash Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">$4.97</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">Complete digital organization for power users</p>
            </div>

            <div className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={handleGetStarted}
              disabled={isLoading}
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white"
            >
              {isLoading ? 'Processing...' : 'Get Started'}
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Secure checkout powered by Stripe. Cancel anytime. 30-day money-back guarantee.
          </p>
          <p className="text-sm text-muted-foreground">
            Currently in demo mode. Full authentication and payment processing coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}