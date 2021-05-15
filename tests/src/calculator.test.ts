import { add } from '../../src/calculator';

describe('Unit test', () => {
    it('should return 2 for 1 + 1', () => {
        expect(add(1, 1)).toStrictEqual(2);
    })
})