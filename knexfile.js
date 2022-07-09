require('dotenv').config({})

const { DB_USERNAME, DB_USER_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: 'pg',
		connection: {
			database: DB_NAME,
			user: DB_USERNAME,
			password: DB_USER_PASSWORD,
			host: DB_HOST,
			port: DB_PORT,
		},
	},
	test: {
		client: 'pg',
		connection: {
			database: DB_NAME,
			user: DB_USERNAME,
			password: DB_USER_PASSWORD,
			host: DB_HOST,
			port: DB_PORT,
		},
	},
}
