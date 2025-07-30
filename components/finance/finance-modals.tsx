import { useState } from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

// Define allowed income types
export type IncomeType = 'salary' | 'freelance' | 'business' | 'investment' | 'other';

// Define allowed frequency types
export type FrequencyType = 'weekly' | 'monthly' | 'quarterly' | 'yearly';

// Define form data shape
interface FormData {
  name: string;
  type: IncomeType;
  amount: number;
  frequency: FrequencyType;
}

export function IncomeModal() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    type: 'salary',
    amount: 0,
    frequency: 'monthly',
  });

  return (
    <div>
      <Label htmlFor="type">Type</Label>
      <Select
        value={formData.type}
        onValueChange={(value) =>
          setFormData((prev) => ({ ...prev, type: value as IncomeType }))
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select income type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="salary">Salary</SelectItem>
          <SelectItem value="freelance">Freelance</SelectItem>
          <SelectItem value="business">Business</SelectItem>
          <SelectItem value="investment">Investment</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}