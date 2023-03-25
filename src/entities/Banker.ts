import { Person } from './utils/person';
import {Column, Entity,CreateDateColumn,UpdateDateColumn,ManyToMany, JoinTable} from 'typeorm'
import { Client } from './Client';


@Entity('banker')
export class Banker extends Person {

    @Column({
        unique:true
    })
    employee_number:number;
     
    @ManyToMany(
        ()=>Client,{
            cascade:true
        }
    )
    @JoinTable({
        name:"bankers_clients",
        joinColumn:{
            name:"banker",
            referencedColumnName: "id"
        },
        inverseJoinColumn:{
            name:"client",
            referencedColumnName:"id"
        }
    })
    clients: Client[]
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}