import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({type: 'text'})
    nome: string

    @Column({type: 'text'})
    sobrenome: string

    @Column({type: 'text'})
    email: string
}