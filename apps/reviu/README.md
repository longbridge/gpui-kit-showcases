# Reviu

Reviu is a native desktop app for macOS, Windows and Linux, built with Rust and GPUI, where a coding agent does the work and you review what it did, with a real Git client underneath. Projects and running sessions sit on the left, conversations, files, diffs and terminals fill the centre in tabs and split panes, and the repository dock on the right keeps Changes, Files, History, Review and Pull Request context at hand.

## Run agents in parallel sessions

Reviu launches agents from the ACP registry, including Claude Code, Codex, Gemini, Copilot and Cline, using the CLI and subscription already installed on your machine. Sessions keep running when you switch away, show their live status in the sidebar and can work in isolated Git worktrees, so several tasks move at once without sharing a dirty checkout.

Every prompt creates a checkpoint of the working tree. You can undo a turn, roll files and conversation back to an earlier prompt, or edit a message and replay from there.

## Review code, not just a conversation

The conversation streams replies, thinking, tool activity, commands and permission requests as the agent works. Each completed turn leaves a receipt of the files and lines it changed, with actions to open the diff, review the result or undo the turn.

Open any changed file beside the conversation, comment on exact diff lines and send the comments back to the agent as a structured review. Feedback stays attached to the code it describes and is marked outdated when its lines change.

## A real editor, terminal and Git workflow

Files, diffs, conversations and terminals share one tab model: reorder tabs, drag them to an edge to split, and move between panes from the keyboard. The editor offers inline and split diffs, hunk actions, Git changes in the gutter, conflict controls, find and replace, and project search. The integrated terminal keeps its scrollback, links and working directory.

Stage by file or hunk, commit and amend, branch, stash, cherry-pick, merge, rebase interactively, resolve conflicts, inspect history, fetch, pull and push. The command palette and keyboard shortcuts reach the same actions from anywhere in the workspace.

## GitHub for the branch you are shipping

Reviu Pro puts the current branch's pull request in the dock with its files, review threads, checks, reviewers and merge readiness. The Review panel keeps local feedback for the agent separate from comments going to GitHub, and a sidebar inbox brings in notifications. Local Git and agent review work without a Reviu account.

The desktop client is source-available under the Functional Source License; each release becomes Apache-2.0 after two years. The Pro integration backend is closed-source.

[Official website](https://reviu.dev) · [GitHub repository](https://github.com/reviu-dev/reviu)
