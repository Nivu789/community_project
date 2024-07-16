import express from 'express'
import { adminAuth } from '../middlewares/adminAuth'
import { getEventInfo, getEvents, postEvent } from '../controllers/adminController'
import { s3Upload } from '../middlewares/s3Upload'


export const adminRouter = express.Router()

adminRouter.post('/post-event',adminAuth,s3Upload,postEvent)

adminRouter.get('/get-events',adminAuth,getEvents)

adminRouter.get('/get-event-info/:id',adminAuth,getEventInfo)