import Subject from '../../shared/observer/Subject.js';
import type { Movie } from './types/Movie.js';
export declare class IndexModel extends Subject {
    private movies;
    private filteredMovies;
    private currentPage;
    private readonly PAGE_SIZE;
    private readonly links;
    constructor();
    readonly init: () => Promise<void>;
    readonly fetchMovies: () => Promise<Movie[]>;
    readonly getMovies: () => Movie[];
    readonly getLinks: () => string[];
    readonly getCurrentPage: () => number;
    readonly getPageCount: () => number;
    readonly getPageMovies: () => Movie[];
    readonly setPage: (page: number) => void;
    readonly search: (query: string) => void;
}
