import { prop, getModelForClass } from '@typegoose/typegoose'

class Url {
    @prop({ required: true })
    public hash!: string

    @prop({ required: true })
    public originalUrl!: string

    @prop({ required: true })
    public shortUrl!: string
}

export const UrlModel = getModelForClass(Url)
