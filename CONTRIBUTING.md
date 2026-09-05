# Contribution guidelines

## Listing and Featured

Every merged app PR is listed in App Stories. Featured placement is not guaranteed. Maintainers select and periodically adjust Featured apps based on project history, implementation, completeness and quality, aiming to highlight complete, representative products as applications evolve.

## Files and naming

Use `apps/<app-id>/manifest.json` with a lowercase kebab-case ID, such as `longbridge-lite`, `openlogi`, or `tty7`. Only lowercase ASCII letters, digits, and single hyphens between words are allowed. The manifest `id` must match its folder exactly. The display `name` may retain brand capitalization.

Provide the required `author`, English-only `description`, and `website`/`source` fields. Descriptions are limited to 280 weighted characters, using the standard [Twitter counting rules](https://docs.x.com/fundamentals/counting-characters). See [README.md](README.md) for all manifest fields. Maintainers confirm `featured` and `publishedAt`; automation maintains Stars.

## Screenshots

- **Capture the complete application window.** Preserve the title bar or custom controls, all four corners, all four edges, navigation and main content. Missing even one corner or edge is unacceptable. Prefer window capture over a manually dragged region.
- **Keep the image clear.** Use the original resolution without stretching, upscaling or heavy compression. Text and interface details must be legible at full size. Use PNG, JPEG or WebP with the correct extension.
- **Keep the presentation clean and tidy.** Arrange representative content. Remove unrelated windows, cluttered backgrounds, context menus, tooltips, notifications and overlays obscuring the app. If a dialog is the feature being shown, retain its full parent window and explain the use case in the PR.
- **Show the real product.** Screenshots must match the current implementation. No decorative device frames, marketing overlays or collages.
- **Choose the cover carefully.** The first filename in `previews` is the cover. Additional screenshots should show distinct features. All must retain the complete window; the website displays images without cropping.
- **Commit every preview.** `previews` may contain only filenames in the app folder, such as `preview0.png` or `preview1.webp`. External URLs, absolute paths and parent-directory references are forbidden.

## Window capture instructions

### macOS

1. Bring the app to the front and arrange its content.
2. Press **Shift + Command (⌘) + 4**, release, then press **Space**. The pointer becomes a camera.
3. Hover over the target window and confirm that the whole window is highlighted, then click. Option-click to omit the shadow while retaining the complete window.
4. Open the saved image (the desktop is the default location) and inspect the four corners, four edges and title bar at full size. Do not crop the window afterward.

Source: [Apple's screenshot guide](https://support.apple.com/en-us/102646).

### Omarchy

1. Make the entire window visible and dismiss unrelated popups.
2. Press **Print Screen** for screenshot selection. Without that key, press **Super + Ctrl + C** and choose Screenshot from the Capture menu. Select the whole window rather than dragging a partial region.
3. For an explicit window picker, run `omarchy capture screenshot windows save`, then click the target window. The PNG is saved and its path is printed; the default directory is `~/Pictures` unless customized.
4. Open the original file and inspect all four corners and edges. If anything is clipped or obscured, rearrange the window and capture it again.

`Super` is usually the Windows/Command key. Custom bindings may differ; the window-capture command avoids relying on a custom shortcut. Sources: [Omarchy shortcuts](https://learn.omacom.io/books/2/pages/53), [Omarchy CLI](https://learn.omacom.io/2/the-omarchy-manual/115/omarchy-cli).

## Optional product README and detail page

Add `apps/<app-id>/README.md` to give the app a detail page in App Stories. It must be a product introduction only: purpose, features, workflows, and use cases. Maximum size is **10 KB (10,240 UTF-8 bytes)**.

Only link to the exact official `website` and GitHub `source` URLs from the manifest. Other destinations, installation/download URLs, installation instructions, Bash/shell scripts, commands and code blocks are forbidden. Violations must be resolved before merging.

Product images and videos are allowed through Markdown images or HTML `img`, `video` and `source` tags. Commit media directly in the app folder and reference local filenames only; remote media, `data:` URLs, absolute paths and `../` are forbidden. Supported images: PNG, JPEG, WebP; videos: MP4, WebM. Use `controls` on videos. Event handlers, scripts, styles and other raw HTML are forbidden.

CI checks file size, links (including references and encoded URLs), media paths, markup and common command patterns. Maintainers additionally review product accuracy, screenshot completeness, and whether the README is purely descriptive.

## Review and publication

Run `bun install --frozen-lockfile`, `bun test` and `bun run validate`, then open a PR. Maintainers may request better screenshots or content corrections. After merging, automation updates and commits GitHub Stars, then triggers GPUI Kit's `release-docs.yml` to load the latest catalog and publish. Stars are also refreshed weekly.
