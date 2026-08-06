import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'

test('Page Object Model', async ({ page }) => {
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUserName('Manianbu5700')
    await login.enterPassWord('12345')
    await login.clickButton()
})
