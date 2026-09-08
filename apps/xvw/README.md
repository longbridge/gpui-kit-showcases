# xvw

xvw is a GPU-accelerated hex and binary editor written in Rust with GPUI. It is built for reverse engineering, firmware inspection and binary format debugging, where files are large, structures are unfamiliar and every byte matters.

## Open gigabyte files immediately

Memory-mapped reads let multi-gigabyte files and disk dumps open at once, with negligible memory use and no waiting before the first byte appears on screen.

## Parse formats with Kaitai Struct

Apply a Kaitai Struct definition at runtime to dissect ZIP, ELF, Mach-O, PNG and other formats. Fields appear as a navigable tree with addresses and decoded values, mapped over the raw bytes with inline color highlights.

## See the shape of the data

The 2D visual map renders byte values as a bitmap with grayscale, byte-category and rainbow palettes at several scales, making code segments, compressed regions and encrypted payloads recognizable at a glance.

## Compare and decode

Open two binaries side by side with synchronized scrolling, difference counters and highlighted deltas. The data inspector decodes the current byte or selection into signed and unsigned integers from 8 to 64 bits in both endiannesses, floats, Unix timestamps, bit patterns and characters.

## Read text in any encoding

Strings can be decoded and searched across more than forty encodings, covering Unicode, Japanese, Chinese and Korean character sets, the ISO-8859 family, Windows code pages and legacy sets such as KOI8 and Mac OS Roman. Selections convert into C, Rust or JSON arrays, Base64, hex streams, printable text or formatted hex dumps.

## Work from the keyboard

Movement follows Vim conventions with `h`, `j`, `k`, `l` and Shift to extend a selection, and `/` opens search over hex patterns, text or regular expressions. Lines can be broken at packet or record boundaries instead of a fixed 16-byte grid, then joined again. Files, folders, split views and analysis panels can also be opened directly from the command line.

xvw is early alpha software; keep reliable backups of any file before editing it.

[GitHub repository](https://github.com/funap/xvw)
