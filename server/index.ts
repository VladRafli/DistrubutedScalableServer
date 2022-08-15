import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

import Api from './routes/api'

const app:Application = express()
const PORT:String|Number = process.env.PORT ?? 5000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors({
    origin: '*'
}))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(helmet({
    contentSecurityPolicy: false
}))

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('<h1>Hello from Server!</h1>')
})
// Swagger API Documentation
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
// API Routes
app.use('/api', Api)

app.listen(PORT, () => { console.log(`Server is running on PORT http://127.0.0.1:${PORT}`) })