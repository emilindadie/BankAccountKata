import { createOperationDto, operationMock } from '../../test-files/services/operation';
import { OperationService } from './operation';
import { AccountService } from '../account/account';

describe('Create operation', () => {
    let operationService: OperationService;

    beforeEach(() => {
        operationService = new OperationService(new AccountService());
    });

    it('Should create operation', async () => {
        // Arrange
        const inputAccountId = 1;
        const inputAmount = 700;
        const myOperationMock = operationMock;
        spyOn(operationService, 'createOperation').and.returnValue(Promise.resolve(myOperationMock));

        // Act
        const output: any = await operationService.createOperation(1, inputAmount);

        // Assert
        expect(output.id).toBeDefined();
    });
});
