import { Injectable } from '@nestjs/common';
import FuncionarioService from '../application/services/funcionario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly _funcionarioService: FuncionarioService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const funcionario = await this._funcionarioService.findOne(email);
    if (funcionario && bcrypt.compareSync(password, funcionario.senhaHash)) {
      const { senhaHash, ...result } = funcionario;
      return result;
    }
    return null;
  }
}
