import { addition } from "./firstFunction";

describe('Test Addtion', () => {

    it('Testing addition function', () => {
        let result = addition(10, 20);
        expect(result).toBe(30);
    });

});