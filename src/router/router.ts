import {Router} from "express";
import userRouter from "./userRouter";
import categoryRouter from "./categoryRouter";
import doctorRouter from "./doctorRouter";
import orderRouter from "./orderRouter";
import productRouter from "./productRouter";
import reviewRouter from "./reviewRouter";
const router = Router();
router.use('/category', categoryRouter);
router.use('/user', userRouter);

router.use('/doctor', doctorRouter);
router.use('/order', orderRouter);
router.use('/product', productRouter);
router.use('/review', reviewRouter);


export default router;