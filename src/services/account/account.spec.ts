import { AccountService } from './account';

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

    it('Should create account', async () => {
        // Arrange
        const accountName = 'Compte A';
        spyOn(accountService, 'createAccount').and.returnValue(Promise.resolve(''));

        // Act
        const output: any = await accountService.createAccount(accountName);

        // Assert
        expect(output.id).toBeDefined();
    });
});
