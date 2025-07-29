import { FinanceData, IncomeStream, ExpenseFlow, Account, HistoricalSnapshot } from '@/types/finance';

const STORAGE_KEY = 'secretstash_finance';

const sampleData: FinanceData = {
  incomeStreams: [
    {
      id: '1',
      name: 'Software Engineer Salary',
      type: 'salary',
      amount: 8500,
      frequency: 'monthly',
      status: 'active',
      tags: ['primary', 'tech'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  expenseFlows: [
    {
      id: '1',
      name: 'Netflix Subscription',
      type: 'subscription',
      amount: 15.99,
      billingCycle: 'monthly',
      category: 'Entertainment',
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  accounts: [
    {
      id: '1',
      name: 'Main Checking',
      type: 'checking',
      institution: 'Chase Bank',
      balance: 5000,
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  historicalData: []
};

export const getFinanceData = (): FinanceData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData));
      return sampleData;
    }
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading finance data:', error);
    return sampleData;
  }
};

export const saveFinanceData = (data: FinanceData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving finance data:', error);
  }
};

export const addIncomeStream = (income: IncomeStream): void => {
  const data = getFinanceData();
  data.incomeStreams.push(income);
  saveFinanceData(data);
};

export const updateIncomeStream = (id: string, income: IncomeStream): void => {
  const data = getFinanceData();
  const index = data.incomeStreams.findIndex(i => i.id === id);
  if (index !== -1) {
    data.incomeStreams[index] = income;
    saveFinanceData(data);
  }
};

export const deleteIncomeStream = (id: string): void => {
  const data = getFinanceData();
  data.incomeStreams = data.incomeStreams.filter(i => i.id !== id);
  saveFinanceData(data);
};

export const addExpenseFlow = (expense: ExpenseFlow): void => {
  const data = getFinanceData();
  data.expenseFlows.push(expense);
  saveFinanceData(data);
};

export const updateExpenseFlow = (id: string, expense: ExpenseFlow): void => {
  const data = getFinanceData();
  const index = data.expenseFlows.findIndex(e => e.id === id);
  if (index !== -1) {
    data.expenseFlows[index] = expense;
    saveFinanceData(data);
  }
};

export const deleteExpenseFlow = (id: string): void => {
  const data = getFinanceData();
  data.expenseFlows = data.expenseFlows.filter(e => e.id !== id);
  saveFinanceData(data);
};

export const addAccount = (account: Account): void => {
  const data = getFinanceData();
  data.accounts.push(account);
  saveFinanceData(data);
};

export const updateAccount = (id: string, account: Account): void => {
  const data = getFinanceData();
  const index = data.accounts.findIndex(a => a.id === id);
  if (index !== -1) {
    data.accounts[index] = account;
    saveFinanceData(data);
  }
};

export const deleteAccount = (id: string): void => {
  const data = getFinanceData();
  data.accounts = data.accounts.filter(a => a.id !== id);
  saveFinanceData(data);
};

export const calculateAndSaveSnapshot = (): void => {
  const data = getFinanceData();
  
  const totalIncome = data.incomeStreams
    .filter(i => i.status === 'active')
    .reduce((sum, i) => sum + i.amount, 0);
    
  const totalExpenses = data.expenseFlows
    .filter(e => e.status === 'active')
    .reduce((sum, e) => sum + e.amount, 0);
    
  const netWorth = data.accounts
    .filter(a => a.status === 'active')
    .reduce((sum, a) => sum + a.balance, 0);
    
  const accountBalances = data.accounts.reduce((acc, account) => {
    acc[account.id] = account.balance;
    return acc;
  }, {} as Record<string, number>);

  const snapshot: HistoricalSnapshot = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    totalIncome,
    totalExpenses,
    netWorth,
    accountBalances
  };

  data.historicalData.push(snapshot);
  
  // Keep only last 30 snapshots
  if (data.historicalData.length > 30) {
    data.historicalData = data.historicalData.slice(-30);
  }
  
  saveFinanceData(data);
};