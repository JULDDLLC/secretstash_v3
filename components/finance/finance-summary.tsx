'use client';

import { TrendingUp, TrendingDown, Wallet, DollarSign } from 'lucide-react';
import { FinanceData } from '@/types/finance';

interface FinanceSummaryProps {
  data: FinanceData;
}

export const FinanceSummary = ({ data }: FinanceSummaryProps) => {
  const totalIncome = data.incomeStreams
    .filter(i => i.status === 'active')
    .reduce((sum, i) => sum + i.amount, 0);
    
  const totalExpenses = data.expenseFlows
    .filter(e => e.status === 'active')
    .reduce((sum, e) => sum + e.amount, 0);
    
  const netWorth = data.accounts
    .filter(a => a.status === 'active')
    .reduce((sum, a) => sum + a.balance, 0);
    
  const netIncome = totalIncome - totalExpenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Income</p>
            <p className="text-2xl font-bold text-green-400">${totalIncome.toLocaleString()}</p>
          </div>
          <TrendingUp className="h-8 w-8 text-green-400" />
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Expenses</p>
            <p className="text-2xl font-bold text-red-400">${totalExpenses.toLocaleString()}</p>
          </div>
          <TrendingDown className="h-8 w-8 text-red-400" />
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm">Net Income</p>
            <p className={`text-2xl font-bold ${netIncome >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              ${netIncome.toLocaleString()}
            </p>
          </div>
          <DollarSign className="h-8 w-8 text-cyan-400" />
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm">Net Worth</p>
            <p className="text-2xl font-bold text-purple-400">${netWorth.toLocaleString()}</p>
          </div>
          <Wallet className="h-8 w-8 text-purple-400" />
        </div>
      </div>
    </div>
  );
};