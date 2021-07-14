const {users, values} = require('./data.js');

const getUser = id => {
	
	return new Promise((res, err) => {	
		const user = users.find(el => el.id === id);
		user? res(user): err("no existe user");
	});
	
}

const getValue = id => {
	
	return new Promise((res, err) => {	
		const value = values.find(el => el.id === id);
		value? res(value): err("no existe value");
	});
}


const getInfoUser = async(id) => {
	
	try {
		
		const user = await getUser(id);
		const value = await getValue(id);
		return `name: ${user.name} value: ${value.value}`;

	} 
	catch (err) {
		throw err;
	}
}

const id = 3;

getInfoUser(id)
	.then(msg => console.log(msg))
	.catch(err => console.log(err));