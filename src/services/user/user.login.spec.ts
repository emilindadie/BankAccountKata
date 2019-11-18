import { UserService } from './user';
import { userMock } from '../../test-files/index';

describe('User service', () => {
    let userService: UserService;
    beforeEach(() => {
        userService = new UserService();
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
        const inputEmail = 'dadie.emilin@gmail.com';
        const inputPassword = 'toto';
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
        const inputEmail = 'dadie.emilin@gmail.com';
        const inputPassword = 'toto';
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
