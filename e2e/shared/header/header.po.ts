import { browser, by, element } from 'protractor';

const header = 'vk-header';

export class HeaderPage {
  static getElement() {
    return element(by.css(header));
  }

  static navigateToHome() {
    return browser.get('/');
  }

  static getLogoImage() {
    return element(by.css(`${header} .navbar-brand img`));
  }

  static getLogoImageSource() {
    return HeaderPage.getLogoImage().getAttribute('src');
  }

  static getNavigationIcon(index: number) {
    return element.all(by.css(`${header} .icon-nav`)).get(index);
  }

  static getNavigationIconTitle(index: number) {
    return HeaderPage.getNavigationIcon(index).element(by.css('.icon-text'));
  }

  static getNavigationIconPicture(index: number) {
    return HeaderPage.getNavigationIcon(index).element(by.css('.icon-round'));
  }
}
