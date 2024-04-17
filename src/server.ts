import express from 'express'
import corsMiddleware from './middleware/cors.middleware'
import propiedadRouter from './routes/propiedad.routes'
import userRouter from './routes/user.routes'
import morgan from 'morgan'

export const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(corsMiddleware)
app.use('/api', propiedadRouter)
app.use('/api', userRouter)