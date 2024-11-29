import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceModule } from './finance/finance.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeExpenseModule } from './income-expense/income-expense.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/personal_finance'),
    FinanceModule,  // Finance 모듈을 추가
    IncomeExpenseModule, // IncomeExpenseModule 모듈을 추가
  ],
  controllers: [AppController],  // AppController 등록
  providers: [AppService],  // AppService 등록 (사용하지 않으면 삭제 가능)
})

//
export class AppModule { }
