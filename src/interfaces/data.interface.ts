import { Todo } from "../models/todo.model"

export interface Data {
  title: string
  is_completed?: boolean
  created_at?: Date
  updated_at?: Date
}

export interface Response {
  success: boolean
  error: Error | unknown
  data?: Todo
}