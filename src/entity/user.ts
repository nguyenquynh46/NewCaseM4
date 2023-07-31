import {Column, Entity, PrimaryGeneratedColumn,ManyToOne,
    OneToMany} from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'varchar', length: 255})
    username: string;
    @Column({type: 'varchar', length: 255})
    password: string;
    @Column({type: 'varchar', length: 255})
    telephone: string;
    @Column({type: 'longtext'})
    image : string;
    @Column({type: 'varchar', length: 255})
    address : string;
    @Column({type: 'varchar', length: 255})
    role: string;
}
