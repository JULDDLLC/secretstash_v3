'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, Copy, Download, Search, Tag, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: Lock,
      title: 'Secure Vault',
      description: 'Store API keys, passwords, certificates, and tokens with 100% local storage security.'
    },
    {
      icon: Eye,
      title: 'Privacy First',
      description: 'Your data stays local on your device. No servers, no tracking, complete privacy guaranteed.'
    },
    {
      icon: Copy,
      title: 'One-Click Copy',
      description: 'Copy secrets to clipboard with visual feedback and instant access.'
    },
    {
      icon: Download,
      title: 'Export & Backup',
      description: 'Export your data to PDF for secure backups and comprehensive reporting.'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find anything instantly with powerful search, filtering, and categorization.'
    },
    {
      icon: Tag,
      title: 'Tag System',
      description: 'Organize secrets with custom tags and intelligent categorization.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Works perfectly on desktop, tablet, and mobile with smooth performance.'
    },
    {
      icon: Shield,
      title: 'Lightning Fast',
      description: 'Instant loading, smooth performance, and responsive design across all devices.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full glass border text-sm font-semibold mb-6">
              🔒 Secure • Encrypted • Private
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 gradient-text">
              Your Digital Life,<br />
              Perfectly Organized
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              SecretStash is a privacy-first, all-in-one digital organization tool for developers, 
              engineers, and power users. Secure secrets vault with a playful, customizable cosmic interface.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-semibold mb-2">
                ✨ FREE DEMO - No Login Required
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105 cursor-pointer z-20 relative"
            >
              Try Free Demo
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 cursor-pointer z-20 relative"
            >
              Get Full Version
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <img
              src="/hero.png"
              alt="SecretStash Hero"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl glass"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of tools designed specifically for developers who value security and organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 card-hover"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Ready to Secure Your Digital Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers who trust SecretStash with their most sensitive data.
            </p>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 cursor-pointer z-20 relative inline-block"
            >
              Get Started Free
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              No account required • 100% local storage • Start in seconds
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}