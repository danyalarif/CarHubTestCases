const { Builder, Browser, By } = require('selenium-webdriver');
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome');

const Login = async () => {
    try {
        // Creating connection of selenium driver and chrome driver
        let driver = new Builder().forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments('--headless'))
        .build();
        await driver.get(require('./url'))
        await driver.sleep(2000)
        //Login  
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div/input")).sendKeys('isra@gmail.com')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[2]/div/div[1]/input")).sendKeys('12345678')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[3]/div/div[1]/input")).click()
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/button")).click()
        setTimeout(async () => {
            try {
                assert.equal((await driver.getCurrentUrl()).toString(), require('./url') + 'customer')
                console.log('Customer Login test case passed!')
            } catch(e) {
                console.log('Customer Login test case failed')
            }
        }, 4000)
    } catch (error) {
        console.log(error)
    }
}

module.exports = Login