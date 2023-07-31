import {Request, Response} from "express";
import userService from "../service/userService";
class UserController {
    private userService;
    constructor() {
        this.userService = userService;
    }

    findAll = async (req: Request, res: Response) => {
        let list = await this.userService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.userService.add(req.body);
        res.json(list);
    }
    delete =async (req: Request, res: Response) => {
        await this.userService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.userService.update(req.params.id, req.body);
        res.json(result)
    }
    find = async (req,res)=>{
        let result = await  this.userService.find(req.query);
        res.json(result)
    }
    orderByPrice = async (req,res)=>{
        let result = await  this.userService.orderByPrice();
        res.json(result)
    }
}
export default new UserController();




