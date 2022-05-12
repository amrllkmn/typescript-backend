'use strict';

const db = require('../configs/knex');

class Todo {
    constructor(data){
        this.title = data.title
        this.created_at = data.created_at ? new Date(data.created_at) : new Date()
		this.updated_at = data.updated_at ? new Date(data.updated_at) : new Date()
        this.is_completed = false
    }

    async save() {
        try{
            await db('todos').insert({title: this.title, created_at: this.created_at, updated_at: this.updated_at, is_completed: this.is_completed})
            return {success: true, error: null}
        } catch (e){
            return { success: false, error: e.toString()}
        } 
    }

    static async get(data) {
        try {
            const todo = await db('todos').where(data).first()
            console.log(todo)
            if(!todo){
                return {success: false, error: 'No todo of that value found', data: null}
            }
            return {success: true, error: null, data: todo}
        } catch (error) {
            return { success: false, error: error.toString()}
        }
    }

}

module.exports = Todo