import { UserService } from './user';
import { createUserDto, userMock } from '../../test-files/index';

describe('User registration', () => {
    let userService: UserService;
    beforeEach(() => {
        userService = new UserService();
    });

    it('Should check if email exist', async () => {
        // Arrange
        const email = 'dadie.emilin@gmail.com';
        spyOn(userService, 'checkIfEmailExist').and.returnValue(Promise.resolve(false));

        // Act
        const output = await userService.checkIfEmailExist(email);
        // Assert
        expect(output).toEqual(false);
    });

    it('Should crypt password', async () => {
        // Arrange
        const password = 'toto';

        // Act
        const output = await userService.cryptPassword(password);

        // Assert
        expect(output).not.toEqual(password);
    });

    it('Should create user', async () => {
        // Arrange
        const myUser = createUserDto;
        const myUserMock = userMock;
        spyOn(userService, 'createUser').and.returnValue(Promise.resolve(myUserMock));

        // Act
        const output = await userService.createUser(myUser);

        // Assert
        expect(output.id).toBeDefined();
    });

    it('Should not create user (email exist)', async () => {
        // Arrange
        const myUser = createUserDto;
        spyOn(userService, 'checkIfEmailExist').and.returnValue(Promise.resolve(true));

        // Act
        try {
            const output = await userService.createUser(myUser);
        } catch (e) {
            // Assert
            expect(e).toBeInstanceOf(Error);
        }
    });

    it('Should compare password', async () => {
        // Arrange
        const password = 'toto';
        const hashpassword = '$2b$10$g2UPqjMLKnksOzPukpCvD.LLjfxLji0GXP4iSmQh1HjPDZpsVEK3.';

        // Act
        const output = await userService.comparePassword(password, hashpassword);

        // Assert
        expect(output).toEqual(true);
    });

    it('Should log user', async () => {
        // Arrange
        const email = 'dadie.emilin@gmail.com';
        const password = 'toto';
        const myUserMock = userMock;

        spyOn(userService, 'logUser').and.returnValue(Promise.resolve(myUserMock));

        // Act
        const output: any = await userService.logUser(email, password);

        // Assert
        expect(output.id).toBeDefined();
    });

    it('Should not log user (wrong email)', async () => {
        // Arrange
        const inputEmail = "toto";
        const inputPassword = "toto";
        spyOn(userService, 'getUserByEmail').and.returnValue(Promise.resolve(false));

        // Act
        try {
            const output = await userService.logUser(inputEmail, inputPassword);
        } catch (e) {
            // Assert
            expect(e).toBeInstanceOf(Error);
        }
    });

    it('Should not log user (wrong email)', async () => {
        // Arrange
        const inputEmail = "toto";
        const inputPassword = "toto";
        spyOn(userService, 'getUserByEmail').and.returnValue(Promise.resolve(true));
        spyOn(userService, 'comparePassword').and.returnValue(Promise.resolve(false));

        // Act
        try {
            const output = await userService.logUser(inputEmail, inputPassword);
        } catch (e) {
            // Assert
            expect(e).toBeInstanceOf(Error);
        }
    });
});
