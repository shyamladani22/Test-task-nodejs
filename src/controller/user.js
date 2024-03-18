import User from "../models/user.js"
import { sendWelcomeEmail, sendCancelationEmail } from '../emails/account.js';

export const Usercreate = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

export const Userlogin = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        console.log(e)
        res.status(400).send()
    }
}

export const Userprofile = async (req, res) => {
    res.send(req.user)
}

export const UserUpdate = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const Userdelete = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user._id)

        sendCancelationEmail(req.user.email, req.user.name);

        res.send(user);
    } catch (e) {
        console.log(e)
        res.status(500).send();
    }
}
