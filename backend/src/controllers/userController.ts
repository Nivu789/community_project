import { Request, Response, NextFunction } from 'express';
import USER from '../models/userModel';
import jwt from 'jsonwebtoken'
import EVENT from '../models/eventModel';
import ANNOUNCEMENT from '../models/announcementModel';


export const memberLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { phone, password } = req.body.data
        console.log(phone)
        const user = await USER.findOne({ phone })
        console.log(user)
        if (user) {
            const token = jwt.sign({ phone }, process.env.JWT_SECRET || "")
            res.json({ message: "Welcome back", token: token })
        } else {
            res.json({ error: "You are not a member" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const adminLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body.data
        const user = await USER.findOne({ username })
        if (user?.isAdmin && user.password === password) {
            const adminToken = jwt.sign({ user: user.id }, process.env.JWT_SECRET || "")
            res.json({ message: "Welcome admin", adminToken: adminToken })
        } else {
            res.json({ error: "You are not an admin" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query.showInHome) {
            const events = await EVENT.find({showInHome:true})
            if (events) {
                res.json({ events })
            } else {
                res.json({ error: "Something went wrong" })
            }
        } else {
            
            const events = await EVENT.find({})
            if (events) {
                res.json({ events })
            } else {
                res.json({ error: "Something went wrong" })
            }
        }

    } catch (error) {
        console.log(error)
    }
}

export const getAnnouncementsUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const showAll = req.headers['x-show-all']

        if (showAll) {
            const announcements = await ANNOUNCEMENT.find({})
            if (announcements) {
                res.json({ announcements, success: true })
            } else {
                res.json({ error: "Something went wrong", succes: false })
            }


        } else {
            const announcements = await ANNOUNCEMENT.find({ showInHome: true })
            if (announcements) {
                res.json({ announcements, success: true })
            } else {
                res.json({ error: "Something went wrong", succes: false })
            }
        }


    } catch (error) {
        console.log(error)
    }
}

