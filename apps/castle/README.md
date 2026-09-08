# Castle

Castle is a native note-taking and kanban board app for Windows, written in Rust with GPUI Kit. Projects, notes and boards live together in one window with tabs, a searchable sidebar and switchable themes, and everything is stored locally.

## Notes

Write focused notes in Markdown with headings, lists and syntax-highlighted code blocks. An outline panel tracks the document structure so long notes stay navigable, and notes can be file-backed or kept in the workspace database.

## Boards

Organize work visually with kanban boards. Cards carry descriptions, colored labels, checklists with progress, due dates and reminders, and they move between lists as work advances.

## Workspace

Group notes and boards under projects, or keep them standalone. The sidebar filters items as you type, tabs hold several notes and boards open at once, and a SQLite database keeps the workspace on your own machine with no account required.

## Agent access

Castle includes an optional local Model Context Protocol server, disabled by default and enabled from Settings. Once turned on, an agent can search, create, update and move notes and todos, build project, board and list hierarchies, and manage labels, checklists, due dates and reminders. Castle refreshes open boards and saved notes after external writes while preserving unsaved editor changes, and the server intentionally exposes no delete tools.

[GitHub repository](https://github.com/BeratHundurel/castle)
