import { Module } from '@nestjs/common';
import { FuncionarioModule } from '../infra/modules/funcionario.module';
import { LocalStrategy } from 'src/auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Module({
  imports: [FuncionarioModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
