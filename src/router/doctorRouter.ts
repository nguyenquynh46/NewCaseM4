import {Router} from "express";
import doctorController from "../controller/doctorController";

const doctorRouter = Router();
doctorRouter.get('/', doctorController.findAll);
doctorRouter.post('/', doctorController.add);
doctorRouter.delete('/:id', doctorController.delete);
doctorRouter.put('/:id',doctorController.update);
doctorRouter.get('/search', doctorController.find);
doctorRouter.get('/order',doctorController.orderByPrice);

export default doctorRouter;
