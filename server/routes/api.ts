import { Router } from 'express'
import TestController from '../controller/test.controller'

const Api:Router = Router()

Api.get('/', TestController.read)

export default Api