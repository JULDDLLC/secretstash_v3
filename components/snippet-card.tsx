'use client';

import { useState } from 'react';
import { Eye, EyeOff, Copy, Edit, Trash2, Heart, Code, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Snippet } from '@/types/snippet';

interface SnippetCardProps {
  snippet: Snippet;
  onEdit: () => void;
  onDelete: () => void;
  onToggleFavorite: () => void;
}

export const SnippetCard = ({ snippet, onEdit, onDelete, onToggleFavorite }: SnippetCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getLanguageIcon = (language: string) => {
    const icons: Record<string, any> = {
      'javascript': Code,
      'typescript': Code,
      'python': Code,
      'html': FileText,
      'css': FileText,
      'prompt': FileText,
      'bash': Code,
      'json': FileText,
    };
    const IconComponent = icons[language] || Code;
    return <IconComponent className="w-4 h-4" />;
  };

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      'javascript': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'typescript': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'python': 'bg-green-500/20 text-green-400 border-green-500/30',
      'html': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'css': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'prompt': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'bash': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      'json': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    };
    return colors[language] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <div className="glass rounded-xl p-6 card-hover group relative">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1">
          {getLanguageIcon(snippet.language)}
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{snippet.title}</h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getLanguageColor(snippet.language)}`}>
              {snippet.language.toUpperCase()}
            </span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleFavorite}
            className={snippet.isFavorite ? 'text-red-400' : ''}
            title={snippet.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${snippet.isFavorite ? 'fill-current' : ''}`} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(!isVisible)}
            title={isVisible ? 'Hide content' : 'Show content'}
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
            title="Edit snippet"
          >
            <Edit className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-red-400 hover:bg-red-500/20"
            title="Delete snippet"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Description */}
      {snippet.description && (
        <p className="text-muted-foreground text-sm mb-4">{snippet.description}</p>
      )}

      {/* Content */}
      <div className="mb-4">
        <label className="text-xs font-medium text-muted-foreground mb-2 block">CONTENT</label>
        <div className="bg-input border border-border rounded-lg p-3 font-mono text-sm max-h-32 overflow-y-auto">
          {isVisible ? (
            <pre className="whitespace-pre-wrap break-words">{snippet.content}</pre>
          ) : (
            <span className="text-muted-foreground">Click the eye icon to view content</span>
          )}
        </div>
      </div>

      {/* Tags */}
      {snippet.tags.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            {snippet.tags.map((tag, index) => (
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
          <span>Created: {new Date(snippet.createdAt).toLocaleDateString()}</span>
          <span>Updated: {new Date(snippet.updatedAt).toLocaleDateString()}</span>
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