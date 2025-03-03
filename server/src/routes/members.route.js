import { Router } from "express";
import {createMember, deleteMember, getMember,getUserById, updateMember} from "../controller/member.controller.js";

const router = Router();


router.post('/member', createMember);
router.get('/getMember', getMember);
router.get('/member/:id', getUserById);
router.put('/update/member/:id', updateMember);
router.delete('/remove/:id', deleteMember);

export default router;


