import { createOperationDto, operationMock } from '../../test-files/services/operation';
import { OperationService } from './operation';

describe('Create operation', () => {
    let operationService: OperationService;

    beforeEach(() => {
        operationService = new OperationService();
    });

    it('Should create operation', async () => {
        // Arrange
        const inputOperation = createOperationDto;
        const myOperationMock = operationMock;
        spyOn(operationService, 'createOperation').and.returnValue(Promise.resolve(myOperationMock));

        // Act
        const output: any = await operationService.createOperation(inputOperation);

        // Assert
        expect(output.id).toBeDefined();
    });
});
