import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { CreateDto, UpdateDto } from "./dto";


@Controller('todo')
export class TodoController {
  constructor() {

  }

  @Get()
  getAll() {
    return 'Get all'
  }
  
  @Get(':id')
  getById(@Param('id') id: string) {
    return 'Get one by id ' + id
  }

  @Post()
  createOne(@Body() todo: CreateDto) {
    // delete todo
    return 'Create one' + JSON.stringify(todo)
    return todo
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() todo: UpdateDto) {
    console.log(todo)
    return todo
  }

  @Delete(':id') 
  deleteOne(@Param('id') id: string) {
    return 'delete one ' + id
  }
}