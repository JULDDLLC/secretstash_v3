'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Code, Shield, Database, Zap, Download, Search, Tag, Smartphone, Lock, Eye, Copy, Plus, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DocsPage() {
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      content: [
        {
          title: 'Quick Start',
          description: 'Get up and running with SecretStash in minutes',
          steps: [
            'Navigate to the Dashboard by clicking "Vault" in the navigation',
            'Explore the sample data to understand how SecretStash works',
            'Click "Add Secret" to create your first secret',
            'Use the search and filter features to organize your data',
            'Export your secrets to PDF for backup'
          ]
        },
        {
          title: 'Demo vs Full Version',
          description: 'Understanding the difference between demo and full features',
          content: 'The current version shows demonstration data. The full version (coming soon) will include user authentication, personal data storage, and advanced features like the Finance Matrix and Code Snippets manager.'
        }
      ]
    },
    {
      id: 'secrets-vault',
      title: 'Secrets Vault',
      icon: Shield,
      content: [
        {
          title: 'Managing Secrets',
          description: 'How to add, edit, and organize your sensitive data',
          steps: [
            'Click "Add Secret" to create a new entry',
            'Choose from 6 categories: API Keys, Passwords, Domains, Databases, Certificates, Tokens',
            'Add tags for better organization (comma-separated)',
            'Use the description field for context',
            'Click the eye icon to show/hide secret values',
            'Use the copy icon for one-click clipboard copying'
          ]
        },
        {
          title: 'Search & Filter',
          description: 'Find your secrets quickly with powerful search',
          features: [
            'Search by name, description, or tags',
            'Filter by category using the dropdown',
            'Real-time results as you type',
            'Case-insensitive search'
          ]
        },
        {
          title: 'Export Options',
          description: 'Backup and share your data securely',
          content: 'Export your secrets to PDF with professional formatting. Secret values are truncated for security in exports.'
        }
      ]
    },
    {
      id: 'finance-matrix',
      title: 'Finance Matrix',
      icon: Database,
      content: [
        {
          title: 'Income Streams',
          description: 'Track all your income sources',
          features: [
            'Add salary, freelance, business, investment income',
            'Set frequency: weekly, monthly, quarterly, yearly',
            'Track status: active, inactive, pending',
            'Add links and notes for reference',
            'Organize with custom tags'
          ]
        },
        {
          title: 'Expense Flows',
          description: 'Monitor your recurring expenses',
          features: [
            'Track subscriptions, utilities, loans, insurance',
            'Set billing cycles and categories',
            'Monitor active, inactive, or cancelled expenses',
            'Add links to service providers',
            'Include notes for context'
          ]
        },
        {
          title: 'Accounts Overview',
          description: 'Manage your financial accounts',
          features: [
            'Track checking, savings, credit, investment accounts',
            'Monitor balances and institutions',
            'Link to online banking',
            'Track account status'
          ]
        }
      ]
    },
    {
      id: 'code-snippets',
      title: 'Code Snippets',
      icon: Code,
      content: [
        {
          title: 'Snippet Management',
          description: 'Store and organize your code snippets and AI prompts',
          features: [
            'Support for multiple languages: JavaScript, TypeScript, Python, HTML, CSS, Bash, JSON',
            'Special category for AI prompts',
            'Add descriptions and tags for organization',
            'Mark favorites for quick access',
            'Export your snippet library as JSON'
          ]
        },
        {
          title: 'Search & Organization',
          description: 'Find your snippets efficiently',
          features: [
            'Search by title, content, description, or tags',
            'Filter by programming language',
            'Show favorites only',
            'Real-time search results'
          ]
        }
      ]
    },
    {
      id: 'privacy-security',
      title: 'Privacy & Security',
      icon: Lock,
      content: [
        {
          title: '100% Local Storage',
          description: 'Your data stays on your device',
          features: [
            'All data stored in browser localStorage only',
            'No server communication for user data',
            'No account required for demo version',
            'Complete privacy guaranteed'
          ]
        },
        {
          title: 'Security Best Practices',
          description: 'Keep your data safe',
          recommendations: [
            'Replace demo data with your real secrets',
            'Export to PDF regularly for backup',
            'Keep your device and browser updated',
            'Use strong device security (passwords, encryption)',
            'Be cautious when using on shared computers'
          ]
        }
      ]
    },
    {
      id: 'features',
      title: 'Key Features',
      icon: Smartphone,
      content: [
        {
          title: 'User Interface',
          description: 'Beautiful and intuitive design',
          features: [
            'Dark/Light theme toggle',
            'Responsive design for all devices',
            'Custom cosmic cursor with glow effects',
            'Floating particle animations',
            'Glass morphism UI elements',
            'Smooth Framer Motion animations'
          ]
        },
        {
          title: 'Accessibility',
          description: 'Designed for everyone',
          features: [
            'Keyboard navigation support',
            'High contrast color schemes',
            'Screen reader friendly',
            'Clear visual hierarchy',
            'Consistent interaction patterns'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 pt-24 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">
            SecretStash Documentation
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete guide to using SecretStash for managing your sensitive data, 
            finances, and code snippets with privacy and security.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="glass rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 text-center"
              >
                <section.icon className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm text-muted-foreground">{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="glass rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <section.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
                </div>

                <div className="space-y-8">
                  {section.content.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary/30 pl-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>

                      {item.steps && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Steps:</h4>
                          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            {item.steps.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {item.features && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Features:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {item.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.recommendations && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Recommendations:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {item.recommendations.map((rec, recIndex) => (
                              <li key={recIndex}>{rec}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.content && (
                        <div className="bg-muted/20 rounded-lg p-4 mt-4">
                          <p className="text-muted-foreground">{item.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Getting Help */}
        <div className="glass rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Need More Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Try the Demo</h3>
              <p className="text-muted-foreground">
                The best way to learn SecretStash is to try it yourself. Start with the demo data 
                and explore all the features.
              </p>
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400">
                <Link href="/dashboard">
                  <Shield className="h-4 w-4 mr-2" />
                  Try Demo
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Get the Full Version</h3>
              <p className="text-muted-foreground">
                Ready for the complete SecretStash experience? Check out our pricing and 
                get access to all features.
              </p>
              <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                <Link href="/pricing">
                  <Zap className="h-4 w-4 mr-2" />
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            Built with ❤️ by JULDD LLC • SecretStash v1.0.0
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Privacy
            </Link>
            <Link href="https://juldd.me" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              JULDD LLC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}