
let users = [
    { id: "1", name: "First User", bio: "The first." },
    { id: "2", name: "Second User", bio: "The second." },
    { id: "3", name: "Third User", bio: "The third." },
    { id: "4", name: "Fourth User", bio: "The fourth." },
    { id: "5", name: "Fifth User", bio: "The fifth." },
    { id: "6", name: "Sixth User", bio: "The sixth." },
    { id: "7", name: "Seventh User", bio: "The seventh." },
    { id: "8", name: "Eighth User", bio: "The eighth." },
    { id: "9", name: "Ninth User", bio: "The ninth." },
    { id: "10", name: "Tenth User", bio: "The tenth." },
]

function getUsers() {
	return users
}

function getUserById(id) {
	return users.find(u => u.id === id)
}

function createUser(data) {
	const payload = {
		id: String(users.length + 1),
		...data,
	}

	users.push(payload)
	return payload
}

function updateUser(id, data) {
	const index = users.findIndex(u => u.id === id)
	users[index] = {
		...users[index],
		...data,
	}
	
	return users[index]
}

function deleteUser(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
}