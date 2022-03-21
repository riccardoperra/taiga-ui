import {coerceValue} from '@taiga-ui/addon-doc';

describe('coercing values', () => {
    it('string -> string', () => {
        expect(coerceValue(' +7965')).toBe('+7965');
        expect(coerceValue('%2B7')).toBe('+7');
        expect(coerceValue('%20%20%20123%20%20')).toBe('   123  ');
        expect(coerceValue('Hello world')).toBe('Hello world');
        expect(coerceValue('2+5')).toBe('2+5');
        expect(coerceValue('')).toBe('');
    });

    it('string -> number', () => {
        expect(coerceValue('123')).toBe(123);
        expect(coerceValue('-123')).toBe(-123);
    });

    it('string -> boolean', () => {
        expect(coerceValue('true')).toBe(true);
        expect(coerceValue('false')).toBe(false);
    });

    it('string -> null', () => {
        expect(coerceValue('null')).toBe(null);
        expect(coerceValue('undefined')).toBe(null);
        expect(coerceValue('NaN')).toBe(null);
        expect(coerceValue('Infinity')).toBe(null);
    });
});
