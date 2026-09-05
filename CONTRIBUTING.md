# Showcase submission guidelines / 应用案例提交规范

## Selection / 收录标准

Submission does not guarantee inclusion in App Stories. We review the app’s implementation, overall completeness, and quality. Current display order also considers project commit history, with the aim of highlighting the strongest examples. Presentation and ordering will evolve as the collection grows.

提交不保证会在 App Stories 中收录。我们会综合评估应用的实际实现情况、整体完整度和品质，并结合项目提交历史安排展示顺序，优先展示更好的案例。随着案例数量增加，展示与排序方式会进一步调整。

## Screenshots / 截图规范

- **Show the complete application window.** Include the title bar or custom window controls, all window edges, navigation, and the main content. Do not crop away parts of the window. Use an application-window capture where possible.
- **Keep images clear and readable.** Capture at the original resolution, without stretching, upscaling, or heavy compression. Text and interface details must be legible when viewed at full size. Submit PNG, JPEG, or WebP files with the correct extension.
- **Keep the presentation clean and tidy.** Arrange content deliberately and use representative data. Avoid unrelated desktop windows, cluttered backgrounds, open context menus, tooltips, notifications, or overlays obscuring the app. If a dialog is the feature being shown, include its complete parent window and explain it in the PR.
- **Show the real application.** Screenshots should accurately represent the current implementation. Do not add decorative device frames, marketing text, or collage multiple windows into one image.
- **Choose a useful cover.** Put the strongest overview first in `previews`. Additional images should show distinct features, each with the same complete-window and clarity standards. Keep important content visible near the top: the website currently displays covers in a 16:10 crop, while the archived original must remain uncropped.

- **包含完整应用窗口。** 保留标题栏或自定义窗口控制区、全部窗口边缘、导航区域和主要内容，不裁掉窗口的任何部分。优先使用应用窗口截图。
- **完整清晰、内容可读。** 使用原始分辨率，不拉伸、不放大低清图片，不过度压缩。按原图查看时，文字和界面细节应清晰可辨。支持 PNG、JPEG、WebP，扩展名须与实际格式一致。
- **干净、整洁。** 合理整理界面内容，使用能体现应用用途的数据。避免无关桌面窗口、杂乱背景、右键菜单、悬浮提示、通知或其他遮挡。如果展示的功能本身是对话框，应包含完整父窗口，并在 PR 中说明。
- **真实呈现应用。** 截图应与当前实际实现一致，不添加装饰性设备边框、营销文字，也不将多个窗口拼成一张图。
- **认真选择封面。** `previews` 中第一张应最能概括应用用途；其余截图展示不同功能，同样须完整、清晰、整洁。官网目前会将封面按 16:10 顶部对齐裁切展示，请将重要内容放在靠上位置；仓库中仍须提交未经裁切的完整窗口原图。

## Files and review / 文件与审核

Use `apps/<app-id>/manifest.json` and store screenshots alongside it as `preview0.png`, `preview1.png`, etc., keeping their actual image extensions. Follow the manifest example and field descriptions in [README.md](README.md). List local filenames in display order in `previews`, and provide both English and Chinese descriptions.

Open a PR describing the app and its implementation status. Maintainers may request clearer screenshots or more complete information before deciding whether to feature the app.

在 `apps/<app-id>/` 内提交 `manifest.json` 和 `preview0.png`、`preview1.png` 等截图；其他格式使用对应扩展名。清单字段和示例见 [README.md](README.md)。`previews` 按展示顺序填写本地文件名，简介须提供中英文。

发起 PR 时介绍应用用途与当前实现状态。维护者可能要求补充信息或更换截图，再决定是否收录。
