declare class TSpinnerSyg {
    private _size;
    private _delayVisible;
    private _delayHidden;
    root: Element;
    /**
     * attach to class
     * @param root Node
     */
    static attachTo(root: Element): TSpinnerSyg;
    constructor(root: Element);
    /**
     * Size spinner
     */
    get size(): string;
    set size(value: string);
    /**
     * delay after Display: Block, for animation
     */
    get delayVisible(): number;
    set delayVisible(value: number);
    /**
     * Delay after animation, for display: none
     */
    get delayHidden(): number;
    set delayHidden(value: number);
    /**
     * is show spinner
     */
    isOpen(): boolean;
    /**
     * show spinner
     */
    open(): void;
    /**
     * unvis spinner
     */
    close(): void;
    /**
     * show < - > unvis spinner
     */
    toggle(): void;
}
export { TSpinnerSyg };