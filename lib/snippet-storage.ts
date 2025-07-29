import { Snippet } from '@/types/snippet';

const STORAGE_KEY = 'secretstash_snippets';

// Sample snippets for demonstration
const sampleSnippets: Omit<Snippet, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'React useEffect Hook',
    language: 'javascript',
    content: `useEffect(() => {
  // Effect logic here
  console.log('Component mounted or updated');
  
  // Cleanup function
  return () => {
    console.log('Cleanup');
  };
}, [dependency]); // Dependency array`,
    description: 'Basic useEffect hook pattern with cleanup',
    tags: ['react', 'hooks', 'useEffect'],
    isFavorite: true
  },
  {
    title: 'TypeScript Interface',
    language: 'typescript',
    content: `interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  roles: string[];
}

// Usage
const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  roles: ['admin']
};`,
    description: 'TypeScript interface definition example',
    tags: ['typescript', 'interface', 'types'],
    isFavorite: false
  },
  {
    title: 'Python List Comprehension',
    language: 'python',
    content: `# Basic list comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]`,
    description: 'Python list comprehension examples',
    tags: ['python', 'comprehension', 'lists'],
    isFavorite: true
  },
  {
    title: 'CSS Flexbox Center',
    language: 'css',
    content: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.item {
  /* This will be perfectly centered */
  background: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
}`,
    description: 'Perfect centering with CSS Flexbox',
    tags: ['css', 'flexbox', 'centering'],
    isFavorite: false
  },
  {
    title: 'AI Code Review Prompt',
    language: 'prompt',
    content: `Please review the following code and provide feedback on:

1. Code quality and best practices
2. Performance optimizations
3. Security considerations
4. Readability and maintainability
5. Potential bugs or edge cases

Code to review:
[PASTE CODE HERE]

Please provide specific suggestions with examples where applicable.`,
    description: 'Comprehensive AI prompt for code reviews',
    tags: ['ai', 'code-review', 'prompt'],
    isFavorite: true
  },
  {
    title: 'Git Workflow Commands',
    language: 'bash',
    content: `# Create and switch to new branch
git checkout -b feature/new-feature

# Stage and commit changes
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/new-feature

# Merge to main
git checkout main
git merge feature/new-feature
git push origin main

# Clean up
git branch -d feature/new-feature`,
    description: 'Common Git workflow commands',
    tags: ['git', 'workflow', 'commands'],
    isFavorite: false
  }
];

export const getSnippets = (): Snippet[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Initialize with sample data
      const initialSnippets = sampleSnippets.map(snippet => ({
        ...snippet,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSnippets));
      return initialSnippets;
    }
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading snippets:', error);
    return [];
  }
};

export const addSnippet = (snippet: Snippet): void => {
  try {
    const snippets = getSnippets();
    snippets.push(snippet);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
  } catch (error) {
    console.error('Error adding snippet:', error);
  }
};

export const updateSnippet = (id: string, updatedSnippet: Snippet): void => {
  try {
    const snippets = getSnippets();
    const index = snippets.findIndex(s => s.id === id);
    if (index !== -1) {
      snippets[index] = updatedSnippet;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
    }
  } catch (error) {
    console.error('Error updating snippet:', error);
  }
};

export const deleteSnippet = (id: string): void => {
  try {
    const snippets = getSnippets();
    const filtered = snippets.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting snippet:', error);
  }
};

export const toggleSnippetFavorite = (id: string): void => {
  try {
    const snippets = getSnippets();
    const snippet = snippets.find(s => s.id === id);
    if (snippet) {
      snippet.isFavorite = !snippet.isFavorite;
      snippet.updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
    }
  } catch (error) {
    console.error('Error toggling favorite:', error);
  }
};