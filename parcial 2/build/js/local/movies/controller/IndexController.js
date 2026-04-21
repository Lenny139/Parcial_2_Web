export class IndexController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = async () => {
        this.view.init();
        await this.model.init();
    };
}
//# sourceMappingURL=IndexController.js.map