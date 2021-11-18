const { expect } = require('chai')
const fs = require('fs')
const createUser = require('./createUser')
describe('createUser', () => {
    it('user.json should be empty', () => {
        let data = fs.readFileSync('./user.json', 'utf8')
        data = JSON.parse(data)
        expect(data).to.be.an('array')
        expect(data.length).to.be.equal(0)
    })

    it ('create user should be function', () => {
        expect(typeof createUser).to.be.equal('function')
    })

    it('it should return error if username null', () => {
        let errorCond = null
        try {
            createUser({ username: null})
        } catch (err) {
            errorCond = err
        }
        expect(errorCond).to.be.an('Error')
    })

    it ('username length is minimum 3', () => {
        let errorCond = null
        try {
            createUser({ username: 'la'})
        } catch (err) {
            errorCond = err
        }
        expect(errorCond).to.be.an('Error')
    })

    it ('it should create data to createUser.json if parameters valid', () => {
        createUser({ username: 'lala'})
        const data = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))
        const found = data.find((val => val.username === 'lala' ))
        expect(found).to.be.an('object')
    })

    after (function () {
        fs.writeFileSync('./user.json', JSON.stringify([], null, 2))
    })
})