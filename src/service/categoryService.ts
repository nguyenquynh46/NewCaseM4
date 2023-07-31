
import {AppDataSource} from "../data-source";

import {Category} from "../entity/category";
class CategoryService {
    private Repository;

    constructor() {
        this.Repository = AppDataSource.getRepository(Category);
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

export default new CategoryService()