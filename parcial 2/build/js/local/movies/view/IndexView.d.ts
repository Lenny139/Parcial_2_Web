import Observer from '../../shared/observer/Observer.js';
import { IndexModel } from '../model/IndexModel.js';
export declare class IndexView extends Observer {
    private root;
    private main;
    private movieList;
    private nav;
    private layout;
    private currentSection;
    constructor(model: IndexModel);
    readonly init: () => void;
    readonly update: () => void;
    private readonly getAboutHTML;
}
