export class HeaderComponent {
    static getHeaderHTML = () => {
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
    render() {
        return HeaderComponent.getHeaderHTML().outerHTML;
    }
}
//# sourceMappingURL=HeaderComponent.js.map