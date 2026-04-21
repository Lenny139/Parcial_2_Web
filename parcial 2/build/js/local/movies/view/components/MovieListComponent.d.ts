import type { Movie } from '../../../movies/model/types/Movie.js';
export declare class MovieListComponent {
    private container;
    private readonly getImageCandidates;
    readonly getListHTML: (movies: Movie[], onPageChange: (page: number) => void, currentPage: number, pageCount: number) => HTMLElement;
}
