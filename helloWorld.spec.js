const helloWord = require('./helloWorld')
const { expect } = require('chai')
describe ('Create hellow world function', () => {
    it ('hello word it should be a function', () => {
        expect(typeof helloWord).to.be.equal('function')
    })
    it ('it should return hellow world', () => {
        expect(helloWord()).to.be.equal('Hello World')
    })  
})