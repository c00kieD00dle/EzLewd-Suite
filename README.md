# EzLewd Suite

A **Playnite** extension for games from **F95Zone**. Add a game to your library
straight from its F95 thread, and get notified when a new version is released.

---

## Features

- **Add games from an F95 link.** Name, version, developer, description, tags,
  engine (Ren'Py, Unity, …) and links are filled in from the thread. Games marked
  *Completed* on F95 get the "Completed" feature.
- **Pick your images.** The image selector opens right away and shows every image
  from the first post as it loads. Choose a cover, a background and any number of
  screenshots, then crop the cover. **Cancel import** stops the import without
  adding the game; to add a game without images, click **Confirm** without
  selecting any.
- **Quick Add.** Adds a game without any questions: the first image becomes the
  background and an automatically cropped cover, the rest become screenshots.
- **Update check.** Compares each game's version with the latest version on F95
  and shows a notification for every update. Updated games get the
  **"Update Available"** feature, so you can filter for them.
- **Mark as updated.** After installing a new version, right-click the game and
  choose *EzLewd Suite → Mark as updated*. The version is set to the one on F95
  and "Update Available" is removed. Works for several selected games at once.
- **Exclusions.** Skip games by name, by keyword, or by giving them a tag.
- **Browser integration** through `playnite://` links (see below).

---

## Requirements

- **Playnite 10** (current release)
- An **F95Zone account**. You log in once from the extension settings.
- **Microsoft Edge WebView2 Runtime** for the login window. It is part of
  Windows 11 and is installed on almost every Windows 10 PC.

---

## Getting started

1. Install the extension and restart Playnite.
2. Open **Add-ons → Extensions settings → Generic → EzLewd Suite**.
3. On the **Update Checking** tab, click **Login to F95Zone** and log in.
4. On the **Game Importer** tab, set the **Library Games Folder** (a folder per
   game is created there) and the **Screenshots / Extra Metadata Directory**.
5. In Playnite's main menu, choose **Add Game from F95 Link** and paste a thread link.

---

## How the update check works

The check runs when Playnite starts (can be turned off) or when you choose
**Check Game Updates** in the main menu.

1. **Which games:** every game with a link named `F95Zone` or `f95`. Games added
   by this extension have it automatically. Skipped are games with the
   "Completed" feature, excluded games (see Settings) and, if enabled, games that
   are not installed.
2. **Your version:** the game's **Version** field. If it is empty, the version in
   the game's name is used, e.g. `My Game [v0.5]`.
3. **The latest version** is read from the F95 thread, in this order:
   - F95's **Versions** bar above the first post (maintained by F95 itself),
   - the version in the **thread title**, e.g. `[v0.6]`,
   - the **Version:** line in the first post.
4. If the two versions differ, you get a notification and the game gets the
   "Update Available" feature. Differences in spaces, upper/lower case, a leading
   `v` or brackets are ignored. A *lower* version number also counts as an
   update, because developers sometimes restart their numbering.

   The notification shows a date on a second line: **Released on …** from F95's
   Versions bar, or, for threads without the bar, **Thread updated on …** from
   the "Thread Updated:" line in the first post. The second one is written by the
   uploader and is occasionally out of date. Threads with neither show the update
   without a date.
5. Every update found is also written to `update_log.txt` in the extension's
   data folder.

---

## Settings

**Update Checking tab**

- **Enable update checking**: turns the whole update check on or off.
- **Check for updates when Playnite starts**
- **Show toast notifications for updates**. Optionally, clicking a notification
  opens the F95 thread instead of selecting the game.
- **Write latest Changelog into Game Notes**: replaces the game's notes with the
  changelog of the new version.
- **Only scan installed games**
- **Version Pattern**: the regular expression that finds the version tag in game
  names and thread titles. Default: `\[[^\]]*\d[^\]]*\]`
- **Exclusions** (comma-separated, case-insensitive):
  - **Keywords** skip a game if its name contains the keyword, or if it has a
    feature or tag with exactly that name. Default: `completed, final`.
    Tip: to exclude single games, give them a tag such as `No updates` and add
    `No updates` here. Localized labels (for example a feature named `已通关`)
    work the same way.
  - **Games** skip every game whose name contains the entry.
- **Advanced → Maximum parallel web requests**
- **F95Zone Session**: log in or out.
- **Copy Diagnostic Information**: see *Reporting a problem*.

**Game Importer tab**

- **Library Games Folder**: where a folder for each imported game is created.
- **Screenshots / Extra Metadata Directory**: screenshots are saved to
  `<this folder>\<game id>`. To see them in the *ScreenshotsVisualizer*
  extension, use the same folder there and add `\{GameId}` to its path.

---

## Browser integration

Two [Tampermonkey](https://www.tampermonkey.net/) scripts add **Add to playnite**
and **Quickadd to playnite** buttons to F95Zone. Click a link to install; Tampermonkey
keeps them up to date.

- [Game threads](https://raw.githubusercontent.com/c00kieD00dle/EzLewd-Suite/main/userscripts/f95-playnite-thread.user.js):
  buttons next to *Watch* on every game thread.
- [Latest Updates page](https://raw.githubusercontent.com/c00kieD00dle/EzLewd-Suite/main/userscripts/f95-playnite-latest-updates.user.js):
  buttons under every game.

If you still have the old "F95zone playnite" script installed, remove it.

The buttons open links like these, which you can also use from your own
scripts or bookmarklets. The F95 link must be URL-encoded.

```
playnite://ezlewdupdater/add/<encoded F95 link>
playnite://ezlewdupdater/quickadd/<encoded F95 link>
```

---

## Images and AVIF

F95Zone delivers its images in the AVIF format. The extension converts them to
PNG/JPEG while downloading. Windows can only read AVIF with the free
"AV1 Video Extension" and "HEIF Image Extensions" from the Microsoft Store; if
they are missing, the extension uses the WebView2 Runtime instead. You only
see a warning about unreadable images if neither is available.

---

## Reporting a problem

Before reporting an importer, login, image, or database problem, open the
extension settings and select **Copy Diagnostic Information**. Include the
copied text and the operation ID shown in it.

For crashes or database errors, also attach Playnite's `extensions.log` and
`playnite.log`. For public F95 threads, include the affected thread URL. Do not
post session cookies, CSRF tokens, authorization headers, or private URLs with
sensitive query parameters. For image problems, mention whether the preview,
cover, background, or screenshot was missing and which Playnite theme and
Windows display scaling were active.

See [CHANGELOG.md](CHANGELOG.md) for what changed in each version.
