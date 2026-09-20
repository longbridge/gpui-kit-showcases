# Navop

Navop is a native, all-in-one workspace for people who build, run and debug systems. Instead of keeping a database client, an SSH terminal, an SFTP browser, a remote desktop viewer, a monitoring dashboard and an AI assistant in six separate windows, Navop puts them behind one connection list, one credential store, one theme and one keyboard model. A connection you added for a database is the same connection you can open a terminal on, browse files over, forward a port through or watch the load of.

It is written in Rust and rendered with GPUI, so the window is drawn natively on macOS, Windows and Linux with GPU acceleration. There is no WebView underneath, no account to create, and everything can stay on your own machine.

![Navop connection list with recent connections and the start center](preview0.png)

## Databases and data tools

Connect to MySQL, PostgreSQL, SQLite, DuckDB, SQL Server, Oracle and ClickHouse out of the box, with additional engines provided as installable drivers: TDengine, Dameng DM, KingbaseES, GBase 8s, OceanBase, openGauss and Apache IoTDB. Browse schemas, tables, views, functions, stored procedures and queries in a tree, then work in a tabbed SQL editor with syntax highlighting, completion, transaction control and execution plans.

Beyond the editor, Navop covers the everyday data work around it: import and export in common formats, generate test data, compare both schemas and table data between two connections, and draw ER diagrams to explore how the tables relate. Redis and MongoDB get dedicated interfaces with their own model of keys, collections and documents, and middleware such as MQTT is reachable through extensions.

## Terminals, SSH and remote desktops

Open local terminals alongside remote ones in tab and split layouts, or attach to a serial port for hardware work. SSH connections support keys, agents and passwords, jump hosts, port forwarding and per-connection keep-alive settings, and the SFTP side of the same connection is one click away.

Remote desktops come through RDP and VNC, rendered either inside a tab or in a dedicated fullscreen window. On Windows, Navop can also embed the native Microsoft RDP client so a session behaves exactly as it does in the system tool, while a pure-Rust canvas backend renders RDP on every platform.

## Files, local and remote

The file browser works on local disks and over SSH/SFTP/FTP with the same interface: drag and drop transfers, a transfer queue with resume, permission and ownership editing, and archive extraction. Remote files open in the built-in editor in place, with syntax highlighting, Markdown preview and Mermaid diagrams, so editing a config file on a server does not mean downloading it first.

## Monitoring

Watch CPU, memory, disk, network and process metrics for connected servers with native charts, and drill into the process list to see what is actually consuming the machine, without leaving the app or setting up a separate agent.

## An assistant with context

The built-in AI assistant works on the connection you are looking at rather than on a pasted fragment: it can write and explain SQL, optimize a slow query, describe what a result set means, and help diagnose errors. Agent workflows go further and operate on real connections, files and notes, with a workbench for reviewing sessions, plans, skills and tools.

## Notes, keys and extensions

Markdown notes live next to the work they belong to, with preview, Mermaid and export. Keys, credentials and passwords are kept in an encrypted vault that unlocks locally. Extensions add drivers, tools and integrations without waiting for a new release of the app.

## Native on three platforms

Light and dark themes follow the system or can be pinned, and the interface is available in English and Simplified Chinese. Builds ship for macOS (Apple Silicon and Intel), Windows and Linux. Connections, notes and settings can sync through your own account, or stay entirely local.

[Website](https://navop.dev) · [GitHub repository](https://github.com/feigeCode/navop)
