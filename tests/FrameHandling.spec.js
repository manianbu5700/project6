//FrameHandling

import { test } from '@playwright/test'

test('FrameHandling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    //Single Frame
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill('Hii Bro')

    await page.locator('(//a[@class="analystic"])[2]').click()
    //Multi Frame
    const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await innerFrame.locator('//input[@type="text"]').fill('Hello Dude')
    await page.waitForTimeout(3000) //External wait

})
