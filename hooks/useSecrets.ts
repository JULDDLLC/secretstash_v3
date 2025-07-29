import { useState, useEffect } from 'react';
import { Secret } from '@/types/secret';
import { storage } from '@/lib/storage';
import { sampleSecrets } from '@/lib/sample-data';

export const useSecrets = () => {
  const [secrets, setSecrets] = useState<Secret[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSecrets();
  }, []);

  const loadSecrets = () => {
    setLoading(true);
    let loadedSecrets = storage.getSecrets();
    
    // If no secrets exist, add sample data
    if (loadedSecrets.length === 0) {
      sampleSecrets.forEach(secret => {
        storage.addSecret(secret);
      });
      loadedSecrets = storage.getSecrets();
    }
    
    setSecrets(loadedSecrets);
    setLoading(false);
  };

  const addSecret = (secretData: Omit<Secret, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newSecret = storage.addSecret(secretData);
    setSecrets(prev => [...prev, newSecret]);
    return newSecret;
  };

  const updateSecret = (id: string, updates: Partial<Omit<Secret, 'id' | 'createdAt'>>) => {
    const updatedSecret = storage.updateSecret(id, updates);
    if (updatedSecret) {
      setSecrets(prev => prev.map(s => s.id === id ? updatedSecret : s));
    }
    return updatedSecret;
  };

  const deleteSecret = (id: string) => {
    const success = storage.deleteSecret(id);
    if (success) {
      setSecrets(prev => prev.filter(s => s.id !== id));
    }
    return success;
  };

  const clearAllSecrets = () => {
    storage.clearAllSecrets();
    setSecrets([]);
  };

  return {
    secrets,
    loading,
    addSecret,
    updateSecret,
    deleteSecret,
    clearAllSecrets,
    refreshSecrets: loadSecrets
  };
};