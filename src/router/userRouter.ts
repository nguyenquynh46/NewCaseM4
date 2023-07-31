import {Router} from "express";

import userController from "../controller/userController";
const userRouter = Router();
userRouter.get('/', userController.findAll);
userRouter.post('/', userController.add);
userRouter.delete('/:id', userController.delete);
userRouter.put('/:id', userController.update);
userRouter.get('/search', userController.find);
userRouter.get('/order', userController.orderByPrice);

export default userRouter;