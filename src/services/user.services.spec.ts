import UserService from "./user.service";

describe('User registration', () => {
    const userService = new UserService();

    it('Should check if email exist', () => {
        //Arrage
        const email = "dadie.emilin@gmail.com"

        //Act 
        const output = userService.checkIfEmailExist(email);

        // Assert
        expect(output).toEqual(false);
    });
  });