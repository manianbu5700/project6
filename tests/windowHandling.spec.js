//WindowHandling

import { test } from '@playwright/test'

test('windowHandling', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('samsung s25 ultra 5g mobile')
    await page.keyboard.press('Enter')
    const [newPage] = await Promise.all([context.waitForEvent('page'),
    page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_0"]//following-sibling::div[@data-asin="B0DSKL9MQ8"]//descendant::h2[contains(@aria-label,"Galaxy S25 Ultra 5G AI Smartphone")]')
    ])

    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
})

//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_0"]
//following-sibling::div[@data-asin="B0DSKL9MQ8"]
//descendant::h2[contains(@aria-label,"Galaxy S25 Ultra 5G AI Smartphone")]



//Dynamic xpath

//ancestor
//parent
//preceding-sibling
//child
//following-sibling
//descendant
