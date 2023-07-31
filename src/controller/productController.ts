import {Request, Response} from "express";
import productService from "../service/productService";
class productController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {
        let list = await this.productService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.productService.add(req.body);
        res.json(list);
    }
    delete =async (req: Request, res: Response) => {
        await this.productService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.productService.update(req.params.id, req.body);
        res.json(result)
    }
    find = async (req,res)=>{
        let result = await  this.productService.find(req.query);
        res.json(result)
    }
    orderByPrice = async (req,res)=>{
        let result = await  this.productService.orderByPrice();
        res.json(result)
    }
}
export default new productController();




