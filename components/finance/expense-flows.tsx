'use client';

import { Plus, Edit, Trash2, TrendingDown } from 'lucide-react';
import { Button } from '../ui/button';
import { ExpenseFlow } from '@/types/finance';

interface ExpenseFlowsProps {
  expenseFlows: ExpenseFlow[];
  onAdd: () => void;
  onEdit: (expense: ExpenseFlow) => void;
  onDelete: (id: string) => void;
}

export const ExpenseFlows = ({ expenseFlows, onAdd, onEdit, onDelete }: ExpenseFlowsProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <TrendingDown className="h-6 w-6 text-red-400" />
          <h2 className="text-xl font-bold text-foreground">Expense Flows</h2>
        </div>
        <Button onClick={onAdd} size="sm" className="bg-red-500 hover:bg-red-600">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>
      
      <div className="space-y-3">
        {expenseFlows.map((expense) => (
          <div key={expense.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{expense.name}</h3>
                <p className="text-sm text-muted-foreground">{expense.category}</p>
                <p className="text-lg font-bold text-red-400">
                  ${expense.amount.toLocaleString()}/{expense.billingCycle}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(expense)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(expense.id)}
                  className="text-red-400 hover:bg-red-500/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {expenseFlows.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <TrendingDown className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No expense flows yet</p>
            <p className="text-sm">Add your first expense</p>
          </div>
        )}
      </div>
    </div>
  );
};