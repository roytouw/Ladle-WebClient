import { LadleWebClientPage } from './app.po';

describe('ladle-web-client App', function() {
  let page: LadleWebClientPage;

  beforeEach(() => {
    page = new LadleWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
