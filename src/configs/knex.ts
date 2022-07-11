import dotenv from 'dotenv'
dotenv.config()

import Knex from 'knex';
import knexConfig from '../../knexfile'

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

const knex = Knex(knexConfig[NODE_ENV])

export default knex