export interface InternationalMessageInterface {
    title: string;
    'read-bible': string;
    Sermons: string;
    'Prayer List': string;
    Profile: string;
    About: string;
    Settings: string;
    'Search Bible': string;
    'Bible List': string;
    Bookmarks: string;
    Search: string;
    'Are You sure?': string;
    Before: string;
    Next: string;
    'Bible Versions': string;
    Highlights: string;
    Nightly: string;
    copy: string;
    remove: string;
    'Clip Notes': string;
    note: string;
    close: string;
    'create new': string;
    'prayer list': string;
    new: string;
    done: string;
    edit: string;
    create: string;
    'save changes': string;
    cancel: string;
    'are you sure to remove this item': string;
    about: string;
    donate: string;
    dark: string;
    light: string;

    /**
     * This are the bible translations
     */
    Genesis: string;
    Exodus: string;
    Leviticus: string;
    Numbers: string;
    Deuteronomy: string;
    Joshua: string;
    Judges: string;
    Ruth: string;
    '1 Samuel': string;
    '2 Samuel': string;
    '1 Kings': string;
    '2 Kings': string;
    '1 Chronicles': string;
    '2 Chronicles': string;
    Ezra: string;
    Nehemiah: string;
    Esther: string;
    Job: string;
    Psalms: string;
    Proverbs: string;
    Ecclesiastes: string;
    'Song of Solomon': string;
    Isaiah: string;
    Jeremiah: string;
    Lamentations: string;
    Ezekiel: string;
    Daniel: string;
    Hosea: string;
    Joel: string;
    Amos: string;
    Obadiah: string;
    Jonah: string;
    Micah: string;
    Nahum: string;
    Habakkuk: string;
    Zephaniah: string;
    Haggai: string;
    Zechariah: string;
    Malachi: string;
    Matthew: string;
    Mark: string;
    Luke: string;
    John: string;
    Acts: string;
    Romans: string;
    '1 Corinthians': string;
    '2 Corinthians': string;
    Galatians: string;
    Ephesians: string;
    Philippians: string;
    Colossians: string;
    '1 Thessalonians': string;
    '2 Thessalonians': string;
    '1 Timothy': string;
    '2 Timothy': string;
    Titus: string;
    Philemon: string;
    Hebrews: string;
    James: string;
    '1 Peter': string;
    '2 Peter': string;
    '1 John': string;
    '2 John': string;
    '3 John': string;
    Jude: string;
    Revelation: string;
}

type InternationalMessageTypeOptional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

export type InternationalMessageType = InternationalMessageTypeOptional<InternationalMessageInterface, 'Sermons'>;
