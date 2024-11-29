// src/income-expense/income-expense.schema.ts
import { Schema, Document } from 'mongoose';

export const IncomeExpenseSchema = new Schema({
    type: { type: String, enum: ['income', 'expense'], required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now },
});

export interface IncomeExpense extends Document {
    type: string;
    amount: number;
    description?: string;
    date: Date;
}