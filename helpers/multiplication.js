const fs = require('fs');

const getMultiplicationTable = (base, limite) => {

	return new Promise((res, err) => {	
		if(typeof base != 'number') return err('the base is not a number');
		
		let data = `Multiplication Table of ${base}\n`;
	
		for (let i = 0; i <= limite; i++) {
			data += `${base} * ${i} = ${base*i}`;
			if(i<limite) data += "\n";
		}	
		res(data);
	});
};

const createFileTable = async (base = 5, limite = 10, show = false) => {
	try{
		const table = await getMultiplicationTable(base, limite);
		const file = `table-${base}.txt`;
		await fs.writeFileSync(`./files/${file}`, table);
		if(show) console.log(table);
		return file;
	}
	catch(err){
		throw err;
	}
}

module.exports = {createFileTable};