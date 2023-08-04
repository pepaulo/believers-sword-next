import { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider';

declare global {
    interface Window {
        isElectron: Boolean,
        versions: any;
        browserWindow: {
            isWindowBrowserMaximized: () => Promise<boolean>;
            closeWindow: () => Promise<void>;
            maximizeWindow: () => Promise<void>;
            minimizeWindow: () => Promise<void>;
        };
        getAvailableBibles: Function;
        getVerses: Function;
        searchBible: Function;
        download: Function;
        downloadModule: Function;
        saveBookMark: Function;
        getBookMarks: Function;
        deleteBookmark: Function;
        getChapterHighlights: Function;
        saveHighlight: Function;
        getHighlights: Function;
        getClipNotes: Function;
        storeClipNote: Function;
        getChapterClipNotes: Function;
        message: MessageApiInjection;
        resetPrayerListItems: Function;
        deletePrayerListItem: Function;
        deleteChapterClipNotes: Function;
    }
}
export {};
