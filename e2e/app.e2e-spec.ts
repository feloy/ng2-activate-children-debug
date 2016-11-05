import { ActivateChildrenDebugPage } from './app.po';

describe('activate-children-debug App', function() {
  let page: ActivateChildrenDebugPage;

  beforeEach(() => {
    page = new ActivateChildrenDebugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
