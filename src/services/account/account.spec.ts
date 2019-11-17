import { AccountService } from './account';
import { createAccountDto, accountMock, allAccountMock} from '../../test-files';

describe('Account Creation', () => {

    let accountService: AccountService;
    beforeEach(() => {
        accountService = new AccountService();
    });

    it('Should check if account name is define', async () => {
        // Arrange
        const accountName = 'Compte A';

        // Act
        const output = await accountService.haveName(accountName);

        // Assert
        expect(output).toEqual(true);
    });

    it('Should create user account', async () => {
        // Arrange
        const myAccount = createAccountDto;
        spyOn(accountService, 'createAccount').and.returnValue(Promise.resolve(accountMock));

        // Act
        const output: any = await accountService.createAccount(myAccount);

        // Assert
        expect(output.id).toBeDefined();
    });

    it('Should get all account', async () => {
        // Arrange
        spyOn(accountService, 'getAllAccount').and.returnValue(Promise.resolve(allAccountMock));

        // Act
        const output: any = await accountService.getAllAccount();

        // Assert
        expect(output).toBeInstanceOf(Array);
    });

    it('Should check if money is not négatif or null', async () => {
        // Arrange
        const input = Number(-56666);

        // Act
        const output: any = await accountService.canIncreaseSolde(input);

        // Assert
        expect(output).toEqual(true);
    });
});
