'use client';

import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import { FinanceData } from '@/types/finance';

interface FinanceMatrixTableProps {
  data: FinanceData;
  onExport: () => void;
}

export const FinanceMatrixTable = ({ data, onExport }: FinanceMatrixTableProps) => {
  const allEntries = [
    ...data.incomeStreams.map(item => ({
      name: item.name,
      type: 'Income',
      subType: item.type,
      amount: item.amount,
      frequency: item.frequency,
      status: item.status
    })),
    ...data.expenseFlows.map(item => ({
      name: item.name,
      type: 'Expense',
      subType: item.type,
      amount: item.amount,
      frequency: item.billingCycle,
      status: item.status
    })),
    ...data.accounts.map(item => ({
      name: item.name,
      type: 'Account',
      subType: item.type,
      amount: item.balance,
      frequency: 'balance',
      status: item.status
    }))
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Finance Matrix</h2>
        <Button onClick={onExport} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
              <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Frequency</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {allEntries.map((entry, index) => (
              <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4 text-foreground">{entry.name}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    entry.type === 'Income' ? 'bg-green-500/20 text-green-400' :
                    entry.type === 'Expense' ? 'bg-red-500/20 text-red-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {entry.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-muted-foreground capitalize">{entry.subType}</td>
                <td className="py-3 px-4 text-right font-mono text-foreground">
                  ${entry.amount.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-muted-foreground capitalize">{entry.frequency}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    entry.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {allEntries.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No financial data yet</p>
            <p className="text-sm">Add income streams, expenses, or accounts to see them here</p>
          </div>
        )}
      </div>
    </div>
  );
};