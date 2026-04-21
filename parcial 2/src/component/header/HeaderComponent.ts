export class HeaderComponent {
  public static readonly getHeaderHTML = (): HTMLElement => {
    const header = document.createElement('header');
    header.className = 'app-header';

    const headerLogo = document.createElement('div');
    headerLogo.className = 'header-logo';

    const title = document.createElement('h1');
    title.textContent = 'Rental Movies UPB';

    headerLogo.appendChild(title);
    header.appendChild(headerLogo);

    return header;
  };

  public render(): string {
    return HeaderComponent.getHeaderHTML().outerHTML;
  }
}
