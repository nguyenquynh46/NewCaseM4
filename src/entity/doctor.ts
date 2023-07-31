import {Column, Entity, PrimaryGeneratedColumn,ManyToOne,
    OneToMany} from "typeorm"

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'varchar', length: 255})
    username: string;
    @Column({type: 'varchar', length: 255})
    password : string;
    @Column({type: 'longtext'})
    image : string;
    @Column({type: 'varchar', length: 255})
    profile : string;
    @Column({type: 'longtext'})
    experience : string;
    @Column({type: 'varchar', length: 255})
    role: string;

}
