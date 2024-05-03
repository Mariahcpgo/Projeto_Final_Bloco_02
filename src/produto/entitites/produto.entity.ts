import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entitites/usuario.entity";

@Entity({name: "tb_produtos"})
export class Produto{

    @PrimaryGeneratedColumn()
    id: number;
 
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2, nullable: false})
    preco: number;

    @Column()
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;

}