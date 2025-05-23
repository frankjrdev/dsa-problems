# Two Sum (LeetCode #1) - Fácil

## Tema: Arreglos + Hash Maps

## Enlace: [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

## Objetivo: Aprender a buscar eficientemente elementos en un arreglo

### Enunciado

Dado un arreglo de enteros `nums` y un entero `target`, devuelve los índices de los dos números que suman `target`.

Puedes asumir que cada entrada tiene exactamente una solución y no puedes usar el mismo elemento dos veces. Puedes devolver la respuesta en cualquier orden.

**Ejemplo 1:**

```text
Entrada: nums = [2,7,11,15], target = 9
Salida: [0,1]
Explicación: Como nums[0] + nums[1] == 9, devolvemos [0, 1].
```

**Ejemplo 2:**

```text
Entrada: nums = [3,2,4], target = 6
Salida: [1,2]
```

**Ejemplo 3:**

```text
Entrada: nums = [3,3], target = 6
Salida: [0,1]
```

### Enfoque

#### Solución de Fuerza Bruta

1. Recorrer cada elemento del arreglo con un índice `i`.
2. Para cada `i`, recorrer el resto del arreglo con un índice `j`.
3. Verificar si `nums[i] + nums[j] === target`.
4. Si se cumple, devolver `[i, j]`.

**Complejidad:**  

- Tiempo: O(n²) - Por los dos bucles anidados.  
- Espacio: O(1) - No usamos espacio adicional.

#### Solución Optimizada con Hash Map

1. Crear un mapa para almacenar los valores y sus índices.
2. Recorrer el arreglo una vez.
3. Para cada elemento, calcular el complemento (`target - nums[i]`).
4. Verificar si el complemento existe en el mapa.
5. Si existe, devolver los índices.
6. Si no, agregar el elemento actual al mapa.

**Complejidad:**  

- Tiempo: O(n) - Recorremos el arreglo una sola vez.  
- Espacio: O(n) - En el peor caso, necesitamos almacenar todos los elementos en el mapa.

### Solución

#### TypeScript

```typescript
function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }

        numMap.set(nums[i], i);
    }

    return []; // Nunca debería llegar aquí según el enunciado
}
```

### Pruebas

```typescript
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));     // [1, 2]
console.log(twoSum([3, 3], 6));        // [0, 1]
```

### Posibles Mejoras

1. Validar la entrada (aunque el enunciado dice que hay exactamente una solución).
2. Manejar casos donde no hay solución (aunque el enunciado dice que siempre la hay).
3. Optimizaciones adicionales para casos específicos.
