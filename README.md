# EzLewd Suite

A Playnite extension that adds adult games from F95 threads in seconds and keeps them updated forever—auto-fetches covers, descriptions, developers, tags, screenshots, and notifies you when a new version drops.

## What it does

- **Smart Import:** Feed it an F95 thread URL. It creates a complete game entry with:
  - Clean Game Name (no version numbers in title)
  - Cover & Background
  - Full Description, Developer, and External Links (Patreon, Discord, etc.)
  - Correct Genres (Ren'Py, VN, Unity, etc.)
  - Screenshots (downloaded to your ExtraMetadata folder)
- **Auto-Updates:** It remembers the F95 link and checks the page forever.
- **Smart Status:** Detects if a game is marked "Completed" on F95 and tags it accordingly, automatically stopping update checks for that game.

## First-start checklist (do once)

Open Playnite → Add-ons → EzLewd Suite → Settings  
1. **Login:** Click "Login to F95Zone" (a window will pop up to capture your session).  
2. **Library Folder:** Pick where you want new games to be installed (e.g., `C:\Games\F95`).  
3. **Screenshots Folder:** Pick your Screenshots directory (e.g. `...\Playnite\Screenshots`).  

The extension is now ready.

4. **If ScreenshotsVisualizer is installed:** Set its directory to the same directory as EzLewd and add `\{GameId}` (e.g. `...\Playnite\Screenshots\{GameID}`)

## Add a new game

1. Copy any F95 thread URL.  
2. Playnite main menu → “Add Game from F95 Link” → paste → OK.  
3. Pick images (cover / background / screenshots) in the pop-up; crop the cover if you want.  
4. Done — the game entry is created, folders are ready, images are set.  

Afterwards (once per game):  
- Drop the downloaded game into the folder that was created for you.  
- Edit the game → Installation → mark as installed → point the action to the .exe (or index.html for browser titles).

## Update checking (zero effort after setup)
  
- The plugin compares the local **Version Field** with the one in the F95 thread.  
  If they differ → toast notification.  
- Click the toast to open the thread or jump straight to the game in your library (toggle in settings).
- Games marked as **"Completed"** (via Feature tag) are skipped automatically.
- You can deactivate the Update checking or exclude games from it in the settings.

## Good-practice reminders

- After you install a new version change the version of the game.  
- Use the “Hidden” platform filter to hide all F95 games from your main grid.  
- The updater never guesses URLs - it only touches games that already have an f95 link, so your library stays clean.

## Requirements

- Playnite 10.37+  
- .NET Framework 4.6.2 (already included)  

**Recommendations:** 
- ScreenshotsVisualizer
- Helium or any other Theme to nicely display the screenshots on the gamepage

## Found a bug?

Open an issue and attach:  
- The exact game name + F95 URL (if public)  
- extensions.log (found in %AppData%\Playnite)  
- Your current settings (screenshot or exported yaml)

## Licence

MIT - do whatever you want, just do not blame me if your folder reaches 2 TB overnight.
