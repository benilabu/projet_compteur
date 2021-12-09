const {By, Key, Builder} = require('selenium-webdriver');
const assert = require('assert')

async function runTests() {
    let driver = await setup()
    await testFunctionAdd(driver)
    await driver.navigate().refresh()
    await testFunctionSubstract(driver)
    await driver.quit();
}

async function setup() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000');
    return (driver);
}

async function testFunctionAdd(driver) {
    for (let i = 0; i < 3; i++) {
        await driver.findElement(By.className('btn-success')).click()
    }
    const countValue = await driver.findElement(By.id('compteur-value')).getText()
    assert.equal(countValue, 'Count: 3')
    console.log('Test add success !')
}

async function testFunctionSubstract(driver) {
    for (let i = 0; i < 3; i++) {
        await driver.findElement(By.className('btn-danger')).click()
    }
    const countValue = await driver.findElement(By.id('compteur-value')).getText()
    assert.equal(countValue, 'Count: -3')
    console.log('Test substract success !')
}

runTests()