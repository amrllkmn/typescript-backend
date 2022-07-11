import type { Knex } from "knex";
import dotenv from 'dotenv'

dotenv.config({})

const { DB_USERNAME, DB_USER_PASSWORD, DB_HOST, DB_NAME } = process.env

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development:  {
		client: 'pg',
		connection: {
			database: DB_NAME,
			user: DB_USERNAME,
			password: DB_USER_PASSWORD,
			host: DB_HOST,
			port: 5432,
		},
	},
  test: {
		client: 'pg',
		connection: {
			database: DB_NAME,
			user: DB_USERNAME,
			password: DB_USER_PASSWORD,
			host: DB_HOST,
			port: 5432,
		},
	},

};

export default config
