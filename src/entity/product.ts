import {Column, Entity, PrimaryGeneratedColumn,ManyToOne,
    OneToMany} from "typeorm"
import {Category} from "./category";


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    price: number;
    @Column({type: 'longtext'})
    des: string;
    @ManyToOne(() => Category, (category) => category.id)
    category: Category;

}
