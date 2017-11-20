import { AppPage } from './app.po';

describe('App', () => {
  AppPage.navigateTo();

  beforeEach(() => {
  });

  it('Header should exist on the page', async () => {
    let header = AppPage.getHeader();
    expect(header.isPresent()).toBeTruthy();
  });
});
