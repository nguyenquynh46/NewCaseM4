
import {AppDataSource} from "../data-source";

import {Review} from "../entity/review";


class ReviewService {
    private Repository;

    constructor() {
        this.Repository = AppDataSource.getRepository(Review);
    }
    getAll = async () => {
        return await this.Repository.find(
            {
                relations: {
                    user: true,
                },
            }
        )
    }
    add = async (review) => {
        return await this.Repository.save(review)

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
                    user: true,
                },
                where: name}
        )
    }
    orderByPrice = async () => {
        return this.Repository.find({
            order: {age: "ASC"}
        });
    }
}

export default new ReviewService()