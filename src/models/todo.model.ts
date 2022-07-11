import { Data } from "../interfaces/data.interface";

export class Todo {
    title: string;
    is_completed: boolean
    created_at: Date | undefined
    updated_at: Date | undefined

    constructor(data: Data){
        this.title = data.title
        this.created_at = data.created_at
        this.updated_at = data.updated_at
        this.is_completed = data.is_completed ? data.is_completed : false
    }
}