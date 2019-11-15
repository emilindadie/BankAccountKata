import { AccountService } from "./account";


describe('Account Creation', () => {

    let accountService : AccountService;
    beforeEach(() => {
        accountService = new AccountService();
    });

    it('Should check if account name is define', async() => {
        //Arrange
        const accountName = ""

        //Act 
        const output = await accountService.haveName(accountName);

        // Assert
        expect(output).toEqual(true);
    });
  });