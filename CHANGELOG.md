# Changelog

## 1.4.0 (unreleased)

### Fixed

- **Images are imported again.** F95Zone now delivers every image as AVIF, even
  behind `.png` and `.jpg` links. On PCs without the Windows AV1/HEIF codecs the
  previews stayed empty and the import lost all images. Images are now converted
  to PNG/JPEG while they download.
- **Tags are imported again.** F95Zone changed how tags appear on thread pages,
  so new games were added without tags.
- **Exclusion keywords now work with features and tags.** Keywords used to match
  game names only. A keyword now also skips games that have a feature or tag with
  exactly that name, so localized labels such as "已通关", or your own tag like
  "No updates", stop update notifications.
- Excluded games and games marked "Completed" no longer keep an old
  "Update Available" flag.
- If something goes wrong with the cover (for example while cropping), the game
  is still saved with the background and screenshots you picked. Previously all
  of its images were lost.
- The exclusion lists also accept the full-width comma "，".
- Threads whose first post has a "Thread Update: <date>" line no longer report
  that date as the latest version, which caused an update notification on every
  check.
- Versions that differ only in spaces, upper/lower case, a leading "v" or
  brackets (for example `[v0.97]` and `0.97`, or `Ch. 6` and `Ch.6`) are no
  longer reported as updates.
- The F95Zone login window no longer crashes Playnite when the login page
  redirects several times after a successful login. Clicking "Login" repeatedly
  no longer opens several login windows.
- Image previews no longer stay blank with some themes or very large images. If
  a preview can't be shown, the tile says so and the image can still be selected.
- Clearer errors when an import fails: invalid links, network or session
  problems and Playnite database errors are reported separately. If Playnite
  cannot save the game, the import stops instead of creating folders and
  downloading images for it.
- Only one import runs at a time (menu, Quick Add and browser links), so imports
  can't interfere with each other.

### Added

- **"Mark as updated"** in the game's right-click menu (under *EzLewd Suite*).
  It reads the current version from the F95 thread, sets it as the game's version
  and removes "Update Available", so you no longer have to edit the version by
  hand after installing an update. Works with several selected games at once.
- Images can be read without the Windows AV1/HEIF codecs. If Windows cannot
  decode an image, the plugin uses the Microsoft Edge WebView2 Runtime instead,
  which the F95 login already requires.
- **Copy Diagnostic Information** in the settings, for bug reports. It never
  contains cookies or tokens.
- Detailed logging in `extensions.log`: every login, import and update check
  gets an operation ID, so a reported problem can be traced from start to end.

### Changed

- The extension is now called **EzLewd Suite** in Playnite (formerly
  EzLewdUpdater), like its forum thread. Your settings and existing
  `playnite://ezlewdupdater/...` links keep working.
- **More reliable version detection.** The latest version is now read from
  F95's new *Versions* bar above the first post, which F95 maintains itself.
  Threads without it fall back to the version in the thread title, and only then
  to the "Version:" line in the post. New imports use the same order.
- Update notifications show a date on a second line: the release date from the
  Versions bar, or the "Thread Updated" date from the first post for threads
  without it. If the post has no changelog, the short summary from the Versions
  bar is written to the game notes instead.
- **Quick Add shows a progress popup** while the images download. Cancelling it
  stops the downloads; the game is still added with the images loaded so far.
- **Redesigned image selector.** It opens immediately and each image appears as
  soon as it has loaded, with a loading bar until then. Cover, Background and
  Screenshot are toggle buttons, every image shows its resolution, and the window
  follows your Playnite theme and can be resized or maximized. Previews are
  loaded as small thumbnails instead of full-size images, which uses much less
  memory.
- The settings now explain how the exclusion lists work.
- `extensions.log` now warns when an F95 page yields no tags, version,
  description, developer or images, or when the update check cannot read a
  version, so changes on F95Zone's side are noticed sooner.

## 1.3.1

### Fixed

- Importing from an F95 link no longer crashes when an existing library game
  has a broken or malformed link.

### Changed

- Only direct `f95zone.to/threads/...` links can be imported.

## 1.3

### Added

- Import from the browser with `playnite://ezlewdupdater/add/<link>` and
  `playnite://ezlewdupdater/quickadd/<link>`.
- Quick Add imports images automatically: the first image becomes the
  background and an auto-cropped cover, the remaining images are saved as
  screenshots.
- Duplicate protection: importing a thread that is already in your library
  selects the existing game instead of adding it again.
- When an imported F95 game is deleted from the library, its screenshot folder
  is removed as well.

### Changed

- Updated to Playnite SDK 6.16.

## 1.2

### Added

- The import now fetches the description, developer and external links
  (Patreon, Itch.io, …).
- Games marked "Completed" on F95 are added with a "Completed" feature and are
  excluded from future update checks.
- The "Update Available" feature is removed automatically once the local version
  matches the online version.

### Changed

- The game version is stored in Playnite's Version field instead of the game
  title.
- More reliable F95Zone login (fixed session detection).
- Better genre detection, e.g. "Ren'Py", "Unity" and "VN".

### Fixed

- "Image not found" errors when cropping covers.
- Cropping thumbnail behavior.
- General bug fixes and improvements.

To use screenshots with ScreenshotsVisualizer, see the description in the
extension settings.

## 1.1

### Fixed

- Saved screenshots were not placed in the correct folder.

## 1.0

- Initial release, merging *Update Checker* and *Link Adder* into one extension.
