import { Router } from 'express'
import { body } from 'express-validator'

import UrlController from './controllers/UrlController'

const routes = Router()

// Book routes
routes.get('/:hash', UrlController.redirect)
routes.post('/url',
    body('url')
        .not().isEmpty()
        .withMessage('Url is required'),
    UrlController.shortener)

export default routes
