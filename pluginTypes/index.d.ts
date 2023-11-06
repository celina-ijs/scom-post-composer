/// <amd-module name="@scom/scom-post-composer/global/index.ts" />
declare module "@scom/scom-post-composer/global/index.ts" {
    export const fetchGifs: (params: any) => Promise<any>;
    export const fetchReactionGifs: () => Promise<any>;
    export interface IEmojiCategory {
        name: string;
        value: string;
        image?: string;
        groups?: string[];
    }
    export interface IEmoji {
        name: string;
        category: string;
        group: string;
        htmlCode: string[];
        unicode: string[];
    }
    export const emojiCategories: {
        name: string;
        value: string;
        image: string;
        groups: string[];
    }[];
    export const colorsMapper: {
        'rgb(255, 220, 93)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(247, 222, 206)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(243, 210, 162)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(213, 171, 136)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(175, 126, 87)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(124, 83, 62)': {
            htmlCode: string;
            unicode: string;
        };
    };
    export const fetchEmojis: (params: any) => Promise<any>;
    export const searchEmojis: (q: string, mapper: Map<string, any>) => any;
}
/// <amd-module name="@scom/scom-post-composer/store/index.ts" />
declare module "@scom/scom-post-composer/store/index.ts" {
    import { IAuthor } from "@scom/scom-post";
    export const getCurrentUser: () => IAuthor;
}
/// <amd-module name="@scom/scom-post-composer/assets.ts" />
declare module "@scom/scom-post-composer/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-post-composer" />
declare module "@scom/scom-post-composer" {
    import { Module, MarkdownEditor, ControlElement, Container } from '@ijstech/components';
    import { IPost, IPostData } from '@scom/scom-post';
    type IReplyType = 'reply' | 'post' | 'quoted';
    type onChangedCallback = (target: MarkdownEditor) => void;
    type onSubmitCallback = (target: MarkdownEditor, medias: IPostData[]) => void;
    interface IReplyInput {
        replyTo?: IPost;
        isReplyToShown?: boolean;
        type?: IReplyType;
        placeholder?: string;
        buttonCaption?: string;
    }
    interface ScomPostComposerElement extends ControlElement {
        replyTo?: IPost;
        isReplyToShown?: boolean;
        type?: IReplyType;
        placeholder?: string;
        buttonCaption?: string;
        onChanged?: onChangedCallback;
        onSubmit?: onSubmitCallback;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-post-composer']: ScomPostComposerElement;
            }
        }
    }
    export class ScomPostComposer extends Module {
        private mdEmoji;
        private mdGif;
        private mdWidgets;
        private lbReplyTo;
        private replyEditor;
        private btnReply;
        private pnlReplyTo;
        private gridReply;
        private imgReplier;
        private pnlBorder;
        private pnlIcons;
        private gridGif;
        private gridGifCate;
        private pnlGif;
        private iconGif;
        private inputGif;
        private bottomElm;
        private gridEmojiCate;
        private groupEmojis;
        private pnlColors;
        private lbEmoji;
        private pnlEmojiResult;
        private inputEmoji;
        private gifLoading;
        private autoPlaySwitch;
        private pnlMedias;
        private selectedColor;
        private recent;
        private _data;
        private extensions;
        private currentGifPage;
        private totalGifPage;
        private renderedMap;
        private bottomObserver;
        private newReply;
        private isEmojiSearching;
        private recentEmojis;
        private emojiCateMapper;
        private emojiGroupsData;
        private searchTimer;
        onChanged: onChangedCallback;
        onSubmit: onSubmitCallback;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomPostComposerElement, parent?: Container): Promise<ScomPostComposer>;
        get replyTo(): IPost;
        set replyTo(value: IPost);
        get type(): IReplyType;
        set type(value: IReplyType);
        get placeholder(): string;
        set placeholder(value: string);
        get buttonCaption(): string;
        set buttonCaption(value: string);
        get isReplyToShown(): boolean;
        set isReplyToShown(value: boolean);
        private get isQuote();
        private get hasRecentEmojis();
        private get emojiColors();
        private get currentEmojiColor();
        private isRecent;
        setData(value: IReplyInput): void;
        clear(): void;
        private clearObservers;
        private updateGrid;
        private onEditorChanged;
        private onReply;
        private onUpload;
        private onCloseModal;
        private onShowModal;
        private onGifMdOpen;
        private onGifMdClose;
        private renderGifCate;
        private onGifSelected;
        private onGifSearch;
        private onToggleMainGif;
        private renderGifs;
        private onGifPlayChanged;
        private onIconGifClicked;
        private renderEmojis;
        private renderEmojiCate;
        private renderEmojiGroup;
        private updateEmojiGroups;
        private filterGroups;
        private onRecentClear;
        private renderEmojiColors;
        private renderColor;
        private onEmojiColorSelected;
        private onEmojiCateSelected;
        private onEmojiSelected;
        private onEmojiSearch;
        private onEmojiMdOpen;
        protected _handleClick(event: MouseEvent, stopPropagation?: boolean): boolean;
        init(): void;
        render(): any;
    }
}
