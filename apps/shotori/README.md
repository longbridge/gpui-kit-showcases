# Shotori

A Wayland-native screenshot tool with built-in, on-device OCR. Freeze
the screen, drag a selection, and send it where it needs to go — the
clipboard, a file, plain text, a pinned floating copy, or one long
stitched page — without reaching for the mouse.

![Shotori selecting a region over a wallpaper, with two pinned captures floating beside it](preview0.png)

## What you can do

- **Capture anything on any screen.** Every display freezes at once;
  selections can be adjusted in place and may span monitors, including
  mixed scales and rotated outputs.
- **Annotate as you think.** Rectangles, ellipses, arrows, numbered
  steps, freehand pencil, highlighter, mosaic and text — every mark
  stays editable after the fact, with a magnifier loupe for
  pixel-exact placement.
- **Read text without a cloud.** On-device OCR turns a selection into
  plain text on the clipboard. After a one-time model download,
  nothing ever leaves the machine.
- **Keep it in sight.** Pin a selection as an always-on-top floating
  image that outlives the screenshot UI — drag it across screens,
  scroll to zoom.
- **Capture the whole page.** Long screenshots stitch themselves while
  you scroll, with a live preview of the growing image and a highlight
  marking the current viewport. If part of the selection doesn't
  scroll along, the session stops safely and keeps what it captured.

## How it feels

Keyboard-first: copy, save, OCR, pin and long-screenshot are each one
keystroke. The entire interface is hand-drawn with GPUI Kit — one
coherent, GPU-rendered surface, no web views.

Wayland-native throughout: built on wlr-screencopy and layer-shell,
at home on niri, sway, Hyprland and other wlroots-adjacent
compositors.

[Source on GitHub](https://github.com/mengh04/shotori)
