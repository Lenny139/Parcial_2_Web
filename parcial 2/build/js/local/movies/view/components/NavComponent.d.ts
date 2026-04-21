export declare class NavBarComponent {
    private readonly onSearch;
    private readonly onNavigate;
    private readonly links;
    private activeLink;
    private navElement;
    private searchFormElement;
    private inputElement;
    private linkElements;
    constructor(onSearch: (query: string) => void, onNavigate: (section: string) => void, links: string[]);
    readonly get: () => HTMLElement;
    readonly setActiveLink: (link: string) => void;
    private readonly updateSearchVisibility;
}
