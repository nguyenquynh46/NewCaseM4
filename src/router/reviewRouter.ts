import {Router} from "express";
import reviewController from "../controller/reviewController";
const reviewRouter = Router();
reviewRouter.get('/', reviewController.findAll);
reviewRouter.post('/', reviewController.add);
reviewRouter.delete('/:id', reviewController.delete);
reviewRouter.put('/:id', reviewController.update);
reviewRouter.get('/search', reviewController.find);
reviewRouter.get('/order', reviewController.orderByPrice);

export default reviewRouter;
