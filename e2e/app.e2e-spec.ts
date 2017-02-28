import { TechmPage } from './app.po';

describe('techm App', () => {
  let page: TechmPage;

  beforeEach(() => {
    page = new TechmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
