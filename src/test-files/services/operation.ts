import { CreateWithDrawDto } from '../../model/operation/withdraw';
import { CreateDepositDto } from '../../model/operation/deposit';
import { WithDraw } from 'src/model/operation/withdraw.i';

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

export const withdrawMock: WithDraw = {
    id: 1,
    type: 'WithDraw',
    amount: 7888,
    date: new Date(),
    account: {
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
};

export const depositMock: WithDraw = {
    id: 1,
    type: 'Deposit',
    amount: 7888,
    date: new Date(),
    account: {
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
};
