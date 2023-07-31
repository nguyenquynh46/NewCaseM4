import {Request, Response} from "express";
import reviewService from "../service/reviewService";
class ReviewController {
    private reviewService;


    constructor() {
        this.reviewService = reviewService;
    }

    findAll = async (req: Request, res: Response) => {
        let list = await this.reviewService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.reviewService.add(req.body);
        res.json(list);
    }
    delete =async (req: Request, res: Response) => {
        await this.reviewService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.reviewService.update(req.params.id, req.body);
        res.json(result)
    }
    find = async (req,res)=>{
        let result = await  this.reviewService.find(req.query);
        res.json(result)
    }
    orderByPrice = async (req,res)=>{
        let result = await  this.reviewService.orderByPrice();
        res.json(result)
    }
}
export default new ReviewController();




