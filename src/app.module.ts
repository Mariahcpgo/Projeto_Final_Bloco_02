import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Produto } from './produto/entitites/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_projeto_final_bloco_02',
      entities:[Categoria, Produto],
      synchronize: true,
      logging: true,
    }),
    CategoriaModule, ProdutoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
