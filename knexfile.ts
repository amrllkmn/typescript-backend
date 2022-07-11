import type { Knex } from 'knex'
import dotenv from 'dotenv'

const isTest = process.env.NODE_ENV === 'test'
isTest ? dotenv.config({ path: '.env.test' }) : dotenv.config({})
const { DB_USERNAME, DB_USER_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
	development: {
		client: 'pg',
		connection: {
			database: DB_NAME,
			user: DB_USERNAME,
			password: DB_USER_PASSWORD,
			host: DB_HOST,
			port: Number(DB_PORT),
		},
	},
	test: {
		client: 'pg',
		connection: {
			database: DB_NAME,
			user: DB_USERNAME,
			password: DB_USER_PASSWORD,
			host: DB_HOST,
			port: Number(DB_PORT),
		},
	},
}

export default config
