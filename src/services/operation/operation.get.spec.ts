import { operationMock } from '../../test-files/services/operation';
import { OperationService } from './operation';
import { Operation } from '../../model/operation/operation.i';
import { AccountService } from '../account/account';

describe('Get operation', () => {
    let operationService: OperationService;

    beforeEach(() => {
        operationService = new OperationService(new AccountService());
    });

    it('Should get one operation', async () => {
        // Arrange
        const inputId = 1;
        const myOperationMock = operationMock;
        spyOn(operationService, 'getOperationById').and.returnValue(Promise.resolve(myOperationMock));

        // Act
        const output: any = await operationService.getOperationById(inputId);

        // Assert
        expect(output.id).toBeDefined();
    });

    it('Should get all operation of one account', async () => {
        // Arrange
        const inputId = 1;
        const myOperationMock = operationMock;
        spyOn(operationService, 'getOperationByAccountId').and.returnValue(Promise.resolve([myOperationMock]));

        // Act
        const output: any = await operationService.getOperationByAccountId(inputId);

        // Assert
        expect(output).toBeInstanceOf(Array);
    });
});
