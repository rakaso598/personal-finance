// src/income-expense/income-expense.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IncomeExpense } from './income-expense.model'; // 모델 타입 임포트
import { CreateIncomeExpenseDto } from './dto/income-expense.dto'; // DTO 임포트

@Injectable()
export class IncomeExpenseService {
    constructor(
        @InjectModel('IncomeExpense') private readonly incomeExpenseModel: Model<IncomeExpense>, // 모델 이름을 문자열로 사용
    ) { }

    async create(createIncomeExpenseDto: CreateIncomeExpenseDto): Promise<IncomeExpense> {
        const createdIncomeExpense = new this.incomeExpenseModel(createIncomeExpenseDto);
        return createdIncomeExpense.save();
    }

    async findAll(): Promise<IncomeExpense[]> {
        return this.incomeExpenseModel.find().exec();
    }

    async findOne(id: string): Promise<IncomeExpense> {
        return this.incomeExpenseModel.findById(id).exec();
    }

    async update(id: string, updateIncomeExpenseDto: any): Promise<IncomeExpense> {
        return this.incomeExpenseModel.findByIdAndUpdate(id, updateIncomeExpenseDto, { new: true }).exec();
    }

    async delete(id: string): Promise<void> {
        await this.incomeExpenseModel.findByIdAndDelete(id).exec();
    }
}
