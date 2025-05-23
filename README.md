# DSA Problems

Repositorio personal para practicar problemas de estructuras de datos y algoritmos.

## Estructura del Proyecto

```
.
├── java/               # Soluciones en Java
│   └── src/
│       ├── leetcode/   # Problemas de LeetCode
│       ├── hackerrank/ # Problemas de HackerRank
│       ├── codewars/  # Katas de CodeWars
│       ├── neetcode/  # Problemas de NeetCode
│       ├── algoexpert/ # Problemas de AlgoExpert
│       └── cs50/      # Ejercicios de CS50
├── python/             # Soluciones en Python
│   └── src/
│       ├── leetcode/
│       ├── hackerrank/
│       ├── codewars/
│       ├── neetcode/
│       ├── algoexpert/
│       └── cs50/
└── typescript/         # Soluciones en TypeScript
    └── src/
        ├── leetcode/
        ├── hackerrank/
        ├── codewars/
        ├── neetcode/
        ├── algoexpert/
        └── cs50/
```

## Cómo Contribuir

1. Crea una rama para cada problema: `git checkout -b feature/leetcode/two-sum`
2. Añade tus soluciones en el directorio correspondiente
3. Incluye tests para validar tu solución
4. Haz un Pull Request con una descripción clara del problema y tu solución

## Recursos Recomendados

- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/domains/tutorials/10-days-of-algorithms)
- [NeetCode](https://neetcode.io/)
- [CodeWars](https://www.codewars.com/)
- [CS50](https://cs50.harvard.edu/x/2023/)
- [AlgoExpert](https://www.algoexpert.io/product)

## Ruta de Aprendizaje

### 1. Fundamentos de Programación
- Variables, tipos de datos, operadores
- Estructuras de control (if/else, bucles)
- Funciones y recursión
- Complejidad algorítmica (Big-O)

### 2. Estructuras de Datos Básicas
- Arrays/Listas
- Strings
- Hash Tables/Diccionarios
- Sets
- Stacks y Queues

### 3. Algoritmos Básicos
- Búsqueda lineal y binaria
- Ordenamiento (Bubble, Selection, Insertion, Merge, Quick)
- Dos punteros
- Sliding Window

### 4. Estructuras de Datos Intermedias
- Linked Lists
- Árboles binarios
- Heaps
- Grafos

### 5. Algoritmos Avanzados
- Divide y vencerás
- Programación dinámica
- Backtracking
- Algoritmos sobre grafos (BFS, DFS, Dijkstra)

## Buenas Prácticas

- Escribe código limpio y legible
- Incluye comentarios cuando sea necesario
- Escribe pruebas unitarias
- Documenta tus soluciones
- Sigue las convenciones de estilo del lenguaje
- Optimiza tanto para tiempo como para espacio

## Teoría y Conceptos

### Complejidad Algorítmica (Big-O)
La notación Big-O describe el rendimiento de un algoritmo en términos del tamaño de la entrada. Algunas complejidades comunes son:

- O(1): Tiempo constante
- O(log n): Logarítmico
- O(n): Lineal
- O(n log n): Linealítmico
- O(n²): Cuadrático
- O(2^n): Exponencial
- O(n!): Factorial

### Técnicas Comunes

#### Two Pointers
Técnica donde usamos dos punteros que recorren la estructura de datos (generalmente un arreglo o lista enlazada) para resolver problemas de manera eficiente.

**Cuándo usarla:**
- Problemas que involucran pares en un arreglo ordenado
- Problemas que involucran subarreglos
- Problemas de búsqueda en arreglos ordenados

**Ejemplo de problema:** [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

#### Sliding Window
Técnica que implica crear una "ventana" que se desliza sobre una estructura de datos (generalmente un arreglo o cadena) para encontrar un subconjunto que cumpla ciertas condiciones.

**Cuándo usarla:**
- Problemas que involucran subarreglos o subcadenas
- Problemas que piden encontrar el/los subconjunto(s) que cumplan cierta condición
- Problemas que pueden resolverse con complejidad O(n)

**Ejemplo de problema:** [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

### Próximos Pasos

1. Comenzaremos con problemas fáciles de cada categoría
2. Iremos aumentando la dificultad gradualmente
3. Cada problema incluirá:
   - Enunciado
   - Explicación de la solución
   - Análisis de complejidad
   - Posibles optimizaciones
   - Enlaces a recursos adicionales

¿Listo para comenzar? ¡Vamos con nuestro primer problema!