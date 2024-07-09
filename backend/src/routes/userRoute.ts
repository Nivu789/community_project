import express from 'express'
import { memberLogin } from '../controllers/userController'
import { authMiddleware } from '../middlewares/authMiddleware'


export const userRouter = express.Router()

userRouter.post('/login',authMiddleware,memberLogin)
userRouter.get('/get-events',authMiddleware)