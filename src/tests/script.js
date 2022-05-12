'use strict'

require('dotenv').config({})

const knex = require('../configs/knex')

const up = function () {
	return knex.schema.hasTable('todos').then((exists) => {
		if (!exists) {
		  return knex.schema.createTable('todos', (table) => {
			table.increments('id').primary();
			table.string('title').notNullable();
			table.boolean('is_completed').notNullable().defaultTo(false);
			table.timestamp('created_at').defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.fn.now());
		  });
		}
	  });
}

const down = function () {
	return knex.schema.hasTable('todos').then((exists) => {
		if (exists) {
			return knex.schema.dropTable('todos')
		}
	})
}

module.exports = { up, down }