# WinSSH Pro

WinSSH Pro is a native, cross-platform SSH client and remote-connection workbench for Windows, macOS and Linux. It is written in Rust and rendered with GPUI, the native GPU engine behind Zed, on top of gpui-kit components, with a 120fps rendering target. The terminal core is the same Zed-pinned Alacritty fork, so VT parsing, scrollback and PTY handling match a modern editor-grade terminal.

## One window for every remote protocol

SSH, SFTP, Telnet, serial, VNC, RDP, FTP, WebDAV and S3 sessions live side by side in a dockable workspace: terminal tabs and split panes, a dual-pane SFTP browser, and remote desktops, all in the same window.

## Key features

- **Terminal** — GPU-rendered tabs and split panes over the Alacritty VT core, with scrollback and a strict per-frame budget that keeps scrolling smooth at 120fps.
- **File transfer** — drag-and-drop SFTP with resumable transfers, Zmodem (rz/sz) support, and a built-in text editor for remote files.
- **Docker and Swarm** — manage containers, images, logs, stats and container files, plus Swarm services, nodes and tasks with scaling and node availability, all over the existing SSH session instead of a separate connection.
- **Host organization** — groups and tags, with a credential vault for passwords, private keys and API tokens; a host takes its credentials from the vault when created.
- **Connectivity** — ProxyJump bastions and SOCKS5 proxies, global or per host; local, remote and dynamic port forwarding saved with each host.
- **Live monitoring** — per-host CPU, memory, disk, network throughput and process lists.
- **Networking** — embedded EasyTier virtual networking, and Clash subscription management around the mihomo core.
- **AI assistant** — a panel that reads terminal content and moves files, speaks the OpenAI Responses protocol, and routes sensitive operations through an approval gate.
- **Workspace tools** — command snippets, an event log, and full backup and restore of all data.

## Who it is for

Developers and operators who live across many servers: jump-host fleets, home labs, Swarm clusters and cloud storage. Terminals, files, monitoring and remote desktops stay in one consistent, fast native workspace instead of a pile of separate tools.

Official website: https://winssh.net

Source code: https://github.com/lantongxue/winssh-pro
