export class DashboardPage {

  constructor(page) 
  {
    this.page = page;

    this.menuIcon=page.getByAltText("menu");

    this.signOutButton=page.getByText("Sign out",{exact:true});

  }

  async clickOnMenuIcon()
  {
    await this.menuIcon.click();
  }

  async clickOnSignOutButton()
  {
    await this.signOutButton.click();
  }

}