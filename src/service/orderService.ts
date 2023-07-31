import {AppDataSource} from "../data-source";
import {Order} from "../entity/order";
import {Like} from "typeorm";

class OrderService {
    private Repository;

    constructor() {
        this.Repository = AppDataSource.getRepository(Order);
    }

    getAll = async () => {
        return await this.Repository.find(
            {
                relations: {
                    product: true,
                    doctor: true,
                    user: true,
                },
            }
        )
    }
    add = async (order) => {
        return await this.Repository.save(order)

    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    update = async (id, data) => {
        return await this.Repository.update(id, data)
    }
    find = async (name,name1?) => {
        return await this.Repository.find({
                relations: {
                    product: true,
                    doctor: true,
                    user:true
                },
                where:{name,name1}
            }
        )
    }
    orderByPrice = async () => {
        return this.Repository.find({
            order: {age: "ASC"}
        });
    }
}

export default new OrderService()