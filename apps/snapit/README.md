# SnapIt

SnapIt is a native screenshot and recording tool for macOS and Windows that lives in the tray. A global shortcut freezes every display and opens a full-screen overlay on each monitor, so a region can be captured without moving windows around first. It is written in Rust with GPUI Kit and ships as a single executable with no Electron or WebView layer.

## Capture and annotation

SnapIt captures regions across multiple monitors and can snap to windows or individual UI elements. Hold Shift to collect multiple regions, then combine same-display selections into one image while preserving their original positions. The annotation toolkit includes rectangles, arrows, lines, pens, mosaic, text and numbered steps, with colors, widths and undo.

A built-in crop and edit window adds two-dimensional free cropping, zoom and the full annotation toolkit before copying, saving, pinning or recognizing text. Captures can be copied as PNG or saved as PNG or JPEG.

## Scrolling capture

Scrolling capture stitches an image upward or downward with manual or adaptive automatic scrolling. It detects sticky headers, footers, sidebars and scrollbar margins to reduce duplicated content and alignment drift. A live preview, annotation tools and a long-image editor make it possible to refine the result before copying, saving, pinning or running OCR.

## Watermarks and HDR

A dedicated watermark designer combines multiple text and image elements with positioning, scaling, rotation, alignment, templates and per-output settings for screenshots, animations and videos. Watermarks are optional and rendered locally.

When the display and captured content support HDR, SnapIt can preserve a 16-bit PNG for saving, copying and history. HDR video recording uses HEVC Main10 with PQ / BT.2020 metadata and falls back to SDR when the platform encoder is unavailable.

## Text recognition, pins and history

On-device text recognition uses Apple Vision, Windows.Media.Ocr or a pure-Rust fallback and can copy recognized text automatically. Captures can be pinned above other windows with movement, zoom and opacity controls. The history panel stores screenshots and recordings with filters, thumbnails, copy, pin, reveal and delete actions.

## Recording

Region recording supports GIF, APNG and MP4. GIF and APNG are suited to chat and lossless animation, while MP4 uses the platform media frameworks for smaller hardware-encoded video. Recording includes cursor capture, customizable click effects, separate animation and video frame rates, duration limits, and a control bar for pause, cancel and stop.

## Tray-only workflow

SnapIt has no main window or launcher. Settings, history, OCR results, pins and editors open as panels only when needed. Five global shortcuts cover capture, scrolling capture, OCR, animation and video, and can be customized with conflict detection. The app includes verified GitHub Releases updates and a Windows installer.

The project is open source at https://github.com/jarven97/snapit.
