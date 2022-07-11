import { Todo } from '../../models/todo.model'
import {up, down} from '../script'
import knex from '../../configs/knex'

beforeEach(async () => {
    await down(knex)
    await up(knex)
})

afterEach(async () => {
    await down(knex)
})

describe('Todo model', () => {
    test('Able to instantiate', async () => {
        const data = {
            title: 'Test todo',
            is_completed: false,
            created_at: new Date(),
            update_at: new Date()

        }
        const todo = new Todo(data)
        expect(todo).toBeInstanceOf(Todo)
        expect(todo.is_completed).toBe(false)
    })

    test('Should not throw error when as long as title is given', async () => {
        const data = {
            title: "Test"
        }
        const todo = new Todo(data)
        expect(todo).toBeInstanceOf(Todo)
        expect(todo.created_at).not.toBe(null)
    })
    
})
describe('Todo save method', () => {
    test('Should be able to insert into database', async () => {
        const data = {
            title: 'Test todo',
            is_completed: false,
            created_at: new Date(),
            update_at: new Date()

        }
        const todo = new Todo(data)
        const response = await todo.save()
        expect(response.success).toBe(true)
    })
})