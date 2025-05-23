// @ts-nocheck
import { twoSum } from './solution';

describe('twoSum', () => {
    test('debe encontrar los índices correctos para el ejemplo 1', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        
        // Verificar que la suma de los elementos en los índices devueltos sea igual al objetivo
        const sum = nums[result[0]] + nums[result[1]];
        expect(sum).toBe(target);
        
        // Verificar que los índices sean correctos (sin importar el orden)
        expect(result.sort()).toEqual([0, 1]);
    });

    test('debe encontrar los índices correctos para el ejemplo 2', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);
        
        const sum = nums[result[0]] + nums[result[1]];
        expect(sum).toBe(target);
        expect(result.sort()).toEqual([1, 2]);
    });

    test('debe manejar correctamente elementos duplicados', () => {
        const nums = [3, 3];
        const target = 6;
        const result = twoSum(nums, target);
        
        const sum = nums[result[0]] + nums[result[1]];
        expect(sum).toBe(target);
        expect(result.sort()).toEqual([0, 1]);
    });

    test('debe manejar correctamente números negativos', () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const result = twoSum(nums, target);
        
        const sum = nums[result[0]] + nums[result[1]];
        expect(sum).toBe(target);
        expect(result.sort()).toEqual([2, 4]);
    });

    test('debe devolver un arreglo vacío si no hay solución', () => {
        const nums = [1, 2, 3, 4];
        const target = 10;
        const result = twoSum(nums, target);
        
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(0);
    });
});
