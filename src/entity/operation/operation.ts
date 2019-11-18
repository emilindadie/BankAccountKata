import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, OneToOne } from 'typeorm';
import { AccountEntity } from '../account/account';
@Entity()
export class OperationEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type: string;
    @Column()
    amount: number;
    @Column()
    date: Date;
    @OneToOne(type => AccountEntity, account => account.operations)
    account: AccountEntity;
}
