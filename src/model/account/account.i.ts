import { User } from '../user/user.i';
import { Operation } from '../operation/operation.i';

export interface Account {
    id: number;
    name: string;
    solde: number;
    user: User;
    operations: Operation[];
}
