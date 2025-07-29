'use client';

import { Search, Filter, Heart } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

interface SnippetSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  languageFilter: string;
  onLanguageChange: (value: string) => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
}

export const SnippetSearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  languageFilter, 
  onLanguageChange,
  showFavoritesOnly,
  onToggleFavorites
}: SnippetSearchBarProps) => {
  const languages = [
    { value: 'all', label: 'All Languages' },
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

  return (
    <div className="glass rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search snippets..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-4">
          {/* Language Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
            <Select value={languageFilter} onValueChange={onLanguageChange}>
              <SelectTrigger className="pl-10 w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map(language => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Favorites Toggle */}
          <Button
            variant={showFavoritesOnly ? "default" : "outline"}
            onClick={onToggleFavorites}
            className="flex items-center gap-2"
          >
            <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
            Favorites
          </Button>
        </div>
      </div>
    </div>
  );
};