'use client';

import { useState } from 'react';
import { Plus, Download, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SecretCard } from '@/components/secret-card';
import { AddSecretModal } from '@/components/add-secret-modal';
import { SearchBar } from '@/components/search-bar';
import { useSecrets } from '@/hooks/useSecrets';
import { exportToPDF } from '@/lib/pdf-export';
import { Secret, SecretCategory } from '@/types/secret';

export default function DashboardPage() {
  const { secrets, loading, addSecret, updateSecret, deleteSecret } = useSecrets();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingSecret, setEditingSecret] = useState<Secret | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<SecretCategory | 'all'>('all');

  const filteredSecrets = secrets.filter(secret => {
    const matchesSearch = secret.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         secret.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         secret.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || secret.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const handleExportPDF = () => {
    exportToPDF(filteredSecrets);
  };

  const handleAddSecret = (secretData: Omit<Secret, 'id' | 'createdAt' | 'updatedAt'>) => {
    addSecret(secretData);
    setIsAddModalOpen(false);
  };

  const handleEditSecret = (secret: Secret) => {
    setEditingSecret(secret);
    setIsAddModalOpen(true);
  };

  const handleUpdateSecret = (secretData: Omit<Secret, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingSecret) {
      updateSecret(editingSecret.id, secretData);
      setEditingSecret(null);
      setIsAddModalOpen(false);
    }
  };

  const handleDeleteSecret = (id: string) => {
    deleteSecret(id);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setEditingSecret(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your secrets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Demo Data Warning */}
        <div className="demo-warning rounded-xl p-4 mb-8 border">
          <div className="flex items-center space-x-3">
            <span className="demo-badge px-3 py-1 rounded-full text-sm">DEMO DATA</span>
            <div>
              <p className="font-semibold text-foreground">You're viewing sample data</p>
              <p className="text-sm text-muted-foreground">
                This vault contains demonstration secrets. In a real app, you'd need to authenticate to access your personal data.
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 gradient-text">
            Your Secret Vault
          </h1>
          <p className="text-muted-foreground">
            Manage your sensitive data with complete privacy and security
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
          />
          
          <div className="flex gap-3 justify-end mt-4">
            <Button
              onClick={handleExportPDF}
              variant="outline"
              className="z-20 relative cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            
            <Button
              onClick={() => setIsAddModalOpen(true)}
              className="z-20 relative cursor-pointer"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Secret
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{secrets.length}</div>
            <div className="text-muted-foreground">Total Secrets</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{filteredSecrets.length}</div>
            <div className="text-muted-foreground">Filtered Results</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {new Set(secrets.map(s => s.category)).size}
            </div>
            <div className="text-muted-foreground">Categories Used</div>
          </div>
        </motion.div>

        {/* Secrets Grid */}
        {filteredSecrets.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-16"
          >
            <div className="glass rounded-xl p-12 max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No secrets found</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm || categoryFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'Add your first secret to get started'
                }
              </p>
              {!searchTerm && categoryFilter === 'all' && (
                <Button
                  onClick={() => setIsAddModalOpen(true)}
                  className="z-20 relative cursor-pointer"
                >
                  Add Your First Secret
                </Button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSecrets.map((secret, index) => (
              <motion.div
                key={secret.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SecretCard
                  secret={secret}
                  onEdit={() => handleEditSecret(secret)}
                  onDelete={() => handleDeleteSecret(secret.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AddSecretModal
        isOpen={isAddModalOpen}
        onClose={handleCloseModal}
        onSave={editingSecret ? handleUpdateSecret : handleAddSecret}
        editingSecret={editingSecret || undefined}
      />
    </div>
  );
}