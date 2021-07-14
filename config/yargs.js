const argv = require('yargs')
							.option('b', {
								alias: 'base',
								type: 'number',
								demandOption: true // es siempre requerido
							})
							.option('l', {
								alias: 'limite',
								type: 'number',
								default: 10
							})
							.option('t', {
								alias: 'table',
								type: 'boolean',
								default: false,
								describe: 'show multiplication table'
							})
							.check((argv, options) => {
								if(argv.l < 0){
									throw 'the limit is greater than zero';
								}
								return true;
							})
							.check((argv, options) => {
								if(isNaN(argv.b)){
									throw 'the base is not a number';
								}
								return true;
							})								
							.argv;

module.exports = argv;