const { Builder, Browser, By, until } = require('selenium-webdriver');
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome');
const Register = async () => {
    try {
        const driver = new Builder().forBrowser('chrome')
            .setChromeOptions(new chrome.Options().addArguments('--headless'))
            .build();
        // Creating connection of selenium driver and chrome driver
        await driver.get(require('./url'))
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//a')).click()
        //Register
        await driver.sleep(3000)
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div/input")).sendKeys('Isra')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[2]/div/input")).sendKeys('isra@gmail.com')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[3]/div/div[1]/input")).sendKeys('12345678')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[4]/div/div[1]/input")).sendKeys('12345678')
        await driver.sleep(1000)
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/button")).click()
        setTimeout(async () => {
            try {
                assert.equal((await driver.getCurrentUrl()).toString(), require('./url') + 'login')
                console.log('Register test case passed!')
            } catch(e) {
                console.log('Register test case failed')
            }
        }, 4000)
    } catch (error) {
        console.log(error)
    }
}
module.exports = Register