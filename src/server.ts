import express from 'express'
import corsMiddleware from './middleware/cors.middleware'
import propiedadRouter from '@routes/propiedad.routes'
import userRouter from '@routes/user.routes'
import formRouter from "@routes/form.routes"
import morgan from 'morgan'

export const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use(corsMiddleware)
app.use('/api/properties', propiedadRouter)
app.use('/api/users', userRouter)
app.use('/api/form', formRouter)