import { MoreSoupSitePage } from './app.po';

describe('more-soup-site App', function() {
  let page: MoreSoupSitePage;

  beforeEach(() => {
    page = new MoreSoupSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
