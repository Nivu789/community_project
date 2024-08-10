import express from 'express'
import { adminLogin, getAnnouncementsUser, getEvents, memberLogin } from '../controllers/userController'
import { authMiddleware } from '../middlewares/authMiddleware'
import { fetchCommitteeImagesFromS3 } from '../middlewares/fetchCommitteeImagesFromS3'


export const userRouter = express.Router()

userRouter.post('/login',authMiddleware,memberLogin)

userRouter.post('/login-admin',adminLogin)

userRouter.get('/auth',authMiddleware)

userRouter.get('/events',getEvents)

userRouter.get('/get-announcements',getAnnouncementsUser)

userRouter.post('/fetch-committee-images',fetchCommitteeImagesFromS3)