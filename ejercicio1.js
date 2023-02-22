/**
 * Dibujar un cuadrado hueco con asteriscos
 * Ejemplo: cuadrado(4)
 * ****
 * *  *
 * *  *
 * ****
 *
 * Recuerde que puede ser cualquier tipo de numero
 * Retornar una variable que se va a mostrar en consola
 */

function cuadrado(numero) {
  let pintura = "";

  return pintura;
}

console.log(cuadrado(4));
console.log(cuadrado(8));

/**
 * Como hacerlo:
 * Función para crear el lado de arriba y abajo del cuadrado
 * Función que haga los lados y el hueco del cuadrado
 * Bucle de 0 al tamaño del lado, menos 2 para equilibrar con el lado de arriba y abajo
 * Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izq y der
 * Ir concatenando en una variable "pintura" cada linea del cuadrado
 * Mostrar el cuadrado en la función principal
 *
 * Los saltos de linea en string son con "\n"
 */
