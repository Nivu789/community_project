import express from 'express'
import { adminLogin, getEvents, memberLogin } from '../controllers/userController'
import { authMiddleware } from '../middlewares/authMiddleware'


export const userRouter = express.Router()

userRouter.post('/login',authMiddleware,memberLogin)

userRouter.post('/login-admin',adminLogin)

userRouter.get('/auth',authMiddleware)

userRouter.get('/events',getEvents)