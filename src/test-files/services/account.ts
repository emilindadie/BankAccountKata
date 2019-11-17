import { CreateAccountDto } from '../../model/account/account';
import { Account } from '../../model/account/account.i';

export const createAccountDto = new CreateAccountDto();
createAccountDto.name = 'Compte A';

export const accountMock: Account = {
    id : 1,
    name: 'Compte A',
    solde: 0,
    user: {
        id: 1,
        name: 'toto',
        email: 'dadie.emilin@gmail.com',
        address: '14 rue de Mulhouse',
        accounts: [],
    },
};

export const allAccountMock: Account [] = [
    {
        id : 1,
        name: 'Compte A',
        solde: 0,
        user: {
            id: 1,
            name: 'toto',
            email: 'dadie.emilin@gmail.com',
            address: '14 rue de Mulhouse',
            accounts: [],
        },
    },
];
