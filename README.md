# GPUI Kit Showcases

Submit your GPUI Kit app here for consideration in [App Stories](https://gpui-kit.com/apps).

Submitting an app does **not** guarantee a listing. We select apps based on overall completeness and quality. The current display order considers project commit history, implementation, completeness and quality to highlight the strongest examples. We will revisit presentation and ordering as the collection grows.

Read the [submission and screenshot guidelines](CONTRIBUTING.md) before opening a PR. Screenshots must be clear, show the complete application window, and present a clean, tidy interface.

提交前请阅读[应用与截图提交规范](CONTRIBUTING.md)：截图须完整清晰、包含完整应用窗口，界面干净整洁。

## Submit an app

1. Fork this repository and create `apps/<app-id>/` using a stable lowercase ID with hyphens.
2. Add your screenshots as `preview0.png`, `preview1.png`, etc. PNG, JPEG and WebP are supported; keep the correct extension for the original file format. Commit the actual images here instead of linking to external image hosting.
3. Add `manifest.json` using the example below. List screenshots in display order in `previews`; the first is the App Stories cover. Provide English and Chinese descriptions.
4. Open a pull request with a short description of the app and its current implementation status. Maintainers will review completeness and quality before deciding whether to feature it.

```text
apps/
  longbridge-pro/
    preview0.png
    preview1.png
    manifest.json
  another-app/
    preview0.webp
    manifest.json
```

```json
{
  "id": "my-app",
  "name": "My App",
  "category": "dev",
  "platforms": ["macOS", "Windows", "Linux"],
  "site": "https://example.com",
  "source": "https://github.com/owner/my-app",
  "blurb": {
    "en": "A short description of what the app does.",
    "zh": "简要介绍应用的用途。"
  },
  "building": true,
  "previews": ["preview0.png", "preview1.png"]
}
```

- `id` must match the folder name.
- `category`: `dev` (developer tools), `terminal` (terminal and network), `system` (system and desktop), or `work` (productivity and media).
- `site` and `source` may be `null`, but at least one must be a public project link.
- `building` is optional; set it to `true` if the app is still in development.
- `previews` lists local image filenames, without paths or external URLs.
- Existing archived entries include optional `previewSources`, recording the original URL and SHA-256 for each image. Preserve or update these records when replacing an archived screenshot.

## 提交应用

提交并不保证会在官网收录。我们会综合考虑应用的整体完整度与品质；目前结合项目提交历史、实际实现情况、完整度与品质安排展示顺序，优先呈现更好的案例。随着案例增多，展示与排序方式会进一步调整。

Fork 本仓库，在 `apps/<app-id>/` 中加入截图和 `manifest.json`，然后发起 PR。`previews` 按展示顺序列出截图，第一张用作官网封面；简介请提供中英文。截图直接存入本仓库，避免外部图片删除、改名或 404。

## Website maintenance

The local checkout lives alongside GPUI Kit at `../gpui-kit-showcases`. After reviewing an app, push its manifest and screenshots here before updating `website/src/components/AppsApp.vue` in GPUI Kit with the approved metadata and cover image. Website selection and ordering remain editorial; adding a manifest alone does not publish the app.

Use raw GitHub image URLs pinned to the full archive commit SHA:

```text
https://raw.githubusercontent.com/longbridge/gpui-kit-showcases/<commit-sha>/apps/<app-id>/preview0.png
```

Pinning protects published website versions from later file moves. Keep previous archive history when replacing images.

## Attribution

Screenshots belong to their respective projects. Archived entries record their original URLs in `previewSources`. This archive does not change ownership or grant a new license to the images.
