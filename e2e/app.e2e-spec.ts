import { AngAssign1Page } from './app.po';

describe('ang-assign1 App', () => {
  let page: AngAssign1Page;

  beforeEach(() => {
    page = new AngAssign1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
