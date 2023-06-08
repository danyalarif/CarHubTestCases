const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const carBooking = async () => {
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
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[1]/main/div[2]/div[3]/div/div[1]/div/div[1]/div/div[4]/div/button/div')).click()
        await driver.sleep(2000)
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/main/div/div[2]/div/input")).sendKeys('John Wick')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/main/div/div[3]/div/input")).sendKeys('johnwick@gmail.com')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/main/div/div[4]/div/input")).sendKeys('Lane #12 Hotel City Islamabad')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/main/div/div[5]/div/input")).sendKeys('03496899560')
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/main/div/div[6]/div/div/input")).click()
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.SPACE)).perform()
        await driver.sleep(2000)
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/main/div/button")).click()
        console.log('Car Booking Test Case Passed')
    } catch (error) {
        console.log(error)
    }
}

module.exports = carBooking