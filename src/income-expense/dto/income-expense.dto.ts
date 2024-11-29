// src/income-expense/dto/income-expense.dto.ts
export class CreateIncomeExpenseDto {
    type: string;
    amount: number;
    description?: string;
}

export class UpdateIncomeExpenseDto {
    amount: number;
    description?: string;
}
