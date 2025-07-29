'use client';

import { Plus, Edit, Trash2, Wallet } from 'lucide-react';
import { Button } from '../ui/button';
import { Account } from '@/types/finance';

interface AccountsProps {
  accounts: Account[];
  onAdd: () => void;
  onEdit: (account: Account) => void;
  onDelete: (id: string) => void;
}

export const Accounts = ({ accounts, onAdd, onEdit, onDelete }: AccountsProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Wallet className="h-6 w-6 text-purple-400" />
          <h2 className="text-xl font-bold text-foreground">Accounts</h2>
        </div>
        <Button onClick={onAdd} size="sm" className="bg-purple-500 hover:bg-purple-600">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>
      
      <div className="space-y-3">
        {accounts.map((account) => (
          <div key={account.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{account.name}</h3>
                <p className="text-sm text-muted-foreground">{account.institution}</p>
                <p className="text-lg font-bold text-purple-400">
                  ${account.balance.toLocaleString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(account)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(account.id)}
                  className="text-red-400 hover:bg-red-500/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {accounts.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Wallet className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No accounts yet</p>
            <p className="text-sm">Add your first account</p>
          </div>
        )}
      </div>
    </div>
  );
};