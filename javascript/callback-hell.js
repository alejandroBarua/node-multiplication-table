const {users, values} = require('./data.js');

const getUser = (id, callback) => {
	
	const user = users.find(el => el.id === id);
	user? callback(null, user): callback("no existe user");
}

const getValue = (id, callback) => {
	const value = values.find(el => el.id === id);
	value? callback(null, value): callback("no existe value");
}

const id = 1;

// callback-hell
getUser(id, (err, user) => {
	if(err) return console.log(err);
	getValue(id, (err, value) => {
		if(err) return console.log(err);
		console.log(`name: ${user.name} value: ${value.value}`);
	});
});
