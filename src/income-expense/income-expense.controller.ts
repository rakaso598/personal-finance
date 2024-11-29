// src/income-expense/models/income-expense.controller.ts
import { Controller, Post, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { IncomeExpenseService } from './income-expense.service';
import { CreateIncomeExpenseDto, UpdateIncomeExpenseDto } from './dto/income-expense.dto';



@Controller('income-expenses')
export class IncomeExpenseController {
    constructor(private readonly incomeExpenseService: IncomeExpenseService) { }

    @Post()
    create(@Body() createIncomeExpenseDto: CreateIncomeExpenseDto) {
        return this.incomeExpenseService.create(createIncomeExpenseDto);
    }

    @Get()
    findAll() {
        return this.incomeExpenseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.incomeExpenseService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateIncomeExpenseDto: UpdateIncomeExpenseDto) {
        return this.incomeExpenseService.update(id, updateIncomeExpenseDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.incomeExpenseService.delete(id);
    }
}