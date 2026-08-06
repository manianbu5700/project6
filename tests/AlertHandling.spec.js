//Alert Handling

import { test } from '@playwright/test'

test('Alert Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    //Simple Alert
    await page.on('dialog', async (dialog) => {
        await dialog.accept()
        console.log("Simple Alert: ", dialog.message()) //It help to print default message from an alert box
    })
    await page.locator('//button[@onclick="alertbox()"]').click()

    await page.locator('(//a[@class="analystic"])[2]').click() //button to show another alert

    //Confirmation Alert
    // await page.once('dialog', async (dialog) => {
    //     await dialog.dismiss()
    //     console.log("Confirmation Alert: ", dialog.message())
    // })

    await page.locator('//button[@class="btn btn-primary"]').click()

    await page.locator('(//a[@class="analystic"])[3]').click() //click to show alert button
    //Prompt Alert
    // await page.once('dialog', async (dialog) => {
    //     await dialog.accept('Hii Buddy')
    //     console.log('Prompt Alert :', dialog.message())
    // })
    await page.locator('//button[@class="btn btn-info"]').click()

})