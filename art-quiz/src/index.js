import './style/index.scss';
import View from './utils/view';
import Model from './utils/model';
import Controller from './utils/controller';
import Quiz from './utils/quiz';
import config from './utils/config';
import images from './utils/images';
import dictionary from './utils/dictionary';
import covers from './utils/covers';
import components from './utils/components';
import pages from './utils/pages';

const app = new Controller(
  new Model(config, new Quiz(images, dictionary, covers)),
  new View(pages, components),
);

app.initChangePages();
