import { Router } from "express";
import  {getUsers, getUserId,createNewUsers, deleteUsersById, getTotalUsers, updateUsersById} from '../controllers/users.controller';
const router=Router()

router.get('/users',getUsers);
router.get('/users/count',getTotalUsers);
router.post('/users',createNewUsers);
router.get('/users/:Id',getUserId);
router.delete('/users/:Id',deleteUsersById);
router.put('/users/:Id',updateUsersById);
module.exports=router

