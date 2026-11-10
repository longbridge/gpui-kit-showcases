# Rind

Rind uninstalls Mac apps together with the files they leave behind, and explains why each file belongs to the app and how sure it is. Everything goes to the Trash, never deleted outright, and History puts it back in one click.

## Uninstall

Pick an app and review its leftovers. Every item carries a reason, such as bundle ID, embedded components, App Groups, signing team, Homebrew cask or package receipts, and a confidence level: certain, likely or possible.

## Orphans and cleanup

Find files left behind by apps you already deleted. Clean caches, logs, browser caches, Xcode data, package-manager caches and project build artifacts; anything expensive to rebuild is listed but never pre-checked.

## Space and launch items

See what fills the disk, with real usage after de-duplicating APFS clones and hard links. Review, disable and remove LaunchAgents and LaunchDaemons.

## Safety

Protected areas such as iCloud Drive, Keychains, SSH and GPG keys, Mail, Photos and system paths can never be selected. The command-line tool and the app share the same judgement, and every action that moves files supports a dry run.
