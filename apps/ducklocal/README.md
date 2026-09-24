DuckLocal is a desktop workspace for asking questions of the data files already on your machine. Drop in a CSV, Parquet, JSON or Excel file, or a whole folder, and query it with DuckDB SQL right away. No server, no connection to configure, no account: files are read where they are, never copied or uploaded. It is a native GPUI app written in Rust, with DuckDB running inside it.

## Open what you already have

Each file appears in the sidebar as a view named after it, with its columns and types. Folders are read recursively, globs work, workbooks become one table per sheet, and a DuckDB database opens as the workspace itself. Opened files come back on the next launch, and S3 buckets can be browsed from the same sidebar.

## Write and run SQL

Query tabs have highlighting, autocompletion from your own tables, formatting and `EXPLAIN` plans. Results can be filtered, charted, or exported to CSV or Parquet, and the history keeps every statement. The interface comes in English and Simplified Chinese, light and dark, at four sizes.

## Dashboards as plain files

A dashboard is a small text file of query and plot blocks, drawn as a tab of bar, line, area, scatter and table plots. Its source view highlights both the dashboard language and the SQL inside it, with completion and inline diagnostics. Dashboard queries may only read, so opening one someone sent you cannot change your data, and a language server brings the same checks to other editors.

## Built for AI agents

The same binary answers one SQL statement from the terminal as structured JSON, without opening a window, and an official agent skill teaches schema-first analysis. For custom views, analysis apps are JavaScript views over the same connection, exportable as a single HTML page.

## Status

In active development. The first release is a signed, notarized build for macOS on Apple silicon; Linux and Windows builds are being prepared.

[Website](https://ducklocal.app/) · [GitHub repository](https://github.com/JetSquirrel/DuckLocal)
