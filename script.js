// 1. IMC
function bmi(peso, altura) {
    const indice = peso / (altura ** 2);
    if (indice < 18.5) return "Bajo de peso";
    if (indice >= 18.5 && indice < 25) return "Normal";
    if (indice >= 25 && indice < 30) return "Sobrepeso";
    return "Obeso";
  }
  
  // 2. Número de Likes
  function likes(numero) {
    if (numero < 1000) return numero.toString();
    if (numero < 1000000) return Math.floor(numero / 1000) + 'K';
    return Math.floor(numero / 1000000) + 'M';
  }
  
  // 3. Contraseña Válida
  function validarPassword() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'usuario' && password === 'contraseña') {
      alert('Acceso permitido');
    } else {
      alert('Acceso denegado');
    }
    return false;
  }
  
  // 4. Cálculo de Impuestos
  function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) return ingresos * 0.4;
    return 0;
  }
  
  // 5. Imprimir un Arreglo
  function imprimirArreglo(...items) {
    let lista = '<ul>';
    items.forEach(item => {
      lista += `<li>${item}</li>`;
    });
    lista += '</ul>';
    return lista;
  }
  
  // 6. Número de Caracteres
  function numeroDeCaracteres(string, caracter) {
    return (string.match(new RegExp(caracter, 'g')) || []).length;
  }
  
  // 7. Sumar Arreglo
  function sumarArreglo(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  
  // 8. Multiplicar Arreglo
  function multiplicarArreglo(arr) {
    return arr.reduce((a, b) => a * b, 1);
  }
  
  // 9. Sumar Arreglo Entre Rango
  function sumarArregloRango(arr, inicio, fin) {
    return arr.slice(inicio, fin + 1).reduce((a, b) => a + b, 0);
  }
  
  // 10. Encontrar el Número Máximo
  function max(arr) {
    return arr.reduce((a, b) => (b > a ? b : a), arr[0]);
  }
  function maxUsandoMath(arr) {
    return Math.max(...arr);
  }
  