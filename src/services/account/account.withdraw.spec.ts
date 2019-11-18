import { AccountService } from './account';
import { accountMock } from '../../test-files';

describe('Withdraw money', () => {

    let accountService: AccountService;
    beforeEach(() => {
        accountService = new AccountService();
    });

    it('Should not get negatif or null money from account', async () => {
        // Arrange
        const inputId = 1;
        const inputMoney = Number(300);
        // Act
        try {
            // Act
            const output: any = await accountService.getMoney(inputId, inputMoney);
        } catch (e) {
            // Assert
            expect(e).toBeInstanceOf(Error);
        }
    });

    it('Should get positif money from account', async () => {
        // Arrange
        const inputId = 1;
        const inputMoney = Number(300);

        spyOn(accountService, 'getMoney').and.returnValue(Promise.resolve(accountMock));

        // Act
        const output: any = await accountService.getMoney(inputId, inputMoney);

        // Assert
        expect(output.id).toBeDefined();
    });
});
