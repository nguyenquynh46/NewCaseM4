
import {AppDataSource} from "../data-source";

import {Request, Response} from "express";
import {Doctor} from "../entity/doctor";


class DoctorService {
    private Repository;

    constructor() {
        this.Repository = AppDataSource.getRepository(Doctor);
    }
    getAll = async () => {
        return await this.Repository.find()
    }
    add = async (user) => {
        return await this.Repository.save(user)

    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    update = async (id, data) => {
        return await this.Repository.update(id, data)
    }
    find = async (name) => {
        return await this.Repository.find(
            {where: name})
    }
    orderByPrice = async () => {
        return this.Repository.find({
            order: {age: "ASC"}
        });
    }
}

export default new DoctorService()