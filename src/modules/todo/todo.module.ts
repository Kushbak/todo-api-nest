import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo.controller';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: []
})
export class TodoModule {}