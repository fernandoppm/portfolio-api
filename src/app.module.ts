import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; 
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [

    ConfigModule.forRoot({ isGlobal: true }),


    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true, 
      synchronize: true, 
    }),
    PortfolioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}