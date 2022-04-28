import { Router } from 'express'
import url from './routes/url.routes.js'

const router = new Router()

router.use('/use', url)