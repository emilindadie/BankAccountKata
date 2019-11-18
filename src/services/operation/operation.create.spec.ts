import { createWithDrawDto, createDepositDto } from '../../test-files/services/operation';
import { OperationService } from './operation';

describe('Create operation', () => {
    let operationService: OperationService;

    beforeEach(() => {
        operationService = new OperationService();
    });

    it('Should create operation', async () => {
        // Arrange
        const inputWithDrawOperation = createWithDrawDto;

        // Act
        const output: any = await operationService.createWithDrawOperation(inputWithDrawOperation);

        // Assert
        expect(output.id).toBeDefined();
    });
});
