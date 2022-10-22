import { ipcMain } from "electron";

export const ipcVersionEvents = () => {
    ipcMain.handle("versions", () => {
        return {
            node: process.versions.chrome,
            chrome: process.versions.chrome,
            electron: process.versions.electron,
        };
    });
};
