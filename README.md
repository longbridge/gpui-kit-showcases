# GPUI Kit Showcases

Archived screenshots for [GPUI Kit App Stories](https://gpui-kit.com/apps).
Keeping a copy here prevents upstream attachment deletion, file moves, and repository changes from breaking the website’s screenshots.

## Adding or updating a screenshot

1. Submit the app to the [Showcase discussion](https://github.com/longbridge/gpui-kit/discussions/989). Submission does not guarantee inclusion: maintainers consider overall completeness and quality.
2. Once selected, save the author’s published screenshot under `screenshots/<app-id>.<extension>`, preserving the original image and using the app ID from `website/src/components/AppsApp.vue` in the GPUI Kit repository.
3. Add or update its entry in `sources.json`: app ID, name, original URL, archive path, and SHA-256 of the archived file.
4. Commit and push the image here before updating the website to its raw GitHub URL. Pin the URL to the full commit SHA so later edits or file moves cannot break an existing website version:
   `https://raw.githubusercontent.com/huacnlee/gpui-kit-showcases/<commit-sha>/screenshots/<app-id>.<extension>`
5. Verify the new URL loads successfully. Keep existing archived images when adding replacements.

`sources.json` records provenance; its order does not define the website’s display order. The website’s maintainers curate that order based on project commit history, implementation, completeness, and quality, and will revisit the presentation as the collection grows.

## Attribution

Screenshots are authored by their respective projects. Original source URLs are recorded in `sources.json`. This archive does not change ownership or grant a new license to the images.
