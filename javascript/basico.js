// Destructuracion

// caso 1:

const persona = {
	nombre: "alejandro",
	apellido: "barua",
	edad: 25,
	
}

const {nombre, apellido, edad} = persona;

console.log(nombre);

// caso 2:

const getPersona = ({nombre, apellido, edad = 0}) => {
	console.log(`${nombre} ${apellido} ${edad}`);
}

getPersona(persona);

// caso 3:

const heroes = ['superman', 'hulk', 'batman'];
const [ , h2, h3] = heroes;
console.log(h2);

// Funcion flecha

const sumar = (a, b) => a + b;
const saludar = () => 'Hello World';

// Callback

const getUserById = (id, callback) => {
	
	const user = {
		id,
		nombre: 'Alejandro'
	}

	setTimeout(() => callback(user), 1000);
}

getUserById(10, (user) => {
	console.log(user);
});