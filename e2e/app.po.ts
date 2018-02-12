import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    return browser.get('/');
  }

  async getParagraphText() {
    return await element(by.css('andeby-root h1')).getText();
  }

  async searchFor(q: string) {
    const searchInput = await element(by.id('search-input'));
    await searchInput.sendKeys(q);
    browser.sleep(2500);
  }

  async getNumberOfResults() {
    return await element.all(by.css('andeby-citizen-single')).count();
  }
}
