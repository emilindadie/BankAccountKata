import { BalanceService } from './balance';

describe('Get balance', () => {
    let balanceService: BalanceService;

    beforeEach(() => {
        balanceService = new BalanceService();
    });

    it('Should get account balance', async () => {
        // Arrange
        const inputAccountId = 1;

        // Act
        const output: any = await balanceService.getBalanceByAccountId(inputAccountId, new Date(), new Date());

        // Assert
        expect(output).toBeInstanceOf(Number);
    });
});
