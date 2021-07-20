# This my first app in Node js

Este es un proyecto sencillo de consola con Node, donde repase los siguientes items:

- Conceptos de javascript: template strings, destructuracion, arrow functions, callbacks, promesas y async-await
- Exportar e importar archivos
- Asincronia y manejo de errores
- Como instalar modulos o paquetes npm: package.json y carpeta node_modules
- Colores en la consola
- Como pasar parametros desde la linea de comandos con yargs
- Como iniciar un repositorio git local y como resetear el ultimo commit
- Como subir el proyecto a github

```
Opciones:
	--help Show help [booleano]
	--version Show version number [booleano]
	-t, --table Show multiplication table [booleano] [defecto: false]
	-b, --base Multiplication table base [número] [requerido]
	-l, --limite Multiplication table limite [número] [defecto: 10]

```

# Introducción de que es node

- ¿Que es Node js?
- ¿Que se puede hacer con nodejs?
- ¿Cuales son las ventajas y desventajas de usar nodejs?
- ¿Cual es la diferencia entre nodejs y otros lenguaje de backend?

Node es un lenguaje de backend para ejecutar javascript en el lado del servidor, es asíncrono no bloqueante, trabaja en un unico hilo, con E/S de datos en una arquitectura orientada a eventos. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web. Este nos da acceso al sistema de archivos del equipo, nos da informacion sobre el sistema operativo y procesos que se estan ejecutando en el equipo.

Aspectos técnicos

Concurrencia

Cada vez que se establece una conexión entre el servidor y el cliente, se debe asignar un conjunto de recursos de soporte para la conexión, que se refleja principalmente en los recursos de memoria del sistema. Tomando PHP como ejemplo, mantener una conexión puede requerir 20M de memoria ya que en cada peticion se crea un nuevo hilo. Por eso, en general, una gran cantidad de concurrencia requiere más servidores. Y node soporta mas concurrencia que PHP o JAVA porque maneja asincrónicamente las conexiones por medio de un único hilo y un bucle de eventos.
Un inconveniente de trabaje con único hilo de ejecución es que requiere de módulos adicionales como cluster​ para escalar la aplicación con el número de núcleos de procesamiento de la máquina en la que se ejecuta.

Hablamos del Sin Bloqueo como una arquitectura asincrónica, que no se espera que se complete una tarea para continuar con la otra, sino que son tareas que retornan una respuesta via un callback. por ejemplo peticiones como puede ser procesar un archivo, comunicarse a una API via HTTP o hacer consultas a una Base de Datos.
Un callback es una función que es pasada como argumento a una función. Usualmente se usa para manejar la respuesta de una peticion a un servidor web o API.

Con node podemos crear app web con una rapida velocidad de ejecucion, con multiples usuarios y en tiempo real.
node incluye npm con el que contamos con muchos modulos para crear diversas apps.

- podemos usar socket.io para una comunicacion en tiempo real cliente-servidor: como se usan en chats o sitemas de notificaciones.
- manejo de archivos del equipo (FileSystem).
- conexiones a la base de datos.
- creacion de servidores del tipo API REST en segundos.

Ofrece Servicios como un Servidor Proxy.
Si una aplicación web del lado del servidor se comunica de manera dedicada con diferentes recursos de terceros para recopilar datos, para almacenar imágenes, esta plataforma puede actuar como servidor proxy cuando una empresa no tiene suficiente infraestructura de proxy profesional.

`Un proxy, o servidor proxy hace de intermediario, por ejemplo, si una hipotética máquina A solicita un recurso a C, lo hará mediante una petición a B, que a su vez trasladará la petición a C; de esta forma C no sabrá que la petición procedió originalmente de A. Esta situación estratégica de punto intermedio le permite ofrecer diversas funcionalidades: control de acceso, registro del tráfico, restricción a determinados tipos de tráfico, mejora de rendimiento, anonimato de la comunicación, caché web, etc. Reducción del tráfico mediante la implementación de caché en el proxy. Las peticiones de páginas Web se hacen al servidor Proxy y no a Internet directamente. Por lo tanto se aligera el tráfico en la red y descarga los servidores destino, a los que llegan menos peticiones.`

Secuencia de Datos Suave.
Si desea acceder a un archivo en particular mientras lo carga, Node JS le permitiría hacerlo. Esta característica es extremadamente beneficiosa para los desarrolladores cuando trabajan con codificación de audio o video en tiempo real. Se asegura de disminuir todo el tiempo de procesamiento.

## Desventajas de Nodejs

- node.js tiene una API inestable, entre versiones se tiende a romper la compatibilidad y se deben hacer cambios en tus aplicaciones para mantener todo funcionando.

- Cualquier operación con uso intensivo de la CPU anula todos los beneficios de rendimiento de su modelo de E / S sin bloqueo controlado por eventos porque todas las solicitudes entrantes se bloquearán mientras el hilo esté ocupado con su procesamiento de números.
