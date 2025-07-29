'use client';

import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Secret, SecretCategory, SecretFormData } from '@/types/secret';

interface AddSecretModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (secret: Omit<Secret, 'id' | 'createdAt' | 'updatedAt'>) => void;
  editingSecret?: Secret;
}

export const AddSecretModal = ({ isOpen, onClose, onSave, editingSecret }: AddSecretModalProps) => {
  const [formData, setFormData] = useState<SecretFormData>({
    name: editingSecret?.name || '',
    category: editingSecret?.category || 'api-keys',
    value: editingSecret?.value || '',
    description: editingSecret?.description || '',
    tags: editingSecret?.tags.join(', ') || ''
  });

  const [errors, setErrors] = useState<Partial<SecretFormData>>({});

  const categories: { value: SecretCategory; label: string; icon: string }[] = [
    { value: 'api-keys', label: 'API Keys', icon: '🔑' },
    { value: 'passwords', label: 'Passwords', icon: '🔒' },
    { value: 'domains', label: 'Domains', icon: '🌐' },
    { value: 'databases', label: 'Databases', icon: '🗄️' },
    { value: 'certificates', label: 'Certificates', icon: '📜' },
    { value: 'tokens', label: 'Tokens', icon: '🎫' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<SecretFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Secret name is required';
    }

    if (!formData.value.trim()) {
      newErrors.value = 'Secret value is required';
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
      name: formData.name.trim(),
      category: formData.category,
      value: formData.value.trim(),
      description: formData.description.trim(),
      tags
    });

    // Reset form
    setFormData({
      name: '',
      category: 'api-keys',
      value: '',
      description: '',
      tags: ''
    });
    setErrors({});
    onClose();
  };

  const handleChange = (field: keyof SecretFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
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
      <div className="relative glass rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold gradient-text">
            {editingSecret ? 'Edit Secret' : 'Add New Secret'}
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
          {/* Name */}
          <div>
            <Label htmlFor="name">Secret Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="e.g., Stripe API Key"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.icon} {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Value */}
          <div>
            <Label htmlFor="value">Secret Value *</Label>
            <Textarea
              id="value"
              value={formData.value}
              onChange={(e) => handleChange('value', e.target.value)}
              placeholder="Enter your secret value..."
              rows={3}
              className={`font-mono text-sm ${errors.value ? 'border-red-500' : ''}`}
            />
            {errors.value && <p className="text-red-400 text-xs mt-1">{errors.value}</p>}
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
              placeholder="production, stripe, payments (comma separated)"
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
              {editingSecret ? 'Update Secret' : 'Add Secret'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};