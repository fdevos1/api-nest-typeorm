import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { IdeaModule } from './idea/idea.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ideas',
      entities: ['dist / ** / *. entity {.ts, .js}'],
      synchronize: true,
      logging: true,
    }),
    IdeaModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
