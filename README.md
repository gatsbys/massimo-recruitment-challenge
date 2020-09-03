# Massimo Dutti - Challenge (Front)
La intención de este README es actuar como añadido y/o soporte a la entrega de código de este mismo repositorio; explicando algunas decisiones técnicas, de diseño, consideraciones generales y posibles puntos de mejora.

# La prueba VS El entregable
Se ha implementado una solución lo más fiel a la especificaciones contenidas en el README del challenge.
En este aspecto he seguido punto por punto cada uno de los requerimientos.

# Ejecución

## Servidor local localhost:4200
```javascript
ng serve 
```

## Tests
```javascript
ng serve 
```
# Diseño

## async/await
La solución procura mantener la coherencia y trabajar con Promises y las keywords **async**/**await** para interactuar con la asincronía en el proyecto. A mi parecer, queda un identado no tan pronunciado, facilita la lectura y podemos utilizar las ventajas que nos ofrece el lenguaje.

## Caché (cliente)
Se ha implementado una caché en el lado de cliente utilizando la jerarquía de DI que ofrece Angular combinado con **rxjs**. Se cachean los Observables de cada llamada y se almacenan en un array que los identifica por posición y página (o id). Si existe la posición se devuelve directamente este Observable para ser resuelto y guardado en un servicio intermedio que es el que utiliza el componente.

Se ha optado por separar en **Data Provider** y **Component Service** para facilitar desacoples en el futuro y mejorar la mantenibilidad. Además de mejoras puramente de ciclo de vida de la aplicación y técnicas favorce el testing de la caché.

## Auth
Mediante la API gestionamos la creación y login de usuarios, esta API nos devuelve un JWT muy sencillo con algunos datos del usuario, como su rol.

Se han implementado interceptores para garantizar a nivel cliente estos controles de acceso tanto a nivel aplicación como a páginas restringidas por rol (página de Administrción).

Destacar que este JWT no tiene más implicación que albergar los datos de usuario y sería el que iría inyectado en hipotéticas llamadas a un Backend más elaboarado con tal de asegurar las llamadas protegidas.
En la parte cliente únicamente realizamos un decode, no estamos revisando **exp** ni **signature** la intención era mostrar el método de Autenticación y Autorización que se hubiera utilizado en una aplicación final.

## Backend
Se ha desarrollado un Backend propio en ASP.NET Core 3.1 (LTS) Ad-Hoc ,hospedado en Azure para la prueba, que consta de las siguientes partes:

* API REST con los endpoints necesarios para realizar Login y Register
* Generación de un JWT
* Persistencia en SQL Server + ORM (Entity Framework Core).

#### **A tener en cuenta**
*Es posible que las primeras llamadas a este Backend tarden algo más, esto es debido a que esta en un App Service con una **tier** free de Azure, y la primera llamada se ha de reactivar el servicio y Entity Framework ha de realizar la carga del contexto de base de datos.*

## Firebase y despliegue de la APP
El script de **npm** de **deploy** permite desplegar en firebase la aplicación en la siguiente URL : https://massimo-challenge.web.app/ para simular un entorno de producción.

## Testing
Siguiendo los puntos de la prueba hemos decidido dejar los tests configurados para todos los servicios y componentes de la aplicación y hemos profundizado en algunos, entre ellos el **provider** de la caché.
Hemos utilizado mocking para el HttpClient que ofrece Angular para probar los escenarios de **cache-hit** y **cache-miss** para comprobar que se ataca a la API cuando realmente es necesario.

**Como punto de mejora** decir que en una aplicación para producción se debería realizar todos los tests necesarios para garantizar cobertura correcta y tener cubiertas todas las funcionalidades y flujos posibles. Soy partidario de un testing real que no se centre en cobertura (al fin y al cabo hacer pasar un test por un fragmento de código no aporta nada) si no que esté enfocado  en la funcionalidad y los **corner cases**.

## Estilos
He intentado mantener un diseño lo más cercano a la web de Massimo Dutti y mantener lo máximo posible un diseño responsive. Se han dejado lado por los tiempos de entrega de la prueba temas como **animaciones**.
