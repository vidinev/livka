import { HeaderPage } from './header.po';
import { iconsConfiguration, lang } from './header.config';
import { browser } from 'protractor';

const headerTypes = {
  home: 'Home page header - '
};

describe(`${headerTypes.home} displaying`, () => {
  HeaderPage.navigateToHome();

  beforeEach(() => {
  });

  it('Logo image should exist and contain correct src image', async () => {
    expect(HeaderPage.getLogoImage().isPresent())
      .toBeTruthy('Logo image should exist');

    expect(HeaderPage.getLogoImageSource())
      .toContain('assets/logo.png');
  });

  it('Navigation should have icons', async () => {
    iconsConfiguration.forEach((iconConfiguration, index) => {
      const iconTitle = HeaderPage.getNavigationIconTitle(index);
      const iconPicture = HeaderPage.getNavigationIconPicture(index);
      const currentTitleConfig = iconConfiguration.title[lang];

      expect(iconTitle.getText())
        .toBe(currentTitleConfig, `Icon title should be ${currentTitleConfig} should exist`);

      expect(iconPicture.isPresent())
        .toBeTruthy(`Icon ${iconConfiguration.iconClass} should exist`);

      expect(iconPicture.getAttribute('class'))
        .toContain(iconConfiguration.iconClass, `Icon should have class ${iconConfiguration.iconClass}`);
    });
  });
});

describe(`${headerTypes.home} redirects`, () => {
  it('Registration button should redirect correctly', async () => {
    HeaderPage.getNavigationIconTitle(1).click();
    expect(browser.getCurrentUrl()).toMatch(/\/join$/);
  });

  it('Should return to home on logo click', () => {
    HeaderPage.getLogoWrapper().click();
    expect(browser.getCurrentUrl()).toMatch(/\/$/);
  });

  HeaderPage.navigateToHome();
});
