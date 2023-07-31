import {Router} from "express";
import categoryController from "../controller/categoryController";
const categoryRouter = Router();
categoryRouter.get('/', categoryController.findAll);
categoryRouter.post('/', categoryController.add);
categoryRouter.delete('/:id', categoryController.delete);
categoryRouter.put('/:id', categoryController.update);
categoryRouter.get('/search', categoryController.find);
categoryRouter.get('/order', categoryController.orderByPrice);

export default categoryRouter;