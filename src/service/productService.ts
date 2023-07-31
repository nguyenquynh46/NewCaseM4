
import {AppDataSource} from "../data-source";

import {Request, Response} from "express";
import {Doctor} from "../entity/doctor";
import {Product} from "../entity/product";


class ProductService {
    private Repository;

    constructor() {
        this.Repository = AppDataSource.getRepository(Product);
    }
    getAll = async () => {
        return await this.Repository.find(
            {
                relations: {
                    category: true,
                },
            }
        )
    }
    add = async (product) => {
        return await this.Repository.save(product)

    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    update = async (id, data) => {
        return await this.Repository.update(id, data)
    }
    find = async (name) => {
        return await this.Repository.find(
            {
                relations: {
                    category: true,
                },
                where: name,
                // order: {price: "ASC"}
            }

        )
    }
    orderByPrice = async () => {
        return this.Repository.find({
            relations: {
                category: true,
            },
            order: {price: "ASC"}
        });
    }
}

export default new ProductService()