import { NgFormTestPage } from './app.po';

describe('ng-form-test App', function() {
  let page: NgFormTestPage;

  beforeEach(() => {
    page = new NgFormTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
