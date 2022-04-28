import express from "express"
import { create, show } from '../controllers/ShorterUrlController.js'

const app = express()

app.use(express.json())

app.post('/url', create)
app.get('/:code', show)

export default app