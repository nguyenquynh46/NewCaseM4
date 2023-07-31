import {Request, Response} from "express";
import categoryService from "../service/categoryService";
class CategoryController {
    private categoryService;

    constructor() {
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
        let list = await this.categoryService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.categoryService.add(req.body);
        res.json(list);
    }
    delete =async (req: Request, res: Response) => {
        await this.categoryService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.categoryService.update(req.params.id, req.body);
        res.json(result)
    }
    find = async (req,res)=>{
        let result = await  this.categoryService.find(req.query);
        res.json(result)
    }
    orderByPrice = async (req,res)=>{
        let result = await  this.categoryService.orderByPrice();
        res.json(result)
    }
}
export default new CategoryController();




