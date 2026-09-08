# Omafiles

Omafiles is the file explorer Omarchy was missing: keyboard-first, themed by Omarchy, and shipped as a single binary. It reads Omarchy's own tokens and scripts, so it looks and behaves like the rest of the desktop and retints live when the theme changes.

## Everything is a keystroke

Movement follows Vim conventions, each pane has its own key context, and a command palette lists every action with its effective binding. Bindings can be remapped from a TOML file, and the mouse offers the same verbs and no more. A shortcut sheet is one key away inside the app.

## Find by name, then by content

A single search window covers the tree below the current directory: recent files when the query is empty, fuzzy name matching as you type, then full content matches. Results stay in the same window rather than a separate tool.

## Preview in place

Images, video posters, Markdown and syntax-highlighted code appear in the detail panel, colored by the active palette. The preview can expand over the listing, and moving between files keeps it in view.

## Git where you are looking

The status bar carries the branch and change counts, entry icons gain markers, and a changed file previews as its diff rendered as the file rather than as a patch. Branches can be switched without leaving the window.

## Serve and act

Any directory can be served over HTTP with one keystroke, as a detached process that keeps answering after the window closes. Files open a terminal in place, start an agent chat, share over LocalSend, or go through copy, cut, paste, zip, trash and creation actions, all routed through Omarchy's own scripts so existing defaults hold.

## Tabs, workspaces and network locations

Vertical tabs live in the sidebar, grouped by project and reorderable by dragging. Each keeps its own history and cursor, and the layout restores across restarts and stays in sync across windows. SMB, SFTP and WebDAV locations mount through GVfs and behave like ordinary directories for listing, preview and search.

[GitHub repository](https://github.com/aloisdeniel/omafiles)
