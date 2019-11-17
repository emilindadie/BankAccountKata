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

    it('Should not save negatif or null money in account', async () => {
        // Arrange
        const inputId = 1;
        const inputMoney = Number(-56666);
        try {
            // Act
            const output: any = await accountService.saveMoney(inputId, inputMoney);
        } catch (e) {
            // Assert
            expect(e).toBeInstanceOf(Error);
        }
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
});
