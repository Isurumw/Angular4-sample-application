import { BettingerPage } from './app.po';

describe('bettinger App', () => {
  let page: BettingerPage;

  beforeEach(() => {
    page = new BettingerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
