import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.hasTable('todos').then((exists) => {
		if (!exists) {
			return knex.schema.createTable('todos', (table) => {
				table.increments('id').primary()
				table.string('title').notNullable()
				table.boolean('is_completed').notNullable().defaultTo(false)
				table.timestamp('created_at').defaultTo(knex.fn.now())
				table.timestamp('updated_at').defaultTo(knex.fn.now())
			})
		}
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('todos')
}
