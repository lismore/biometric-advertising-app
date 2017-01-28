import { BiometricAdvertisingAppPage } from './app.po';

describe('biometric-advertising-app App', function() {
  let page: BiometricAdvertisingAppPage;

  beforeEach(() => {
    page = new BiometricAdvertisingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
