# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> login to application
- Location: tests\smoke\login.spec.js:6:5

# Error details

```
TypeError: dashboardPage.waitForTimeout is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - button "Cart" [ref=e10] [cursor=pointer]
        - generic [ref=e11]: Manage
        - img "menu" [ref=e12] [cursor=pointer]
        - generic [ref=e13]:
          - generic [ref=e14]:
            - text: Learn Automation Courses
            - img "delete" [ref=e15] [cursor=pointer]
          - generic [ref=e16]:
            - link "Home" [ref=e17] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e19] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [active] [ref=e21] [cursor=pointer]
  - generic [ref=e27]:
    - generic [ref=e28]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e29]
      - heading "©2023 All rights reserved" [level=2] [ref=e30]
    - generic [ref=e31] [cursor=pointer]:
      - link [ref=e32]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e36]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e39]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e42]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import {LoginPage} from '../../pages/LoginPage';
  3  | import {DashboardPage} from '../../pages/DashboardPage';
  4  | 
  5  | //npx playwright test smoke/login.spec.js --project=chromium  --headed
  6  | test('login to application',async ({page}) => {
  7  | 
  8  |    await page.goto('/login');
  9  | 
  10 |    const loginPage = new LoginPage(page);
  11 | 
  12 |    await loginPage.logintoApplication('admin@email.com', 'admin@123');
  13 | 
  14 |    const dashboardPage = new DashboardPage(page);
  15 | 
  16 |    await dashboardPage.clickOnMenuIcon();
  17 | 
  18 |    await dashboardPage.clickOnSignOutButton();
  19 | 
> 20 |    await dashboardPage.waitForTimeout(3000);  
     |                        ^ TypeError: dashboardPage.waitForTimeout is not a function
  21 | 
  22 |   
  23 | });
```