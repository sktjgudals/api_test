import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TestModule,
    // ToDoModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
