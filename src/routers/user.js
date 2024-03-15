import express from 'express';
import auth from '../middleware/auth.js';
const router = new express.Router();
import { Usercreate, Userlogin, Userprofile, UserUpdate, Userdelete } from '../controller/user.js';

router.post('/users', Usercreate)

router.post('/users/login', Userlogin)

router.get('/users/me', auth, Userprofile)

router.patch('/users/me', auth, UserUpdate)

router.delete('/users/me', auth, Userdelete)

export default router; 