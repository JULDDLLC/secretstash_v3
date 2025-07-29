import { Secret } from '@/types/secret';

const STORAGE_KEY = 'secretstash_secrets';

export const storage = {
  getSecrets(): Secret[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];
      
      const secrets = JSON.parse(data);
      return secrets.map((secret: any) => ({
        ...secret,
        createdAt: new Date(secret.createdAt),
        updatedAt: new Date(secret.updatedAt),
      }));
    } catch (error) {
      console.error('Error loading secrets:', error);
      return [];
    }
  },

  saveSecrets(secrets: Secret[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(secrets));
    } catch (error) {
      console.error('Error saving secrets:', error);
    }
  },

  addSecret(secret: Omit<Secret, 'id' | 'createdAt' | 'updatedAt'>): Secret {
    const newSecret: Secret = {
      ...secret,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const secrets = this.getSecrets();
    secrets.push(newSecret);
    this.saveSecrets(secrets);
    
    return newSecret;
  },

  updateSecret(id: string, updates: Partial<Omit<Secret, 'id' | 'createdAt'>>): Secret | null {
    const secrets = this.getSecrets();
    const index = secrets.findIndex(s => s.id === id);
    
    if (index === -1) return null;
    
    secrets[index] = {
      ...secrets[index],
      ...updates,
      updatedAt: new Date(),
    };
    
    this.saveSecrets(secrets);
    return secrets[index];
  },

  deleteSecret(id: string): boolean {
    const secrets = this.getSecrets();
    const filteredSecrets = secrets.filter(s => s.id !== id);
    
    if (filteredSecrets.length === secrets.length) return false;
    
    this.saveSecrets(filteredSecrets);
    return true;
  },

  clearAllSecrets(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
};