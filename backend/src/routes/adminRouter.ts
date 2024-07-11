import express from 'express'
import { adminAuth } from '../middlewares/adminAuth'
import { getEvents, postEvent } from '../controllers/adminController'


export const adminRouter = express.Router()

adminRouter.post('/post-event',adminAuth,postEvent)

adminRouter.get('/get-events',adminAuth,getEvents)