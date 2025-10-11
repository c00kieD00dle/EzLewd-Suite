# EzLewd Suite

A Playnite extension that adds adult games from F95 threads in seconds and keeps them updated forever—auto-fetch covers, tags, screenshots and notify when a new version drops.

## What it does

- Feed it an F95 thread URL - it creates a complete game entry (cover, tags, folders, screenshots).  
- It remembers that link and checks the page forever, pinging you the moment a new version drops.  
- Use only the updater, only the adder, or both.

## First-start checklist (do once)

Open Playnite → Add-ons → EzLewd Suite → Settings  
- Log in to F95 (WebView window will pop up).  
- Pick your Library Games folder (where new games will be installed).  
- Pick your Extra Metadata directory for the screenshots(usually `\AppData\Local\Playnite\ExtraMetadata`) so screenshots work.  
- Adjust the version regex or excluded keywords if you need to.    

The extension is now ready.

## Add a new game (30 s)

1. Copy any F95 thread URL.  
2. Playnite main menu → “Add Game from F95 Link” → paste → OK.  
3. Pick images (cover / background / screenshots) in the pop-up; crop the cover if you want.  
4. Done — the game entry is created, folders are ready, images are set.  

Afterwards (once per game):  
- Drop the downloaded game into the folder that was created for you.  
- Edit the game → Installation → mark as installed → point the action to the .exe (or index.html for browser titles).

## Update checking (zero effort after setup)

- Make sure the game name contains the version, e.g.  
  `My Game [v1.2.0]`  
  (default regex extracts everything between [ and ] that contains a digit).  
- The plugin compares the local version with the one in the F95 thread title.  
  If they differ → toast notification.  
- Click the toast to open the thread or jump straight to the game in your library (toggle in settings).

## Good-practice reminders

- Keep the version string inside the game name - the plugin only looks there.  
- After you install a new version rename the game to match, e.g. [v1.3].  
- Use the “Hidden” platform filter to hide all F95 games from your main grid.  
- The updater never guesses URLs - it only touches games that already have an f95 link, so your library stays clean.

## Requirements

- Playnite 10.37+  
- .NET Framework 4.6.2 (already included)  
- ScreenshotsVisualizer (optional) – the adder creates the exact folder structure (`ExtraMetadata/<game-id>/Screenshots`) that the visualizer expects.

## Found a bug?

Open an issue and attach:  
- The exact game name + F95 URL (if public)  
- extensions.log (found in %AppData%\Playnite)  
- Your current settings (screenshot or exported yaml)

## Licence

MIT - do whatever you want, just do not blame me if your folder reaches 2 TB overnight.
