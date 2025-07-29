'use client';

import { useState } from 'react';
import { Eye, EyeOff, Copy, Edit, Trash2, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Secret } from '@/types/secret';

interface SecretCardProps {
  secret: Secret;
  onEdit: () => void;
  onDelete: () => void;
}

export const SecretCard = ({ secret, onEdit, onDelete }: SecretCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(secret.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'api-keys': '🔑',
      'passwords': '🔒',
      'domains': '🌐',
      'databases': '🗄️',
      'certificates': '📜',
      'tokens': '🎫'
    };
    return icons[category] || '🔐';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'api-keys': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'passwords': 'bg-red-500/20 text-red-400 border-red-500/30',
      'domains': 'bg-green-500/20 text-green-400 border-green-500/30',
      'databases': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'certificates': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'tokens': 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <div className="glass rounded-xl p-6 card-hover group relative">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getCategoryIcon(secret.category)}</span>
          <div>
            <h3 className="font-semibold text-lg">{secret.name}</h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(secret.category)}`}>
              {secret.category.replace('-', ' ').toUpperCase()}
            </span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(!isVisible)}
            title={isVisible ? 'Hide value' : 'Show value'}
          >
            {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className={copied ? 'bg-green-500 text-white' : ''}
            title="Copy to clipboard"
          >
            <Copy className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onEdit}
            title="Edit secret"
          >
            <Edit className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-red-400 hover:bg-red-500/20"
            title="Delete secret"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Description */}
      {secret.description && (
        <p className="text-muted-foreground text-sm mb-4">{secret.description}</p>
      )}

      {/* Value */}
      <div className="mb-4">
        <label className="text-xs font-medium text-muted-foreground mb-2 block">SECRET VALUE</label>
        <div className="bg-input border border-border rounded-lg p-3 font-mono text-sm">
          {isVisible ? (
            <span className="break-all">{secret.value}</span>
          ) : (
            <span className="text-muted-foreground">{'•'.repeat(Math.min(secret.value.length, 20))}</span>
          )}
        </div>
      </div>

      {/* Tags */}
      {secret.tags.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            <Tag className="w-3 h-3 text-muted-foreground" />
            {secret.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-xs text-muted-foreground border-t border-border/50 pt-3">
        <div className="flex justify-between">
          <span>Created: {new Date(secret.createdAt).toLocaleDateString()}</span>
          <span>Updated: {new Date(secret.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Copy feedback */}
      {copied && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
          Copied!
        </div>
      )}
    </div>
  );
};