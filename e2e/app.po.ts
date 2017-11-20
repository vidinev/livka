import { browser } from 'protractor';
import { HeaderPage } from './shared/header/header.po';

export class AppPage {

  static navigateTo() {
    return browser.get('/');
  }

  static getHeader() {
    return HeaderPage.getElement();
  }
}
