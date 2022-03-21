import {rgbToHex} from '../rgb-to-hex';

describe('rgbToHex', () => {
    it('works', () => {
        expect(rgbToHex(10, 1, 0)).toBe('0a0100');
        expect(rgbToHex(1, 1, 1)).toBe('010101');
        expect(rgbToHex(42, 237, 3)).toBe('2aed03');
    });
});
