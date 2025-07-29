'use client';

import Link from 'next/link';
import { Home, Search, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="text-9xl font-bold gradient-text mb-4">404</div>
          <div className="flex justify-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-cyan-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="h-8 w-8 text-purple-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            >
              <Search className="h-8 w-8 text-pink-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Oops! You've Drifted Into the Void
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            This page seems to have vanished into the cosmic depths of the SecretStash multiverse. 
            Even our best quantum scanners can't locate it!
          </p>
          
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mb-6">
            <p className="text-cyan-300 italic">
              "Not all who wander are lost, but this page definitely is." - Julie, probably
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Return to Base
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
              <Link href="/dashboard">
                <Shield className="h-4 w-4 mr-2" />
                Access Vault
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
        >
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">∞</div>
            <div className="text-sm text-muted-foreground">Parallel Universes</div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400">42</div>
            <div className="text-sm text-muted-foreground">Answer to Everything</div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-bold text-cyan-400">1</div>
            <div className="text-sm text-muted-foreground">Lost Page (This One)</div>
          </div>
        </motion.div>

        {/* Hidden Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8"
        >
          <p className="text-xs text-muted-foreground">
            🕵️‍♀️ Psst... Check the browser console for a special message from Julie!
          </p>
        </motion.div>
      </div>
    </div>
  );
}