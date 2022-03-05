import mongoose from 'mongoose'

export class MongoConnection {
    public async connect (): Promise<void> {
        try {
            mongoose.connect(process.env.DB_CLUSTER ?? '', { useNewUrlParser: true, useUnifiedTopology: true })
            console.log('DB connected')
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
    }
}
