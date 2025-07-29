'use client';

import { Plus, Edit, Trash2, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { IncomeStream } from '@/types/finance';

interface IncomeStreamsProps {
  incomeStreams: IncomeStream[];
  onAdd: () => void;
  onEdit: (income: IncomeStream) => void;
  onDelete: (id: string) => void;
}

export const IncomeStreams = ({ incomeStreams, onAdd, onEdit, onDelete }: IncomeStreamsProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-6 w-6 text-green-400" />
          <h2 className="text-xl font-bold text-foreground">Income Streams</h2>
        </div>
        <Button onClick={onAdd} size="sm" className="bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>
      
      <div className="space-y-3">
        {incomeStreams.map((income) => (
          <div key={income.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{income.name}</h3>
                <p className="text-sm text-muted-foreground">{income.type}</p>
                <p className="text-lg font-bold text-green-400">
                  ${income.amount.toLocaleString()}/{income.frequency}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(income)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(income.id)}
                  className="text-red-400 hover:bg-red-500/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {incomeStreams.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No income streams yet</p>
            <p className="text-sm">Add your first income source</p>
          </div>
        )}
      </div>
    </div>
  );
};