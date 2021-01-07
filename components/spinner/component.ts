interface ISpinenrSize {
    [index: string]: string;
}
class TSpinnerSyg {
    private _size: ISpinenrSize = {
        extra_small: 'mdc-spinner-extra-small',
        small: 'mdc-spinner-small',
        medium: 'mdc-spinner-medium',
        large: 'mdc-spinner-large',
    };
    private _delayVisible: number = 20;
    private _delayHidden: number = 150;

    public root: Element;

    /**
     * attach to class
     * @param root Node
     */
    static attachTo(root: Element) {
        return new TSpinnerSyg(root);
    }

    constructor(root: Element) {
        this.root = root;
    }

    /**
     * Size spinner
     */
    get size(): string {
        // tslint:disable-next-line: forin
        for (const key in this._size) {
            const cls: string = this._size[key];
            if (this.root.classList.contains(cls)) {
                return key;
            }
        }
        return '';
    }
    set size(value: string) {
        // tslint:disable-next-line: forin
        for (const key in this._size) {
            this.root.classList.remove(this._size[key]);
        }
        this.root.classList.add(this._size[value]);
    }

    /**
     * delay after Display: Block, for animation
     */
    get delayVisible(): number {
        return this._delayVisible;
    }
    set delayVisible(value: number) {
        this._delayVisible = value;
    }

    /**
     * Delay after animation, for display: none
     */
    get delayHidden(): number {
        return this._delayHidden;
    }
    set delayHidden(value: number) {
        this._delayHidden = value;
    }

    /**
     * is show spinner
     */
    isOpen(): boolean {
        return this.root.classList.contains('mdc-spinner--open');
    }

    /**
     * show spinner
     */
    open(): void {
        this.root.classList.add('mdc-spinner--open');
        setTimeout(() => {
            this.root.classList.add('animate');
        }, this._delayVisible);
    }

    /**
     * unvis spinner
     */
    close() {
        this.root.classList.remove('animate');
        setTimeout(() => {
            this.root.classList.remove('mdc-spinner--open');
        }, this._delayHidden);
    }

    /**
     * show < - > unvis spinner
     */
    toggle() {
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    }
}

export { TSpinnerSyg };