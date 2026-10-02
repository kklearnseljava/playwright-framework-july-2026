import {page} from '@playwright/test';

export class LoginPage {

  constructor(page) 
  {

    this.page = page;

    this.usernameInput = page.getByPlaceholder("Enter Email");

    this.passwordInput = page.getByPlaceholder("Enter Password");

    this.loginButton = page.getByText("Sign in",{exact:true});

    this.newUrLSignUpLink= page.getByText("New user? Sign up",{exact:true});

  }

  async logintoApplication(username, password)
    {
        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

        

    }

    async clickOnNewUserSignUpLink()
    {
        await this.newUrLSignUpLink.click();
    }

}