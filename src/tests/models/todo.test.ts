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
            title: 'Test todo'
        }
        const todo = new Todo(data)
        expect(todo).toBeInstanceOf(Todo)
        expect(todo.is_completed).toBe(false)
    })

    test('when no date given should not throw error', async () => {
        const data = {
            title: "Test"
        }
        const todo = new Todo(data)
        expect(todo).toBeInstanceOf(Todo)
        expect(todo.created_at).not.toBe(null)
    })

})