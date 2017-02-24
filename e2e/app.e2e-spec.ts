import { ReptilianPokerPage } from './app.po';

describe('reptilian-poker App', () => {
  let page: ReptilianPokerPage;

  beforeEach(() => {
    page = new ReptilianPokerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
