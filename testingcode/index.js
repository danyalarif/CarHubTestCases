const { Builder, Browser, By } = require('selenium-webdriver');
const Register = require('./Register')
const Login = require('./Login');
const carBooking = require('./carBooking');
const deleteOrder = require('./deleteOrder');
const Logout = require('./Logout');
const Search = require('./Search');

async function runTestCases() {

    await Register()
    await Login()
    await carBooking()
    //await deleteOrder(driver)
    await Search()
    await Logout()
}

runTestCases()