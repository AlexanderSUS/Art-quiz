import './style/index.scss';
import View from './utils/view';
import Model from './utils/model';
import Controller from './utils/controller';
import Quiz from './utils/quiz';
import config from './utils/config';
import images from './utils/images';
import dictionary from './utils/dictionary';
import covers from './utils/covers';
import headerElement from './components/header';
import footerElement from './components/footer';
import pages from './utils/pages';

const app = new Controller(
  new Model(config, new Quiz(images, dictionary, covers)),
  new View(headerElement, footerElement, pages),
);

app.initChangePages();
