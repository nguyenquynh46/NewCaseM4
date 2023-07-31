import {Column, Entity, PrimaryGeneratedColumn,ManyToOne,
    OneToMany} from "typeorm"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'longtext'})
    image: string;
    @Column({type: 'longtext'})
    des: string;
    @Column({type: 'longtext'})
    detailDes: string;
    @Column({type: 'varchar', length: 255})
    role: string;
}
