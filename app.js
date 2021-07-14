const {createFileTable} = require('./helpers/multiplication.js');
const argv = require('./config/yargs.js');


//console.log(process.argv);

//console.log(argv);
//console.log('base: ', argv.base);

createFileTable(argv.b, argv.l, argv.t)
	.then(file => console.log(`the file was created ${file}`))
	.catch(err => console.log(err));