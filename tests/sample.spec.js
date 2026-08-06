import { test } from '@playwright/test'

test('validate AutomationTestPracticesite', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.locator('//input[@id="password"]').fill('Password123')
    await page.locator('//button[text()="Submit"]').click()

})

//Locator

//xpath

//id-------------->//input[@id="username"]
//name------------>//input[@name="username"]a
//class----------->//button[@class="btn"]
//attribute and value------>//input[@type="text"]
//text------------->//button[text()="Submit"]
