import { Request, Response } from 'express'
import shortId from 'shortid'

import { UrlModel } from '../models/url'

class UrlController {
    public async shortener (req: Request, res: Response): Promise<void> {
        const { originalUrl } = req.body
        const url = await UrlModel.findOne({ originalUrl })

        if (url) {
            res.json(url)
            return
        }

        const hash = shortId.generate()
        const shortUrl = `${process.env.API_URL}${hash}`
        const newUrl = await UrlModel.create({ hash, shortUrl, originalUrl })

        res.json(newUrl)
    }

    public async redirect (req: Request, res: Response): Promise<void> {
        const { hash } = req.params
        const url = await UrlModel.findOne({ hash })

        if (url) {
            res.redirect(url.originalUrl)
            return
        }

        res.status(404).json({ message: 'Url not found' })
    }
}

export default new UrlController()
