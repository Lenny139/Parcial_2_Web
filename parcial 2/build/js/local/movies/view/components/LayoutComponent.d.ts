export declare class LayoutComponent {
    private readonly header;
    private readonly nav;
    private readonly main;
    private readonly footer;
    constructor(header: HTMLElement, nav: HTMLElement, main: HTMLElement, footer: HTMLElement);
    readonly getLayoutHTML: () => HTMLElement;
}
