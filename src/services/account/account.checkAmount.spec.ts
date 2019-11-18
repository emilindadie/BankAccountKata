import { AccountService } from './account';

describe('Check amount', () => {

    let accountService: AccountService;
    beforeEach(() => {
        accountService = new AccountService();
    });

    it('Should check if money is not négatif or null', async () => {
        // Arrange
        const input = Number(-56666);

        // Act
        const output: any = await accountService.verifyMoney(input);

        // Assert
        expect(output).toEqual(false);
    });

    it('Should check if money is not négatif or null', async () => {
        // Arrange
        const input = null;

        // Act
        const output: any = await accountService.verifyMoney(input);

        // Assert
        expect(output).toEqual(false);
    });

    it('Should check if money is not négatif or null', async () => {
        // Arrange
        const input = 500;

        // Act
        const output: any = await accountService.verifyMoney(input);

        // Assert
        expect(output).toEqual(true);
    });
});
