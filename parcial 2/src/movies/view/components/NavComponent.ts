export class NavBarComponent {
  private readonly onSearch: (query: string) => void;
  private readonly onNavigate: (section: string) => void;
  private readonly links: string[];

  private activeLink: string;
  private navElement: HTMLElement | null = null;
  private searchFormElement: HTMLFormElement | null = null;
  private inputElement: HTMLInputElement | null = null;
  private linkElements: Map<string, HTMLAnchorElement> = new Map();

  public constructor(
    onSearch: (query: string) => void,
    onNavigate: (section: string) => void,
    links: string[],
  ) {
    this.onSearch = onSearch;
    this.onNavigate = onNavigate;
    this.links = links;
    this.activeLink = links[0] ?? '';
  }

  public readonly get = (): HTMLElement => {
    this.linkElements.clear();

    const nav = document.createElement('nav');
    nav.classList.add('app-nav');

    const list = document.createElement('ul');

    this.links.forEach((link) => {
      const item = document.createElement('li');
      const anchor = document.createElement('a');

      anchor.href = '#';
      anchor.textContent = link;

      if (link === this.activeLink) {
        anchor.classList.add('nav-link--active');
      }

      anchor.addEventListener('click', (event) => {
        event.preventDefault();
        this.setActiveLink(link);
        this.onNavigate(link);
      });

      this.linkElements.set(link, anchor);
      item.appendChild(anchor);
      list.appendChild(item);
    });

    const form = document.createElement('form');
    form.classList.add('nav-search');
    const input = document.createElement('input');
    const button = document.createElement('button');

    input.type = 'search';
    input.placeholder = 'Buscar película...';

    button.type = 'button';
    button.textContent = 'Buscar';

    const runSearch = (): void => {
      this.onSearch(input.value.trim());
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      runSearch();
    });

    input.addEventListener('input', () => {
      runSearch();
    });

    button.addEventListener('click', () => {
      runSearch();
    });

    form.appendChild(input);
    form.appendChild(button);

    nav.appendChild(list);
    nav.appendChild(form);

    this.navElement = nav;
    this.searchFormElement = form;
    this.inputElement = input;
    this.updateSearchVisibility();

    return nav;
  };

  public readonly setActiveLink = (link: string): void => {
    this.activeLink = link;

    this.linkElements.forEach((anchor, currentLink) => {
      if (currentLink === link) {
        anchor.classList.add('nav-link--active');
      } else {
        anchor.classList.remove('nav-link--active');
      }
    });

    this.updateSearchVisibility();
  };

  private readonly updateSearchVisibility = (): void => {
    if (!this.searchFormElement) {
      return;
    }

    this.searchFormElement.style.display = this.activeLink === 'Rentals' ? '' : 'none';

    if (this.activeLink !== 'Rentals' && this.inputElement) {
      this.inputElement.value = '';
    }
  };
}
