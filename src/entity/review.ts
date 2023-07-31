import {Column, Entity, PrimaryGeneratedColumn,ManyToOne,
    OneToMany} from "typeorm";
import {User} from "./user";
@Entity()
export class Review{
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => User, (user) => user.id)
    user: User;
    @Column({type: 'longtext'})
    review: string;
}
