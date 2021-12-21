import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonModule } from './lesson/lesson.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_URL,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson],
    }),
    LessonModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
