import './style/index.scss';

import View from './utils/view';
import Model from './utils/model';
import Controller from './utils/controller';
import config from './utils/config';
import headerElement from './components/header';
import footerElement from './components/footer';
import homePage from './components/home_page';
import settingsPage from './components/settings';
import categoriesPage from './components/categories';

const pages = {
  home: homePage,
  settings: settingsPage,
  categories: categoriesPage,
};

const app = new Controller(new Model(config), new View(headerElement, footerElement, pages));

app.initChangePages();
