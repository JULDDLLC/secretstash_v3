'use client';

import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SecretCategory } from '@/types/secret';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  categoryFilter: SecretCategory | 'all';
  onCategoryChange: (value: SecretCategory | 'all') => void;
}

export const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  categoryFilter, 
  onCategoryChange 
}: SearchBarProps) => {
  const categories: { value: SecretCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Categories' },
    { value: 'api-keys', label: 'API Keys' },
    { value: 'passwords', label: 'Passwords' },
    { value: 'domains', label: 'Domains' },
    { value: 'databases', label: 'Databases' },
    { value: 'certificates', label: 'Certificates' },
    { value: 'tokens', label: 'Tokens' }
  ];

  return (
    <div className="glass rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search secrets..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
          <Select value={categoryFilter} onValueChange={onCategoryChange}>
            <SelectTrigger className="pl-10 w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};