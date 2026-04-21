export class LayoutComponent {
  private readonly header: HTMLElement;
  private readonly nav: HTMLElement;
  private readonly main: HTMLElement;
  private readonly footer: HTMLElement;

  public constructor(header: HTMLElement, nav: HTMLElement, main: HTMLElement, footer: HTMLElement) {
    this.header = header;
    this.nav = nav;
    this.main = main;
    this.footer = footer;
  }

  public readonly getLayoutHTML = (): HTMLElement => {
    const layout = document.createElement('div');
    layout.classList.add('app-layout');

    this.main.classList.add('app-main');

    layout.appendChild(this.header);
    layout.appendChild(this.nav);
    layout.appendChild(this.main);
    layout.appendChild(this.footer);

    return layout;
  };
}
