import { createOperationDto, operationMock } from '../../test-files/services/operation';
import { OperationService } from './operation';
import { Operation } from '../../model/operation/operation.i';

describe('Get operation', () => {
    let operationService: OperationService;

    beforeEach(() => {
        operationService = new OperationService();
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

        // Act
        const output: any = await operationService.getOperationbByAccountId(inputId);

        // Assert
        expect(output).toBeInstanceOf(Array);
    });
});
