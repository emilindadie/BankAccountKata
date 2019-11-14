import { UserService } from "./user.service";
import { CreateUserDto } from "../model/user";

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


    it('Should create user', async() => {
        //Arrange
        const user = new CreateUserDto();
        user.email = "dadie.emilin@gmail.com";
        user.name = "Emilin";
        user.address = "14 rue de Mulhouse";
        
        //Act 
        const output = await userService.createUser(user);

        // Assert
        expect(output.length).toEqual(1);
    });
  });