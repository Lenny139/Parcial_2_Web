import type { IndexModel } from '../model/IndexModel.js';
import type { IndexView } from '../view/IndexView.js';

export class IndexController {
  public constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView,
  ) {}

  public readonly init = async (): Promise<void> => {
    this.view.init();
    await this.model.init();
  };
}
