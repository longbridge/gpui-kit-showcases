# Dockeep

Dockeep is a cross-platform desktop app for capturing screenshots of web pages in Chrome and Chromium-based browsers. It controls the browser through the Chrome DevTools Protocol, so every screenshot is rendered by the browser itself rather than grabbed from the desktop. Captures are organized into projects and can be committed to Git automatically.

## Features

- Capture over the DevTools Protocol, by launching a visible browser or attaching to one that is already running
- Three capture modes: desktop viewport, mobile viewport, and a draggable, resizable region selector
- Tab picker for browsers with several open tabs
- Source URL embedded in PNG, JPEG and WebP files and shown in an image info popover
- Project library with search, sorting by name or last access, and Git branch and dirty state at a glance
- Image library with filtering, fullscreen preview, rename, replace and delete
- Configurable save format, quality, folder and filename style
- Optional auto-commit of added, replaced and deleted captures, with localized commit messages
- Eight themes, six interface languages, configurable date and time formats, and exportable daily logs

## Use cases

- Keeping up-to-date screenshots of a web app inside its own repository
- Documenting a UI at desktop and mobile sizes
- Capturing a precise region of a page for docs or bug reports
- Building a visual archive of reference pages, with the source URL stored in each file

Dockeep is MIT licensed. Source: https://github.com/hazyio/dockeep