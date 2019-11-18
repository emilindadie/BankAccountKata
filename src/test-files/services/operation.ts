import { CreateWithDrawDto } from '../../model/operation/withdraw';
import { CreateDepositDto } from '../../model/operation/deposit';

export const createWithDrawDto = new CreateWithDrawDto();
createWithDrawDto.type = 'Retrait';
createWithDrawDto.account = {
    id: 1,
    name: 'Compte A',
    solde: 0,
    user: {
        id: 1,
        name: 'toto',
        email: 'dadie.emilin@gmail.com',
        address: '14 rue de Mulhouse',
        accounts: [],
    },
    operations: [],
},
    createWithDrawDto.amount = 600;
createWithDrawDto.date = new Date();

export const createDepositDto = new CreateDepositDto();
createDepositDto.type = 'Depot';
createDepositDto.account = {
    id: 1,
    name: 'Compte A',
    solde: 0,
    user: {
        id: 1,
        name: 'toto',
        email: 'dadie.emilin@gmail.com',
        address: '14 rue de Mulhouse',
        accounts: [],
    },
    operations: [],
},
    createDepositDto.amount = 600;
createDepositDto.date = new Date();
