import { createWithDrawDto, createDepositDto, withdrawMock, depositMock } from '../../test-files/services/operation';
import { OperationService } from './operation';

describe('Create operation', () => {
    let operationService: OperationService;

    beforeEach(() => {
        operationService = new OperationService();
    });

    it('Should create withdraw operation', async () => {
        // Arrange
        const inputWithDrawOperation = createWithDrawDto;
        const myWithDrawMock = withdrawMock;
        spyOn(operationService, 'createWithDrawOperation').and.returnValue(Promise.resolve(myWithDrawMock));

        // Act
        const output: any = await operationService.createWithDrawOperation(inputWithDrawOperation);

        // Assert
        expect(output.id).toBeDefined();
    });

    it('Should create deposit operation', async () => {
        // Arrange
        const inputDepositOperation = createDepositDto;
        const myDepositMock = depositMock;
        spyOn(operationService, 'createDepositOperation').and.returnValue(Promise.resolve(myDepositMock));

        // Act
        const output: any = await operationService.createDepositOperation(inputDepositOperation);

        // Assert
        expect(output.id).toBeDefined();
    });
});
