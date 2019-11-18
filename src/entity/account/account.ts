import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from '../user/user';
import { OperationEntity } from '../operation/operation';

@Entity()
export class AccountEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({ default: 0 })
    solde: number;
    @ManyToOne(type => UserEntity, user => user.accounts)
    user: UserEntity;
    @OneToMany(type => OperationEntity, operation => operation.account)
    operations: OperationEntity[];
}
