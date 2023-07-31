import {Request, Response} from "express";
import doctorService from "../service/doctorService";
class DoctorController {
    private doctorService;

    constructor() {
        this.doctorService = doctorService;
    }

    findAll = async (req: Request, res: Response) => {
        let list = await this.doctorService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.doctorService.add(req.body);
        res.json(list);
    }
    delete =async (req: Request, res: Response) => {
        await this.doctorService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.doctorService.update(req.params.id, req.body);
        res.json(result)
    }
    find = async (req,res)=>{
        let result = await  this.doctorService.find(req.query);
        res.json(result)
    }
    orderByPrice = async (req,res)=>{
        let result = await  this.doctorService.orderByPrice();
        res.json(result)
    }
}
export default new DoctorController();




