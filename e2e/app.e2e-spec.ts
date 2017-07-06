import { LoginDemoPage } from './app.po';

describe('login-demo App', () => {
  let page: LoginDemoPage;

  beforeEach(() => {
    page = new LoginDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
