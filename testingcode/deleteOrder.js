const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const deleteOrder = async () => {
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
        //Car Booking
        await driver.sleep(7000)
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/header/div/div[2]/a[3]")).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/main/div/div[1]/div[2]/button")).click()
        console.log('order deletion test case successful')
    } catch (error) {
        console.log(error)
    }
}

module.exports = deleteOrder