import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {DashboardPage} from '../../pages/DashboardPage';
import user from '../../testdata/user.json';

//npx playwright test smoke/login.spec.js --project=chromium  --headed
test('login to application',async ({page}) => {

   await page.goto('/login');

   const loginPage = new LoginPage(page);

   //console.log(test data used for login: ${user.username} and ${user.password});

   await loginPage.logintoApplication(user.username, user.password);

   const dashboardPage = new DashboardPage(page);

   await dashboardPage.clickOnMenuIcon();

   await dashboardPage.clickOnSignOutButton();

   //await page.waitForTimeout(3000);  

  
});