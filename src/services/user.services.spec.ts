import { UserService } from "./user.service";
import { CreateUserDto } from "../model/user";
import { User } from "../model/user.i";

describe('User registration', () => {
    let userService : UserService;
    beforeEach(() => {
        userService = new UserService();
    });

    it('Should check if email exist', async() => {
        //Arrange
        const email = "dadie.emilin@gmail.com"
        spyOn(userService, 'checkIfEmailExist').and.returnValue(Promise.resolve(false));

        //Act 
        const output = await userService.checkIfEmailExist(email);
        // Assert
        expect(output).toEqual(false);
    });


    it('Should crypt password', async() => {
        //Arrange
        const password = "toto";

        //Act 
        const output = await userService.cryptPassword(password);

        // Assert
        expect(output).not.toEqual(password);
    });

    it('Should create user', async() => {
        //Arrange
        const user = new CreateUserDto();
        user.email = "dadie.emilin@gmail.com";
        user.name = "Emilin";
        user.password = "toto";
        user.address = "14 rue de Mulhouse";
        const userMock : User = {
            id : 1,
            name : "Emilin",
            address: "",
            email :"dadie.emilin@gmail.com",
            password: "toto"
        }
        spyOn(userService, 'createUser').and.returnValue(Promise.resolve(userMock));

        //Act 
        const output = await userService.createUser(user);

        // Assert
        expect(output.id).toBeDefined();
    });

    it('Should compare password', async() => {
        //Arrange
        const password = "toto";

        const hashpassword = "$2b$10$g2UPqjMLKnksOzPukpCvD.LLjfxLji0GXP4iSmQh1HjPDZpsVEK3.";

        //Act 
        const output = await userService.comparePassword(password, hashpassword);

        // Assert
        expect(output).toEqual(true);
    });
  });