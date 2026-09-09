# Farcaster

Farcaster is a native desktop app for driving coding agents. It puts several agent harnesses behind one interface, so sessions across Codex, Pi, OpenCode and Cursor share the same layout, the same keybindings and the same review workflow.

## One interface across harnesses

Each harness keeps its own providers and models, but the app around them stays the same. Switching from one agent to another does not mean learning another interface, and the harness, model and reasoning effort for a session are chosen from the composer before the work starts.

## Many sessions at once

The sidebar keeps concurrent sessions in view with their status, elapsed time and unread activity, and archived work stays searchable. Because sessions run in parallel, cheaper models can be left working as helpers while a stronger agent leads the task.

## Built for the keyboard

Sessions, transcripts, the change list and the editor are all reachable without the mouse, so the workspace behaves predictably for anyone used to a modal editor.

## Review and edit in Neovim

A full terminal emulator is embedded in the app, and Neovim is the configured editor inside it. Clicking a changed file in the transcript or in the Git change list opens the real file in Neovim rather than a limited diff viewer, so reviewing an agent's work is the same as editing it.

## Watch what the agent touches

The transcript groups edits and commands as they happen, and a change panel tracks added and removed lines per file across the whole working tree. Problems in an implementation usually show up in the files being touched, long before the agent reports back.

## Coordinate agents with shared tools

An optional MCP server exposes shared tools to the harnesses that support it. A workgraph keeps a plan and task queue that outlives a single session, and worker tools let one agent create sessions and talk to them across harnesses, providers and models. Harnesses without built-in subagents can hand implementation or review to separate workers this way, and every worker thread stays visible and editable from the app.

[GitHub repository](https://github.com/behzade/farcaster)
