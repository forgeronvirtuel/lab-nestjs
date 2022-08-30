import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EquitiesModule} from "./equity/equities.module";

@Module({
  imports: [EquitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
