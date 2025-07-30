// types/finance.ts
export type IncomeType = 'salary' | 'freelance' | 'business' | 'investment' | 'other';
export type ExpenseCategory =
  | 'subscription'
  | 'utility'
  | 'loan'
  | 'insurance'
  | 'other';
export type AccountType =
  | 'checking'
  | 'savings'
  | 'credit'
  | 'investment'
  | 'crypto'
  | 'other';

/* data models ------------------------------------------------------ */
export interface IncomeStream {
  id: string;
  name: string;
  type: IncomeType;
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
  type: ExpenseCategory;
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
  type: AccountType;
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

/* modal‑prop interfaces ------------------------------------------- */
export interface IncomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Omit<IncomeStream, 'id' | 'createdAt' | 'updatedAt'>) => void;
  editingIncome?: IncomeStream;
}

export interface ExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Omit<ExpenseFlow, 'id' | 'createdAt' | 'updatedAt'>) => void;
  editingExpense?: ExpenseFlow;
}

export interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Omit<Account, 'id' | 'createdAt' | 'updatedAt'>) => void;
  editingAccount?: Account;
}