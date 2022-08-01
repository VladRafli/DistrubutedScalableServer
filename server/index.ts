import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const app:Application = express()
const PORT:Number = parseInt(`${process.env.PORT}`) ?? 5000

app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
    origin: '*'
}))
app.use(morgan('dev'))
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('<h1>Hello from Server!</h1>')
})

app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}`) })