export class FooterComponent {
  public readonly get = (): HTMLElement => {
    const footer = document.createElement('footer');
    footer.classList.add('app-footer');

    const text = document.createElement('p');
    text.textContent = '© 2026 Rental Movies UPB – Lenin Javier Serrano Gil';

    footer.appendChild(text);

    return footer;
  };
}
