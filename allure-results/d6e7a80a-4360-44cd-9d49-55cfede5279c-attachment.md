# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AlertHandling.spec.js >> Alert Handling
- Location: tests\AlertHandling.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.automationtesting.in/Alerts.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "image not displaying" [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
        - img "image not displaying" [ref=e8]
      - heading "Automation Demo Site" [level=1] [ref=e10]
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: Index.html
        - listitem [ref=e17]:
          - link "Register" [ref=e18] [cursor=pointer]:
            - /url: Register.html
        - listitem [ref=e19]:
          - link "WebTable" [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
        - listitem [ref=e21]:
          - link "SwitchTo" [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link "Widgets" [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link "Interactions" [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link "Video" [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link "WYSIWYG" [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link "More" [ref=e37] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link "Practice Site" [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Alert with OK" [ref=e48]:
          - /url: "#OKTab"
      - listitem [ref=e49]:
        - link "Alert with OK & Cancel" [ref=e50] [cursor=pointer]:
          - /url: "#CancelTab"
      - listitem [ref=e51]:
        - link "Alert with Textbox" [ref=e52] [cursor=pointer]:
          - /url: "#Textbox"
    - button "click the button to display an alert box:" [ref=e54] [cursor=pointer]
  - generic [ref=e56]:
    - insertion [ref=e59]
    - insertion [ref=e63]
    - insertion [ref=e67]
    - insertion [ref=e71]
    - contentinfo [ref=e74]:
      - generic [ref=e76]:
        - generic [ref=e77]:
          - text: "\"@ 2016\""
          - link "Automation Testing" [ref=e78] [cursor=pointer]:
            - /url: "#"
          - text: "\"All Rights Reserved.\""
        - generic [ref=e79]:
          - link "" [ref=e80] [cursor=pointer]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e81]: 
          - link "" [ref=e82] [cursor=pointer]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e83]: 
          - link "" [ref=e84] [cursor=pointer]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e85]: 
          - link "" [ref=e86] [cursor=pointer]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e87]: 
          - link "" [ref=e88] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e89]: 
```

# Test source

```ts
  1  | //Alert Handling
  2  | 
  3  | import { test } from '@playwright/test'
  4  | 
  5  | test('Alert Handling', async ({ page }) => {
> 6  |     await page.goto('https://demo.automationtesting.in/Alerts.html')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  |     //Simple Alert
  8  |     await page.on('dialog', async (dialog) => {
  9  |         await dialog.accept()
  10 |         console.log("Simple Alert: ", dialog.message()) //It help to print default message from an alert box
  11 |     })
  12 |     await page.locator('//button[@onclick="alertbox()"]').click()
  13 | 
  14 |     await page.locator('(//a[@class="analystic"])[2]').click() //button to show another alert
  15 | 
  16 |     //Confirmation Alert
  17 |     // await page.once('dialog', async (dialog) => {
  18 |     //     await dialog.dismiss()
  19 |     //     console.log("Confirmation Alert: ", dialog.message())
  20 |     // })
  21 | 
  22 |     await page.locator('//button[@class="btn btn-primary"]').click()
  23 | 
  24 |     await page.locator('(//a[@class="analystic"])[3]').click() //click to show alert button
  25 |     //Prompt Alert
  26 |     // await page.once('dialog', async (dialog) => {
  27 |     //     await dialog.accept('Hii Buddy')
  28 |     //     console.log('Prompt Alert :', dialog.message())
  29 |     // })
  30 |     await page.locator('//button[@class="btn btn-info"]').click()
  31 | 
  32 | })
```