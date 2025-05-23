// Configuración global de pruebas
console.log('Configuración de Jest inicializada');

// Configurar el entorno de pruebas
process.env.NODE_ENV = 'test';

// Configurar el límite de tiempo para las pruebas (30 segundos)
jest.setTimeout(30000);
