export default class Modal {
    static current: any;
    isOpening: boolean;
    static isAjaxModal: boolean;
    static isClosingModal: boolean;
    url: string;
    rawUrl: string;
    modalOptions: any;
    constructor(event?: JQueryEventObject, targeturl?: string, opt?: any);
    static enableEnsureHeight(selector: JQuery): void;
    static initialize(): void;
    static setIFrameHeight(arg: any): void;
    open(changeUrl?: boolean): boolean;
    static changeUrl(url: string): void;
    openiFrame(): boolean;
    static closeMe(): boolean;
    static close(): boolean;
    getModalTemplateForAjax(options: any): string;
    getModalTemplateForiFrame(options: any): string;
    static ensureHeight(): void;
    static adjustHeight(overflow?: number): void;
    static expandToFitPicker(target: any): void;
    static ensureNonModal(): void;
}
