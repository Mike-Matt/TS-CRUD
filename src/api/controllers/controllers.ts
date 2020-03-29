import { RequestHandler } from "express";
import { Todo } from '../models/models';

const TODOS: Todo[] = [];

export const createToDo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newToDo = new Todo(Math.random().toString(), text)

  TODOS.push(newToDo);

  res.status(200).json({message: 'Created the todo.', createdToDo: newToDo})
}