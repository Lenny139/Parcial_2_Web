import Subject from '../../shared/observer/Subject.js';
export class IndexModel extends Subject {
    movies = [];
    filteredMovies = [];
    currentPage = 0;
    PAGE_SIZE = 12;
    links = ['Rentals', 'About'];
    constructor() {
        super();
    }
    init = async () => {
        await this.fetchMovies();
        this.notify();
    };
    fetchMovies = async () => {
        const response = await fetch('./database/movies-2020s.json');
        const movies = (await response.json());
        this.movies = movies;
        this.filteredMovies = movies;
        return movies;
    };
    getMovies = () => {
        return this.filteredMovies;
    };
    getLinks = () => {
        return [...this.links];
    };
    getCurrentPage = () => {
        return this.currentPage;
    };
    getPageCount = () => {
        return Math.ceil(this.filteredMovies.length / this.PAGE_SIZE);
    };
    getPageMovies = () => {
        const start = this.currentPage * this.PAGE_SIZE;
        const end = start + this.PAGE_SIZE;
        return this.filteredMovies.slice(start, end);
    };
    setPage = (page) => {
        this.currentPage = page;
        this.notify();
    };
    search = (query) => {
        const lowerQuery = query.toLowerCase();
        this.filteredMovies = this.movies.filter((movie) => {
            const title = (movie.title ?? '').toLowerCase();
            const year = String(movie.year ?? '').toLowerCase();
            const extract = (movie.extract ?? '').toLowerCase();
            return (title.includes(lowerQuery) ||
                year.includes(lowerQuery) ||
                extract.includes(lowerQuery));
        });
        this.currentPage = 0;
        this.notify();
    };
}
//# sourceMappingURL=IndexModel.js.map