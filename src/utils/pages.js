import homePage from '../views/pages/home';
import settingsPage from '../views/pages/settings';
import categoriesPage from '../views/pages/categories';
import questions from '../views/pages/questions';

const pages = {
  home: homePage,
  settings: settingsPage,
  categories: categoriesPage,
  questions,
  results: homePage,
};

export default pages;
