import {Column, Entity, PrimaryGeneratedColumn,ManyToOne,
    OneToMany} from "typeorm"
import {Doctor} from "./doctor";
import {User} from "./user";
import {Product} from "./product";
// enum OrderStatus {
//     Pending = 'chờ xử lý',
//     Processed = 'đã xử lý'
// }


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => User, (user) => user.id)
    user: User;
    @ManyToOne(() => Product, (product) =>product.id)
    product: Product
    @Column({type: 'date'})
    time: string;
    @ManyToOne(() => Doctor, (doctor) => doctor.id)
    doctor: Doctor
}
