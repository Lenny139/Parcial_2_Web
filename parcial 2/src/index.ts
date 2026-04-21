import { IndexModel } from './movies/model/IndexModel.js';
import { IndexView } from './movies/view/IndexView.js';
import { IndexController } from './movies/controller/IndexController.js';

const model = new IndexModel();
const view = new IndexView(model);
const controller = new IndexController(model, view);

controller.init();
