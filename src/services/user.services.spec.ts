import { UserService } from "./user.service";

describe('User registration', () => {
    const userService = new UserService();

    it('Should check if email exist', async() => {
        //Arrange
        const email = "dadie.emilin@gmail.com"
        spyOn(userService, 'checkIfEmailExist').and.returnValue(Promise.resolve(false));

        //Act 
        const output = await userService.checkIfEmailExist(email);
        // Assert
        expect(output).toEqual(false);
    });
  });