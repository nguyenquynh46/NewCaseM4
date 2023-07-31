import {Router} from "express";
import orderController from "../controller/orderController";
const orderRouter = Router();
orderRouter.get('/', orderController.findAll);
orderRouter.post('/', orderController.add);
orderRouter.delete('/:id', orderController.delete);
orderRouter.put('/:id', orderController.update);
orderRouter.get('/search', orderController.find);
orderRouter.get('/order', orderController.orderByPrice);

export default orderRouter;