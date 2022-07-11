import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({})

const app: Express = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
	res.send('<h1> ⚡️ Hello World ⚡️ </h1> <p> but from Typescript </p>')
})

app.listen(port, () => {
	console.log(`[server]: Server is running at https://localhost:${port}`)
})
