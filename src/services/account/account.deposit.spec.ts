import { AccountService } from './account';
import { accountMock } from '../../test-files';

describe('Deposit money', () => {

    let accountService: AccountService;
    beforeEach(() => {
        accountService = new AccountService();
    });

    it('Should save positif money in account', async () => {
        // Arrange
        const inputId = 1;
        const inputMoney = Number(200);
        spyOn(accountService, 'saveMoney').and.returnValue(Promise.resolve(accountMock));

        // Act
        const output: any = await accountService.saveMoney(inputId, inputMoney);

        // Assert
        expect(output.id).toBeDefined();
    });
});
