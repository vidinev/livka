import { HeaderPage } from './header.po';
import { iconsConfiguration, lang } from './header.config';

describe('Header on home page', () => {
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
      let iconTitle = HeaderPage.getNavigationIconTitle(index);
      let iconPicture = HeaderPage.getNavigationIconPicture(index);
      let currentTitleConfig = iconConfiguration.title[lang];

      expect(iconTitle.getText())
        .toBe(currentTitleConfig, `Icon title should be ${currentTitleConfig} should exist`);

      expect(iconPicture.isPresent())
        .toBeTruthy(`Icon ${iconConfiguration.iconClass} should exist`);

      expect(iconPicture.getAttribute('class'))
        .toContain(iconConfiguration.iconClass, `Icon should have class ${iconConfiguration.iconClass}`);
    });
  });
});
