"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  IncomeModalProps,
  ExpenseModalProps,
  AccountModalProps,
  IncomeType,
  ExpenseCategory,
  AccountType,
} from "@/types/finance";

/*────────────────────────  INCOME  ────────────────────────────────*/
export function IncomeModal({
  isOpen,
  onClose,
  onSave,
  editingIncome,
}: IncomeModalProps) {
  const [formData, setFormData] = useState<Omit<
    Parameters<IncomeModalProps["onSave"]>[0],
    never
  >>({
    name: "",
    type: "salary",
    amount: 0,
    frequency: "monthly",
    status: "active",
    link: "",
    notes: "",
    tags: [],
  });

  useEffect(() => {
    if (editingIncome) {
      // strip id/createdAt/updatedAt
      const { id, createdAt, updatedAt, ...rest } = editingIncome;
      setFormData(rest);
    } else {
      setFormData({
        name: "",
        type: "salary",
        amount: 0,
        frequency: "monthly",
        status: "active",
        link: "",
        notes: "",
        tags: [],
      });
    }
  }, [editingIncome, isOpen]);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingIncome ? "Edit Income" : "Add Income"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Label>Name</Label>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <Label>Type</Label>
          <Select
            value={formData.type}
            onValueChange={(v) =>
              setFormData({ ...formData, type: v as IncomeType })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["salary", "freelance", "business", "investment", "other"].map(
                (t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>

          <Label>Amount</Label>
          <Input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: parseFloat(e.target.value) || 0,
              })
            }
          />

          <Label>Frequency</Label>
          <Select
            value={formData.frequency}
            onValueChange={(v) =>
              setFormData({ ...formData, frequency: v })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["weekly", "monthly", "quarterly", "yearly"].map((f) => (
                <SelectItem key={f} value={f}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button onClick={handleSave}>
            {editingIncome ? "Update" : "Save"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/*───────────────────────  EXPENSE  ────────────────────────────────*/
export function ExpenseModal({
  isOpen,
  onClose,
  onSave,
  editingExpense,
}: ExpenseModalProps) {
  const [formData, setFormData] = useState<Omit<
    Parameters<ExpenseModalProps["onSave"]>[0],
    never
  >>({
    name: "",
    type: "other",
    amount: 0,
    billingCycle: "monthly",
    category: "",
    status: "active",
    link: "",
    notes: "",
  });

  useEffect(() => {
    if (editingExpense) {
      const { id, createdAt, updatedAt, ...rest } = editingExpense;
      setFormData(rest);
    } else {
      setFormData({
        name: "",
        type: "other",
        amount: 0,
        billingCycle: "monthly",
        category: "",
        status: "active",
        link: "",
        notes: "",
      });
    }
  }, [editingExpense, isOpen]);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingExpense ? "Edit Expense" : "Add Expense"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Label>Name</Label>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <Label>Type</Label>
          <Select
            value={formData.type}
            onValueChange={(v) =>
              setFormData({ ...formData, type: v as ExpenseCategory })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[
                "subscription",
                "utility",
                "loan",
                "insurance",
                "other",
              ].map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Label>Billing Cycle</Label>
          <Select
            value={formData.billingCycle}
            onValueChange={(v) =>
              setFormData({ ...formData, billingCycle: v })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["weekly", "monthly", "quarterly", "yearly"].map((f) => (
                <SelectItem key={f} value={f}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Label>Category</Label>
          <Input
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />

          <Label>Amount</Label>
          <Input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: parseFloat(e.target.value) || 0,
              })
            }
          />

          <Button onClick={handleSave}>
            {editingExpense ? "Update" : "Save"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/*───────────────────────  ACCOUNT  ────────────────────────────────*/
export function AccountModal({
  isOpen,
  onClose,
  onSave,
  editingAccount,
}: AccountModalProps) {
  const [formData, setFormData] = useState<Omit<
    Parameters<AccountModalProps["onSave"]>[0],
    never
  >>({
    name: "",
    type: "checking",
    institution: "",
    balance: 0,
    status: "active",
    link: "",
    notes: "",
  });

  useEffect(() => {
    if (editingAccount) {
      const { id, createdAt, updatedAt, ...rest } = editingAccount;
      setFormData(rest);
    } else {
      setFormData({
        name: "",
        type: "checking",
        institution: "",
        balance: 0,
        status: "active",
        link: "",
        notes: "",
      });
    }
  }, [editingAccount, isOpen]);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingAccount ? "Edit Account" : "Add Account"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Label>Name</Label>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <Label>Institution</Label>
          <Input
            value={formData.institution}
            onChange={(e) =>
              setFormData({ ...formData, institution: e.target.value })
            }
          />

          <Label>Type</Label>
          <Select
            value={formData.type}
            onValueChange={(v) =>
              setFormData({ ...formData, type: v as AccountType })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[
                "checking",
                "savings",
                "credit",
                "investment",
                "crypto",
                "other",
              ].map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Label>Balance</Label>
          <Input
            type="number"
            value={formData.balance}
            onChange={(e) =>
              setFormData({
                ...formData,
                balance: parseFloat(e.target.value) || 0,
              })
            }
          />

          <Button onClick={handleSave}>
            {editingAccount ? "Update" : "Save"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}