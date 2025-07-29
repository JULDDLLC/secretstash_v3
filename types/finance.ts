export interface IncomeStream {
  id: string;
  name: string;
  type: 'salary' | 'freelance' | 'business' | 'investment' | 'other';
  amount: number;
  frequency: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  status: 'active' | 'inactive' | 'pending';
  link?: string;
  notes?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ExpenseFlow {
  id: string;
  name: string;
  type: 'subscription' | 'utility' | 'loan' | 'insurance' | 'other';
  amount: number;
  billingCycle: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  category: string;
  status: 'active' | 'inactive' | 'cancelled';
  link?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment' | 'crypto' | 'other';
  institution: string;
  balance: number;
  status: 'active' | 'inactive' | 'closed';
  link?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface HistoricalSnapshot {
  id: string;
  date: string;
  totalIncome: number;
  totalExpenses: number;
  netWorth: number;
  accountBalances: Record<string, number>;
}

export interface FinanceData {
  incomeStreams: IncomeStream[];
  expenseFlows: ExpenseFlow[];
  accounts: Account[];
  historicalData: HistoricalSnapshot[];
}