const fs = require('fs')
function createUser(payload) {
    const {
        username
    } = payload

    if (!username) {
        throw new Error()
    }

    if (username.length < 3) {
        throw new Error()
    }
    const data = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))
    data.push(payload)
    fs.writeFileSync('./user.json', JSON.stringify(data, null, 2))
}

module.exports = createUser