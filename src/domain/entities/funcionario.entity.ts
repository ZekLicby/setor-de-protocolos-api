import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { RegistroPrimario } from './registroPrimario.entity';
import { RegistroSecundario } from './registroSecundario.entity';

@Entity({ name: 'Funcionarios' })
class Funcionario {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'text', nullable: false })
  public nome: string;

  @Column({ type: 'text', nullable: false })
  public cargo: string;

  @Column({ type: 'text', nullable: false })
  public email: string;

  @Column({ type: 'text', nullable: false })
  public setor: string;

  @Column({ type: 'text', nullable: false })
  public dataNascimento: string;

  @Column({ type: 'text', nullable: false })
  public matricula: string;

  @Column({ type: 'text', nullable: false })
  public senhaHash: string;

  @OneToMany(
    () => RegistroPrimario,
    (registroPrimario) => registroPrimario.funcionario,
  )
  public registroPrimario: RegistroPrimario;

  @OneToMany(
    () => RegistroSecundario,
    (registroSecundario) => registroSecundario.funcionario,
  )
  public registroSecundario: RegistroSecundario;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;
}

export default Funcionario;
