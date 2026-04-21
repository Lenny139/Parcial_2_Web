import type { Movie } from '../../../movies/model/types/Movie.js';

export class MovieListComponent {
  private container: HTMLElement = document.createElement('div');

  private readonly getImageCandidates = (thumbnail: string): string[] => {
    const raw = thumbnail?.trim() ?? '';

    if (!raw) {
      return [];
    }

    const fileName = raw.split('/').pop()?.split('?')[0] ?? '';
    const decodedFileName = decodeURIComponent(fileName);

    const baseVariants = Array.from(new Set([fileName, decodedFileName].filter(Boolean)));
    const candidates = new Set<string>();

    baseVariants.forEach((name) => {
      candidates.add(name);

      const dotIndex = name.lastIndexOf('.');

      if (dotIndex > -1) {
        const nameWithoutExtension = name.slice(0, dotIndex);
        candidates.add(`${nameWithoutExtension}.jpg`);
        candidates.add(`${nameWithoutExtension}.jpeg`);
        candidates.add(`${nameWithoutExtension}.png`);
      }
    });

    return Array.from(candidates).map((name) => `img/movies/${name}`);
  };

  public readonly getListHTML = (
    movies: Movie[],
    onPageChange: (page: number) => void,
    currentPage: number,
    pageCount: number,
  ): HTMLElement => {
    this.container.innerHTML = '';

    const grid = document.createElement('div');
    grid.classList.add('movies-grid');

    movies.forEach((movie) => {
      const card = document.createElement('div');
      card.classList.add('movie-card');

      const image = document.createElement('img');
      const imageCandidates = this.getImageCandidates(movie.thumbnail ?? '');
      let candidateIndex = 0;

      image.src = imageCandidates[candidateIndex] ?? 'img/movies/not-icon.png';
      image.alt = movie.title;
      image.onerror = () => {
        candidateIndex += 1;

        if (candidateIndex < imageCandidates.length) {
          image.src = imageCandidates[candidateIndex];
          return;
        }

        image.onerror = null;
        image.src = 'img/movies/not-icon.png';
      };

      const body = document.createElement('div');
      body.classList.add('movie-card__body');

      const title = document.createElement('h3');
      title.classList.add('movie-card__title');
      title.textContent = movie.title;

      const year = document.createElement('span');
      year.classList.add('movie-card__year');
      year.textContent = String(movie.year);

      const genres = document.createElement('p');
      genres.classList.add('movie-card__genres');
      genres.textContent = movie.genres.join(', ');

      const extract = document.createElement('p');
      extract.classList.add('movie-card__extract');
      extract.style.maxHeight = '400px';
      extract.style.overflowY = 'auto';
      extract.textContent = movie.extract;

      const score = document.createElement('span');
      score.classList.add('movie-card__score');
      score.textContent = `⭐ ${movie.score}`;

      body.appendChild(title);
      body.appendChild(year);
      body.appendChild(genres);
      body.appendChild(extract);
      body.appendChild(score);

      card.appendChild(image);
      card.appendChild(body);
      grid.appendChild(card);
    });

    const pagination = document.createElement('div');
    pagination.classList.add('pagination');

    const prevButton = document.createElement('button');
    prevButton.textContent = '«';
    prevButton.disabled = currentPage === 0;
    prevButton.addEventListener('click', () => {
      onPageChange(currentPage - 1);
    });

    const pageInfo = document.createElement('span');
    pageInfo.textContent = `Página ${currentPage + 1} de ${pageCount}`;

    const nextButton = document.createElement('button');
    nextButton.textContent = '»';
    nextButton.disabled = currentPage === pageCount - 1;
    nextButton.addEventListener('click', () => {
      onPageChange(currentPage + 1);
    });

    pagination.appendChild(prevButton);
    pagination.appendChild(pageInfo);
    pagination.appendChild(nextButton);

    this.container.appendChild(grid);
    this.container.appendChild(pagination);

    return this.container;
  };
}
