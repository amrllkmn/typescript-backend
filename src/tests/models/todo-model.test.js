/* eslint-disable no-undef */
const Todo = require('../../models/todo-model')
const {up, down} = require('../script')

beforeEach( async () => {
    await down()
    await up()
})

afterEach( async () => {
    await down()
})

describe('Todo model', () => {

    test('an instance should be able to be created', async () => {
        const data = {
            title: "Test"
        }
        todo = new Todo(data)
        expect(todo).toBeInstanceOf(Todo)
    })

    test('when no date given should not throw error', async () => {
        const data = {
            title: "Test"
        }
        todo = new Todo(data)
        expect(todo).toBeInstanceOf(Todo)
        expect(todo.created_at).not.toBe(null)
    })

    test('Should throw error with missing title', () => {
        expect(() => {
          // eslint-disable-next-line no-unused-vars
          const todo = new Todo()
        }).toThrow(TypeError)
      })
})

describe('Todo model save', () => {

    test('should be able to save', async () => {
        const data = {
            title: "Test"
        }
        todo = new Todo(data)
        const {success, error} = await todo.save()
        expect(todo).toBeInstanceOf(Todo)
        expect(success).toBe(true)
        expect(error).toBe(null)
    })
})

describe('Todo model get', () => {

    test('should be able to return the right todo', async () => {
        const data = {
            title: "Test"
        }
        const todo = new Todo(data)
        const {success, error} = await todo.save()
        expect(success).toBe(true)
        const res = await Todo.get(data)
        expect(res.data.title).toEqual(todo.title)
    })

    test('should be able to return the right todo with id', async () => {
        const data = {
            title: "Test"
        }
        const todo = new Todo(data)
        const {success, error} = await todo.save()
        expect(success).toBe(true)
        expect(error).toBe(null)
        const res = await Todo.get({id:1})
        expect(res.data.title).toEqual(todo.title)
    })

    test('should be unsuccessful if no todo', async () => {
        const data = {
            title: 'Test'
        }
        const res = await Todo.get(data)
        expect(res.success).toBe(false)
        expect(res.error).toBe('No todo of that value found')
    })
})

