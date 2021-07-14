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


const id = 2;
let nameUser;

getUser(id)
.then(user => {
	nameUser = user.name;
	return getValue(id)
})
.then(value => console.log(`name: ${nameUser} value: ${value.value}`))
.catch(err => console.log(err));
