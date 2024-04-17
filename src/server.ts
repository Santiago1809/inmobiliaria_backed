import express from 'express'
import corsMiddleware from './middleware/cors.middleware'
import propiedadRouter from './routes/propiedad.routes'
export const app = express()

app.use(express.json())
app.use(corsMiddleware)
app.use('/api', propiedadRouter)