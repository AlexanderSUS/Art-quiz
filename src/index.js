import './style/index.scss';
import View from './utils/view';
import Model from './utils/model';
import Controller from './utils/controller';
import Quiz from './utils/quiz';
import components from './utils/components';
import pages from './utils/pages';

const app = new Controller(new Model(new Quiz()), new View(pages, components));

app.init();
