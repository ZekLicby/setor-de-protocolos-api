import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import Funcionario from '../../domain/entities/funcionario.entity';
import { FuncionarioModule } from './funcionario.module';
import { Module } from '@nestjs/common';
import { RegistroPrimarioModule } from './registroPrimario.module';
import { RegistroSecundarioModule } from './registroSecundario.module';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';
import { RegistroSecundario } from 'src/domain/entities/registroSecundario.entity';
import { AuthModule } from '../../auth/auth.module';
dotenv.config();

@Module({
  imports: [
    FuncionarioModule,
    RegistroPrimarioModule,
    RegistroSecundarioModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      entities: [Funcionario, RegistroPrimario, RegistroSecundario],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
