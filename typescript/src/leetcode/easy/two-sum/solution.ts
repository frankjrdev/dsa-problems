/**
 * Encuentra los índices de los dos números que suman el objetivo.
 * @param nums Arreglo de números enteros
 * @param target Suma objetivo
 * @returns Arreglo con los índices de los dos números que suman el objetivo
 */
export function twoSum(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map<number, number>();



    return [];
}

// Ejecutar las pruebas solo si este archivo se ejecuta directamente
if (require.main === module) {
    // Pruebas
    console.log("Test 1:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
    console.log("Test 2:", twoSum([3, 2, 4], 6));     // [1, 2]
    console.log("Test 3:", twoSum([3, 3], 6));         // [0, 1]
    console.log("Test 4:", twoSum([-1, -2, -3, -4, -5], -8)); // [2, 4]
}
