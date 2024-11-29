import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceModule } from './finance/finance.module'; // Finance 모듈을 나중에 생성할 예정
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/personal_finance'),
    FinanceModule,  // Finance 모듈을 추가
  ],
  controllers: [AppController],  // AppController 등록
  providers: [AppService],  // AppService 등록 (사용하지 않으면 삭제 가능)
})

//
export class AppModule { }
