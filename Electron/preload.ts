import { contextBridge, ipcRenderer } from 'electron';
import { GetVerseArgs } from './Modules/Bible/Bible';

contextBridge.exposeInMainWorld('browserWindow', {
    minimizeWindow: () => ipcRenderer.invoke('minimizeWindow'),
    maximizeWindow: () => ipcRenderer.invoke('maximizeWindow'),
    closeWindow: () => ipcRenderer.invoke('closeWindow'),
    isWindowBrowserMaximized: () => ipcRenderer.invoke('isWindowBrowserMaximized'),
    versions: () => ipcRenderer.invoke('versions'),
    getAvailableBibles: () => ipcRenderer.invoke('availableBibles'),
    getVerses: (args: GetVerseArgs) => ipcRenderer.invoke('getVerses', args),
});
