// src/income-expense/models/income-expense.model.ts
import { Schema, Document } from 'mongoose';

export const IncomeExpenseSchema = new Schema({
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: false },
});

// Document를 확장한 인터페이스 정의
export interface IncomeExpense extends Document {
    type: string;
    amount: number;
    description?: string;
}
