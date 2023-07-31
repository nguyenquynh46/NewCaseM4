import {Request, Response} from "express";
import orderService from "../service/orderService";
class OrderController {
    private orderService;

    constructor() {
        this.orderService = orderService;
    }

    findAll = async (req: Request, res: Response) => {
        let list = await this.orderService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.orderService.add(req.body);
        res.json(list);
    }
    delete =async (req: Request, res: Response) => {
        await this.orderService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.orderService.update(req.params.id, req.body);
        res.json(result)
    }
    find = async (req,res)=>{
        let result = await  this.orderService.find(req.query);
        res.json(result)
    }
    orderByPrice = async (req,res)=>{
        let result = await  this.orderService.orderByPrice();
        res.json(result)
    }
}
export default new OrderController();




