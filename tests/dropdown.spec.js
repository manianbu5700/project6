//Dropdown Handling
import { test } from '@playwright/test'

test('Dropdown Handling', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns/')
    const fruite = await page.locator('//select[@id="fruits"]')
    await fruite.selectOption({ label: "Mango" })
    const fruiteText = await fruite.locator('option:checked').textContent()
    console.log("Selected Fruite: ", fruiteText)
    //Multiple dropdown

    const superHeros = await page.locator('//select[@id="superheros"]')
    await superHeros.selectOption([{ index: 1 }, { label: "Thor" }, { value: "hb" }])
    const heros = await superHeros.locator('option:checked').allTextContents()
    console.log("Selected SuperHeros", heros)

})


//Select values from dropdown methods

//index-------->{index:2}
//value------------>{value:"0"}
//label ------------>visible text---->{label:"Mango"}