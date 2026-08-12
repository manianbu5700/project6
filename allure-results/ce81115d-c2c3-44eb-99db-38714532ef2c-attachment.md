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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@class="btn btn-primary"]')
    - locator resolved to <button onclick="confirmbox()" class="btn btn-primary">click the button to display a confirm box </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    17 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7]:
        - /url: http://www.automationtesting.in
        - img [ref=e8]
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48]:
          - /url: "#OKTab"
          - text: Alert with OK
      - listitem [ref=e49]:
        - link [ref=e50]:
          - /url: "#CancelTab"
          - text: Alert with OK & Cancel
      - listitem [ref=e51]:
        - link [ref=e52]:
          - /url: "#Textbox"
          - text: Alert with Textbox
    - button [ref=e54] [cursor=pointer]: "click the button to display an alert box:"
  - generic [ref=e56]:
    - insertion [ref=e59]:
      - generic [ref=e62]:
        - heading [level=2] [ref=e64]: Discover more
        - link [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: Internet & Telecom
          - img [ref=e68]
        - link [ref=e70] [cursor=pointer]:
          - generic [ref=e71]: Automation testing platform
          - img [ref=e73]
        - link [ref=e75] [cursor=pointer]:
          - generic [ref=e76]: Test reporting software
          - img [ref=e78]
        - link [ref=e80] [cursor=pointer]:
          - generic [ref=e81]: Performance testing services
          - img [ref=e83]
        - link [ref=e85] [cursor=pointer]:
          - generic [ref=e86]: Ethics
          - img [ref=e88]
        - link [ref=e90] [cursor=pointer]:
          - generic [ref=e91]: TV & Video
          - img [ref=e93]
        - link [ref=e95] [cursor=pointer]:
          - generic [ref=e96]: API testing tools
          - img [ref=e98]
        - link [ref=e100] [cursor=pointer]:
          - generic [ref=e101]: Acting & Theater
          - img [ref=e103]
    - insertion [ref=e107]:
      - iframe [ref=e109]:
        - iframe [ref=f3e1]:
          - generic [ref=f7e2]:
            - link "Advertisement" [ref=f7e4]:
              - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjstNamlzhsGI37ZkC85P8XyhK7tWqoxKZpHySYE_24ftdkNNLb9zsTgkAZhVw39GE7OM3kgil-NoKBYRlaioSogncJjYpFp6urjKtcQIrZxbyYKmXa13NvNTmEcN_xIFUMLsjulJh8dohgTEf2-r42MJ7oqX92bGVlrM7EBaYonlvgTBHAEFxcQpyqfIFPGCzi6egm4yLNHx84TmJ9HohEyNGMK2c5_3dTwzJYBNZo6zp0m3TXUwI_sYzvmIBVQ-bdKt0OqXGVrPfb8SJ8XOjtebdq8MqZRrCHXNXQNAUqXeIE_oWxlg7-bKJ3UZjkpI5fsVZJG0DJ6Z6MgjeNUNHcMhyhCau96i0nQSSAn89Ea2JgLE47ATCPYsZFMMz_RO88wt3csMLZODhyKhztNQWbRMg-tnropDGWp26WQ8LKU0-oHXWJYEBTMWWNEP0UeHbOZDkL6zA2XFyE8RNkPSubUYMqW6zmYslCQvZYk8h7vlJHI1BYLHrv8SowUDnGeL-ImmbiYX5SbecOwSb0vov9h7Bt4UFYvLl1fe_YZ8J-gU1TJ5Dex6964DCDDvttfMLAIxfx3ZBzHMAcFFQzxaEjOknpbLYXLBZf4DXNzUEbq-FThzQTmnbaQ9MTDdKDu-jFuqMGW7q9voWwjQZ8zC1eAPwILjx1F_c0-Yw9oohAUr1SjSM4FJvu-5uRG9hsQLs6lVs-YiwoppBAs0VYnbfaZuIOeCrZpay32GlVkP85_k6ipboeSw0W6yI7BTxTEpMkUGzAq5R33oDj4Amu6E47o5HPjUuECQpEwZu8sQO7KRjpsuXmwr9IbgjnEf3an-sbnh3E_ohP066-SNj5segnZuWhJ3xq24IcYa4WIRw-VD7ynGtU84kcuGYNJMAws2fW-1Rwz23nbWVSdju-3r1yMohxIWR_qyyxH1nHsDhjDLk8YObUkT9HXp6cObSYBJSKaJA3BU_JPiOfqhF37Y-L7M6kzv_yTeEXVikdmupQIlP7cGg4J4lFQN-M9xf9Q4POFchXyjEaZmDKaP-_4wLPfkq5NrewZt8sHn3da5rO1s1BxS2l20gjFjcX_FRUkulWW7J_xn-I58ihT0a7M0dAojEmsf6ZcGLbl0tlVu8D4vK8Q9u-tH5F41M2CeQEZXaZUxnz94hhJOxvB0jH8LdgmnRSp51fkQGHwfvZM9BeyX94AK4FGRsyIW9TNiwIx7Ml-CqCFSxM13sRIiCEq1Gw8Y0dshR2txra4S0u089iM5SyQdhPZDUBkbQM-RFGUDRiwrqmCMjNhAbjmuhzXsiG6995mgW9Mh66oJEvQSzCR4MPyzoASsCoeeBzy9ArQPXjEE8vFM98hW82a6G0sO3uSRIKXYEy4RcZSqdS0X11LUe1Jbt3I1c0Rgp1Rvo3LOeixNj1FpBfSvTtKU-rQiuszSQymKY7fARFcJdRu31OUS0JdbHne8HhxLz2zo9KHOmO7ISyMxnXqtvr_giUBxQuwIAWhFyNE_aHc0ud4Sh4ZfOkqM3SV_ByVK7nApnaWD7IKymg_VnRwFuk19lEXH-NVrpc_aSGZJRZmG-oLYX2fC645H5pQKZGtvuySuZw4Sz91Hugu2oQW_5PBSJWnrZKmQ4F95wMiLnrPvTQuLtdcJieciAAyxlIlu_oirP7gT8Ovd36E8BewVfIyFV1J4uHFbrdHucbNe7-0xquDNdZh-qSprgo389P9zt-x7JK_v-NVlOV8T8BzXRo4zopz2yUdRgtw1GVBdPfPCpYyNMf0pXVSBxdXs0_WdpxC3GYcJsnI5EcOXS9u15UjAvGUFed4FC0uJ2nsrHcO8KP-5IJwODUr2QYPmT74kAvsSeTF-8VYth4zfo9DjxKnPqPF0OCAY2NpzaaVimkRM7zMu_iPzYsT1XNOotR36pC44MWa5bQE7qSlJMTHP5xLV5n9bUclgV21hkstj8q-7E-zXg8Lj7uTzbPDAT-6Cba8uBLv-_RA0WYZYFo5cxZoxgQBzMIE5OAzO4THQwQw0r6FhfI1v&sai=AMfl-YQHHdTHniMMzk0Q_iyO0-Ju5iynBIDNPzLsiT8Tae0Q83atEjUiF3lFax2vmrPih5q0eC0s6uiwJwQ9kkv6l-eJKCgry3ZzeQOP3HPQs2NP-zrrCT_MK0gq7JVP2AGsIsK3_ok7qGK4EobtF26A7EqKwZd4pUXvqe_-ffpdqm0W4gf-vT4suVdGYo8JEsGOVz4LARf9scpOE9lr4SqOu8krTweV5Xg6q_jhsBncfHfJgfq_mlomaGmlVLtSy0v6EKkRs3MKSS1XYAT5x_z6HZFYAwfXh0G-99sgfSWomy66MGvhFjIM1A-svOkWrnkcv8FE-HefByf5bxaBpE6v53cm9-rquV56IqvAw9tzPo0MHaLdEd-JeHEwcCW-1EDR8fSZFtKMamOkYAi1gMph_oBMk0M1ujsR4uAL7Ywya2mL3qdCGzBM6qgctAqz-giv1-Jhy00ozXAr9pzVKRMmJoc_ZJo5jewp1Sd9TIySZ1yyL5ujiVxGuEFFylJZEFbXLoZVoGjxFUJoAEi-sJfjWYPRKNDX3-8d6EIxKwJFm_JzljLU77VT9RBYNjkCWVZaBbdTsbRW-budjkBHOE_l6KfGgaUydPn56P2j-IheUHzrMMCNjiRBO-isuf83_3WBuvcqHWA6qDC3vkiarKF9kRvrWu0S2zYHvYh70yi_xViuujh_CVk0s2dNLtDCzAhCIcjaV-CRDpGfRPjWVXKDcLtveGCvtlSl-N7VrRCwKZTn2yZ7POf2VwDqSARHrDwc0oiYY3urJnfuyKywD8AVaep53GlqtHzjfiTggdr74V0MTgHScTL78l8cDDAPNhQT5zbhANhS6u9RteDkdhSY3qTZ5YIOu9bZbthLT7BGpyg9WkgGES9I4v9V9ZapESAI2v2G0ZwfmMCVHWOUImP74xbDdiPyfDsYtJn7kBUAnNpCIT1bd5oPSmDEBBQzvKIep38VKimiTZTn1K2XiGDs3MewYf_klQ_urg&sig=Cg0ArKJSzBFZBvq5Rudi&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.nykaa.com/bioderma-sebium-actif-intense-purifying-foaming-gel-cleanser/p/16011516%3FproductId%3D16011516%26pps%3D17%26skuId%3D14595064%26utm_medium%3Dpaid%26utm_campaign%3Din_bio_dv360_all_always-on_sebium_na_awareness_sgm-p1-display%26utm_content%3Dnative_local_sgm_inmarket-custom-intent%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23610145097
              - img "Advertisement" [ref=f7e5]
            - generic [ref=f7e6]:
              - generic:
                - img [ref=f7e10] [cursor=pointer]
                - button [ref=f7e12] [cursor=pointer]:
                  - img [ref=f7e13]
    - insertion [ref=e112]:
      - generic [ref=e115]:
        - heading [level=2] [ref=e117]: Discover more
        - link [ref=e118] [cursor=pointer]:
          - generic [ref=e119]: Web Apps & Online Tools
          - img [ref=e121]
        - link [ref=e123] [cursor=pointer]:
          - generic [ref=e124]: Software
          - img [ref=e126]
        - link [ref=e128] [cursor=pointer]:
          - generic [ref=e129]: Load testing tools
          - img [ref=e131]
        - link [ref=e133] [cursor=pointer]:
          - generic [ref=e134]: Constitutional Law & Civil Rights
          - img [ref=e136]
        - link [ref=e138] [cursor=pointer]:
          - generic [ref=e139]: Entertainment Industry
          - img [ref=e141]
        - link [ref=e143] [cursor=pointer]:
          - generic [ref=e144]: TV & Video Equipment
          - img [ref=e146]
        - link [ref=e148] [cursor=pointer]:
          - generic [ref=e149]: Content Management
          - img [ref=e151]
        - link [ref=e153] [cursor=pointer]:
          - generic [ref=e154]: Mobile app testing
          - img [ref=e156]
    - insertion [ref=e160]:
      - generic [ref=e163]:
        - heading [level=2] [ref=e165]: Discover more
        - link [ref=e166] [cursor=pointer]:
          - generic [ref=e167]: Test automation frameworks
          - img [ref=e169]
        - link [ref=e171] [cursor=pointer]:
          - generic [ref=e172]: Development Tools
          - img [ref=e174]
        - link [ref=e176] [cursor=pointer]:
          - generic [ref=e177]: Factory Automation
          - img [ref=e179]
        - link [ref=e181] [cursor=pointer]:
          - generic [ref=e182]: UI testing solutions
          - img [ref=e184]
        - link [ref=e186] [cursor=pointer]:
          - generic [ref=e187]: Software testing services
          - img [ref=e189]
        - link [ref=e191] [cursor=pointer]:
          - generic [ref=e192]: Test case management
          - img [ref=e194]
        - link [ref=e196] [cursor=pointer]:
          - generic [ref=e197]: Data validation tools
          - img [ref=e199]
        - link [ref=e201] [cursor=pointer]:
          - generic [ref=e202]: Intellectual Property
          - img [ref=e204]
    - contentinfo [ref=e207]:
      - generic [ref=e209]:
        - generic [ref=e210]:
          - text: "\"@ 2016\""
          - link [ref=e211]:
            - /url: "#"
            - text: Automation Testing
          - text: "\"All Rights Reserved.\""
        - generic [ref=e212]:
          - link [ref=e213]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e214]: 
          - link [ref=e215]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e216]: 
          - link [ref=e217]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e218]: 
          - link [ref=e219]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e220]: 
          - link [ref=e221]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e222]: 
```

# Test source

```ts
  1  | //Alert Handling
  2  | 
  3  | import { test } from '@playwright/test'
  4  | 
  5  | test('Alert Handling', async ({ page }) => {
  6  |     await page.goto('https://demo.automationtesting.in/Alerts.html')
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
> 22 |     await page.locator('//button[@class="btn btn-primary"]').click()
     |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
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