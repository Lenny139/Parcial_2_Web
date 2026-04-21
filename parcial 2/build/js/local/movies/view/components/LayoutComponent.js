export class LayoutComponent {
    header;
    nav;
    main;
    footer;
    constructor(header, nav, main, footer) {
        this.header = header;
        this.nav = nav;
        this.main = main;
        this.footer = footer;
    }
    getLayoutHTML = () => {
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
//# sourceMappingURL=LayoutComponent.js.map