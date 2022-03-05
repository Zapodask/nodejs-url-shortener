import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

import routes from './routes'
import { MongoConnection } from './services/mongoConnection'

dotenv.config()

class App {
    public express: express.Application

    public constructor () {
        this.express = express()

        this.middlewares()
        this.routes()
        this.db()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private routes (): void {
        this.express.use(routes)
    }

    private db (): void {
        const database = new MongoConnection()
        database.connect()
    }
}

export default new App().express
