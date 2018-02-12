import { AppPage } from './app.po';

describe('angular-fagkveld App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async() => {
    await page.navigateTo();
    expect(page.getParagraphText()).toEqual('Andeby');
  });

  it('should filter results when I search for \"Donald\"', async() => {
    await page.navigateTo();
    await page.searchFor('Donald');
    const numberOfResults = await page.getNumberOfResults();
    expect(numberOfResults).toBe(1);
  });
});
