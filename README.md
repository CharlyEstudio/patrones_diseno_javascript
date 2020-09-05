# Patrones de Diseños en JS

## Patrón de Creación
Nos va a ayudar a crear objetos e instancias de objetos

### Constructor
Ejemplo: constructuor.js

### Constructor con Prototipo
Ejemplo: constructuor-prototipo.js

### Módulo
Ejemplo: modulo.js

### Módulo Revelador
Ejemplo: moduloRevelador.js

### Prototipo
Ejemplo: prototipo.js

## Funcionales

### Closures
Ejemplo: closures.js

### Tácita o Point Free
Ejemplo: tacita.js

### Currying
Ejemplo: currying.js

## Patrón de Estructura
Nos ayuda a entregar una estructura de interfaz sencilla o una forma de poder comunicar

### Mixin
Nos va a ayudar una clase que ya existe y agregar más funcionalidades sin alterarlo
Ejemplo: mixin.js

### Decorador
Va a tomar todas las instancias y va a ir agregando funcionalidades

### Facade (se pronuncia fasad)
Se utiliza si queremos simplificar el llamado de una función
Ejemplo: facade.js

### Adaptador
Se basa cuando tenemos una clase o una impl de una libreria, pero tenemos problemas y queremos actualizarla de nuestra API/LIB, en lugar de estar utilizando la versión anterior, queremos que use la actual y aquí entra el adaptador
Ejemplo: adaptador.js

## Patrón de Comportamiento
Nos ayuda a desacoplar el código para que sea más fácil de mantener

### Observador
Publica/Subscribe, es para escuchar los eventos de uno en el otro.
Ejemplo: observador.js

### Mediador
Es muy parecido al Observador, la diferencia, de estar escuchando entre ellos, estos lo que haran es suscribirse al mediador y este, lo despachará; una librería que que implementa este patron es redux!
*Este es genial para usarlo*
*Buscar la forma de aplicarlo en donde se pueda*
Ejemplo: mediador.js

### Comando
Nos entrega unificada para que podamos ejecutar los métodos de un objeto en particular, de esta manera en vez de llamar un método del objeto, lo que haremos será llamar a un interfaz o algún método que será ejecutar, execute, ram... Donde en ese método o función le indicaremos el método o función que nosotros queremos ejecutar seguido de los argumentos que nosotros le vamos a entregar.
*Este es genial para usarlo*
*Se puede aplicar en la mayoría de los casos*
Ejemplo: comando.js

### Cadena de Responsabilidad
Se basa en que nosotros vamos a encapsular un dato y nosotros vamos a ir agregandoles métodos a este para poder ir alterando el valor que este contiene
Ejemplo: cadena_responsabilidad.js

### Iterador
Es muy muy muy sencillo, lo que hace es que mediante una función, un método o una clase; nosotros podemos acceder a 2 métodos, uno de next y otro de value y también saber si nosotros hemos terminado de iterar una colección.
Ejemplo: iterador.js

## Otros Patrones

### IIFE (Inmediate Invoked Function Function Expression)
Es una expresión de función la cual es ejecutada inmediatamente al momento de nosotros decidirlo, la ventaja que va a tener es que nos va a ayudar a poder defirnir el módulo revelador, también nos va a ayudar con los nombre de las variables para que estás queden solamente en el alcance de la función que nosotros hemos definido
Ejemplo: iife.js

### Inyección de Dependencias
Se basa en 2 cosas, 1 en entregar el control de los métodos que se van a ejecutar a una librería que nosotros le vamos a inyectar, que no sabemos que es, es completamente transparente; y lo 2, es elimianr todos los requieres que nosotros vamos a ver arriba de nuestra aplicación.
Este patrón ayuda a realizar test mucho más sencillo
Ejemplo:
inyeccionDependencias/inyeccion_dependencias.js
inyeccionDependencias/hanlders.js

## Recomendaciones

### Composición sobre herencia
Si hacemos lo contrario, siempre vamos a heredar todo de la clase que lo componen (Gorila con la Banana) y debemos preocupar en intentar predecir el futuro con la herencia que vamos a recibir.

La mejor alternativa es la composición, y se basa en lugar de recibir una clase con varios métodos, lo que nosotros hacemos es definir pequeñas funciones que van a tener la funcionalidad particular que nosotros necesitamos; y que esta, no va a depender de una clase o instancia.
Ejemplo:
recomendaciones/composicion.js

### Inmutabilidad
Es cuando un objeto no se puede cambiar sus propiedades, no se puede agregar y/o quitar métodos; el benficio, es que va a predecir pequeños errores que van a ser grandes dolores de cabeza cuando nosotros estemos corriendo nuestro código ya en prodcucción. Cuando son mutables, no vamos a saber por que suelen suceder esos errores

Si inicia como objeto, no podemos modificarlo a un arreglo.

Para aplicar inmutabilidad dentro de nuestro código, basta en seguir 2 reglas muy sencillas:
a. Declarar con la palabra reservada "const"
b. No modificar la propiedad de una variable declarada con la palabra reservada "const"
```h
const b = { a: 1 }
b.b = 2 <== Esto no se debe de hacer, ya que, ya no sería un objeto inmutable
```
Ejemplo:
recomendaciones/inmutabilidad.js

### Async/Await
Esto resuelve el problema de las promesas (callbacks)
Ejemplo:
recomendaciones/async_await.js
