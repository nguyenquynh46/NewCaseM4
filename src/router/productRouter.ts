import {Router} from "express";
import productController from "../controller/productController";


const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.add);
productRouter.delete('/:id', productController.delete);
productRouter.put('/:id', productController.update);
productRouter.get('/search', productController.find);
productRouter.get('/order', productController.orderByPrice);

export default productRouter;
