import { NgfrontPage } from './app.po';

describe('ngfront App', function() {
  let page: NgfrontPage;

  beforeEach(() => {
    page = new NgfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('prop works!');
  });
});
