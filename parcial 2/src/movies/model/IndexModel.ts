import Subject from '../../shared/observer/Subject.js';
import type { Movie } from './types/Movie.js';

export class IndexModel extends Subject {
  private movies: Movie[] = [];
  private filteredMovies: Movie[] = [];
  private currentPage: number = 0;
  private readonly PAGE_SIZE = 12;
  private readonly links: string[] = ['Rentals', 'About'];

  public constructor() {
    super();
  }

  public readonly init = async (): Promise<void> => {
    await this.fetchMovies();
    this.notify();
  };

  public readonly fetchMovies = async (): Promise<Movie[]> => {
    const response = await fetch('./database/movies-2020s.json');
    const movies = (await response.json()) as Movie[];

    this.movies = movies;
    this.filteredMovies = movies;

    return movies;
  };

  public readonly getMovies = (): Movie[] => {
    return this.filteredMovies;
  };

  public readonly getLinks = (): string[] => {
    return [...this.links];
  };

  public readonly getCurrentPage = (): number => {
    return this.currentPage;
  };

  public readonly getPageCount = (): number => {
    return Math.ceil(this.filteredMovies.length / this.PAGE_SIZE);
  };

  public readonly getPageMovies = (): Movie[] => {
    const start = this.currentPage * this.PAGE_SIZE;
    const end = start + this.PAGE_SIZE;

    return this.filteredMovies.slice(start, end);
  };

  public readonly setPage = (page: number): void => {
    this.currentPage = page;
    this.notify();
  };

  public readonly search = (query: string): void => {
    const lowerQuery = query.toLowerCase();

    this.filteredMovies = this.movies.filter((movie) => {
      const title = (movie.title ?? '').toLowerCase();
      const year = String(movie.year ?? '').toLowerCase();
      const extract = (movie.extract ?? '').toLowerCase();

      return (
        title.includes(lowerQuery) ||
        year.includes(lowerQuery) ||
        extract.includes(lowerQuery)
      );
    });

    this.currentPage = 0;
    this.notify();
  };
}
