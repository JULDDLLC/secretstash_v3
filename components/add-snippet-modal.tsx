'use client';

import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Snippet } from '@/types/snippet';

interface AddSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (snippet: Omit<Snippet, 'id' | 'createdAt' | 'updatedAt'>) => void;
  editingSnippet?: Snippet;
}

export const AddSnippetModal = ({ isOpen, onClose, onSave, editingSnippet }: AddSnippetModalProps) => {
  const [formData, setFormData] = useState({
    title: editingSnippet?.title || '',
    language: editingSnippet?.language || 'javascript',
    content: editingSnippet?.content || '',
    description: editingSnippet?.description || '',
    tags: editingSnippet?.tags.join(', ') || '',
    isFavorite: editingSnippet?.isFavorite || false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'bash', label: 'Bash' },
    { value: 'json', label: 'JSON' },
    { value: 'prompt', label: 'AI Prompt' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const tags = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    onSave({
      title: formData.title.trim(),
      language: formData.language,
      content: formData.content.trim(),
      description: formData.description.trim(),
      tags,
      isFavorite: formData.isFavorite
    });

    // Reset form
    setFormData({
      title: '',
      language: 'javascript',
      content: '',
      description: '',
      tags: '',
      isFavorite: false
    });
    setErrors({});
    onClose();
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative glass rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold gradient-text">
            {editingSnippet ? 'Edit Snippet' : 'Add New Snippet'}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="e.g., React useEffect Hook"
              className={errors.title ? 'border-red-500' : ''}
            />
            {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Language */}
          <div>
            <Label htmlFor="language">Language</Label>
            <Select value={formData.language} onValueChange={(value) => handleChange('language', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map(lang => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Content */}
          <div>
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Enter your code snippet or prompt..."
              rows={8}
              className={`font-mono text-sm ${errors.content ? 'border-red-500' : ''}`}
            />
            {errors.content && <p className="text-red-400 text-xs mt-1">{errors.content}</p>}
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              type="text"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Optional description..."
            />
          </div>

          {/* Tags */}
          <div>
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              type="text"
              value={formData.tags}
              onChange={(e) => handleChange('tags', e.target.value)}
              placeholder="react, hooks, frontend (comma separated)"
            />
            <p className="text-xs text-muted-foreground mt-1">Separate tags with commas</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
            >
              <Plus className="w-4 h-4 mr-2" />
              {editingSnippet ? 'Update Snippet' : 'Add Snippet'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};