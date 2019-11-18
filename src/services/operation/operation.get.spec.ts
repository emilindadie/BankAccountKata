import { createWithDrawDto, createDepositDto, withdrawMock, depositMock } from '../../test-files/services/operation';
import { OperationService } from './operation';

describe('Get operation', () => {
    let operationService: OperationService;

    beforeEach(() => {
        operationService = new OperationService();
    });

    it('Should get one operation', async () => {
        // Arrange
        const inputId = 1;
        const myWithDrawMock = withdrawMock;
        spyOn(operationService, 'getOperationById').and.returnValue(Promise.resolve(myWithDrawMock));

        // Act
        const output: any = await operationService.getOperationById(inputId);

        // Assert
        expect(output.id).toBeDefined();
    });
});
