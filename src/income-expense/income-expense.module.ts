// src/income-expense/income-expense.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeExpenseService } from './income-expense.service';
import { IncomeExpenseController } from './income-expense.controller';
import { IncomeExpenseSchema } from './income-expense.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'IncomeExpense', schema: IncomeExpenseSchema }]),
    ],
    controllers: [IncomeExpenseController],
    providers: [IncomeExpenseService],
    exports: [IncomeExpenseService], // 필요 시 다른 모듈에서 사용 가능하도록 export
})
export class IncomeExpenseModule { }