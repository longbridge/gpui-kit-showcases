# BuMoSm Filer

A file manager for Windows, built with Rust and GPUI. GPU-accelerated drawing keeps CPU usage low, and the app falls back to CPU rendering on PCs without a dedicated GPU.

BuMoSm stands for Buttery Motion Smooth: scrolling in the tree, the file list, search results and the gallery is meant to feel as fluid as butter.

## Browse your way

- A folder tree and a file list, with the tree on the left or the right
- Multiple tabs. Drag a tab to the edge of a pane to split the view, and swap the left and right panes with Ctrl+E
- Divided view (Ctrl+D) splits the tree and the file list into two stacked sets, so you can copy between folders while watching both sides
- Top level (Ctrl+R) shows only the folder you choose at the top of the tree, which keeps a deep tree easy to read
- Seven view modes (Details, List, Tiles, and four icon sizes), remembered for each folder together with the column widths
- Home, Gallery (pictures lined up by month), Network, and the Recycle Bin in the tree, with Restore and Empty Recycle Bin
- Hidden files, hidden folders and protected system files can be shown, dimmed, by separate settings

## Search

- Search for folder names, file names, or the text inside files
- Wildcards, several names separated by commas, regular expressions, match case, whole word, extension filter, subfolders, and Git-tracked files only
- Files inside archives are searched too, including archives inside archives
- Results open in their own tab, and items found inside archives can be dragged out
- Character encodings of file contents are detected automatically

## Work with files

- Copy, cut, paste, rename and delete (Recycle Bin or permanent), with Undo and Redo for most operations
- A warning is always shown before deleting locations that Windows or apps depend on
- Drag and drop between the list, the tree and the panes to move, copy or create a shortcut
- The same right-click menu as Windows Explorer, and items you do not use can be hidden
- Rename several files at once: the same name or extension for all, or one by one
- Folder memos: a short note on a folder, shown next to its name in the tree
- Compress and extract Zip, 7z, tar.gz, tar.bz2, gz and bz2. Zip and 7z can have an AES-256 password, and several jobs can run at once with a progress card for each
- Split a file into parts and join files back together

## Bookmarks and PowerShell

- Bookmarks (Ctrl+B) can be put into groups up to three levels deep, with your own icons, and used from the keyboard
- A PowerShell panel at the bottom of the window (Ctrl+`). Choose which PowerShell to use, such as PowerShell 7 or Windows PowerShell 5.1

## Light and quick

- Smooth scrolling with adjustable speed and acceleration
- An option to lower the animation frame rate while running on battery power
- Resident mode for quick launch: the window hides instead of closing, with a tray icon, a hotkey, and an option to start at sign-in
- The total size of the open folder is counted in the background and shown in the status bar

## Make it yours

- Built-in color themes, plus custom themes written as JSON files
- Display language switching between English and Japanese, and more languages can be added by copying a language file
- Choose where the app starts: a folder of your choice, or the last folder
- Window position, size and maximized state are restored on the next launch
- An optional update check with a verified download

## Requirements

- Windows 10 or later
- No additional runtime or GPU required
- PowerShell is needed only for the PowerShell panel

## Installation

An installer and a zip package are provided with the same contents. The installer needs no administrator rights, and the zip can be extracted to any folder you can write to.

## License

Released under the Apache License 2.0.
