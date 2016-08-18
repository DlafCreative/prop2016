export class NgfrontPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('prop-root h1')).getText();
  }
}
