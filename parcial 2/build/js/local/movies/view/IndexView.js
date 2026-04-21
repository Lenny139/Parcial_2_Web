import Observer from '../../shared/observer/Observer.js';
import { HeaderComponent } from '../../component/header/HeaderComponent.js';
import { LayoutComponent } from './components/LayoutComponent.js';
import { NavBarComponent } from './components/NavComponent.js';
import { MovieListComponent } from './components/MovieListComponent.js';
import { FooterComponent } from './components/FooterComponent.js';
export class IndexView extends Observer {
    root;
    main;
    movieList;
    nav;
    layout;
    currentSection = 'Rentals';
    constructor(model) {
        super(model);
        this.root = document.querySelector('body');
        this.main = document.createElement('main');
        this.nav = new NavBarComponent((query) => this.subjects.search(query), (section) => {
            this.currentSection = section;
            this.nav.setActiveLink(section);
            this.update();
        }, model.getLinks());
        this.movieList = new MovieListComponent();
        const footer = new FooterComponent();
        this.layout = new LayoutComponent(HeaderComponent.getHeaderHTML(), this.nav.get(), this.main, footer.get());
    }
    init = () => {
        this.root.innerHTML = '';
        this.root.appendChild(this.layout.getLayoutHTML());
    };
    update = () => {
        const model = this.subjects;
        this.main.innerHTML = '';
        if (this.currentSection === 'About') {
            this.main.appendChild(this.getAboutHTML());
            return;
        }
        this.main.appendChild(this.movieList.getListHTML(model.getPageMovies(), (page) => model.setPage(page), model.getCurrentPage(), model.getPageCount()));
    };
    getAboutHTML = () => {
        const aboutSection = document.createElement('section');
        aboutSection.classList.add('about-section');
        const title = document.createElement('h2');
        title.textContent = 'About Rental Movies UPB';
        const description = document.createElement('p');
        description.textContent =
            'Aplicación web desarrollada con TypeScript y patrón MVC para visualizar y buscar películas disponibles para renta.';
        aboutSection.appendChild(title);
        aboutSection.appendChild(description);
        return aboutSection;
    };
}
//# sourceMappingURL=IndexView.js.map