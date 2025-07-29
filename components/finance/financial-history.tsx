'use client';

import { HistoricalSnapshot } from '@/types/finance';

interface FinancialHistoryProps {
  historicalData: HistoricalSnapshot[];
}

export const FinancialHistory = ({ historicalData }: FinancialHistoryProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-foreground mb-6">Financial History</h2>
      
      {historicalData.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No historical data yet</p>
          <p className="text-sm">Financial snapshots will appear here over time</p>
        </div>
      ) : (
        <div className="space-y-4">
          {historicalData.slice(-10).reverse().map((snapshot) => (
            <div key={snapshot.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {new Date(snapshot.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Net Worth: ${snapshot.netWorth.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-green-400">+${snapshot.totalIncome.toLocaleString()}</p>
                  <p className="text-red-400">-${snapshot.totalExpenses.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};