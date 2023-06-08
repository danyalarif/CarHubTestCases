const { Builder, Browser, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const Search = async () => {
    try {
        // Creating connection of selenium driver and chrome driver
        const driver = new Builder().forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments('--headless'))
        .build();
        await driver.get(require('./url'))
        await driver.sleep(2000)
        //Login  
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div/input")).sendKeys('isra@gmail.com')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[2]/div/div[1]/input")).sendKeys('12345678')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[3]/div/div[1]/input")).click()
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/button")).click()
        //Searching
        await driver.sleep(1000)
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/header/div/div[2]/a[2]")).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/main/div/div[1]/div/div/input")).sendKeys('sdfsd')
        console.log('Search Test Case Passed')
    } catch (error) {
        console.log(error)
    }
}

module.exports = Search