// ==UserScript==
// @name         F95zone playnite - latest updates
// @namespace    https://github.com/c00kieD00dle/EzLewd-Suite
// @version      2026.10.31
// @description  Adds "Add to playnite" and "Quickadd to playnite" links under every game on F95zone's Latest Updates page (needs the EzLewd Suite Playnite extension)
// @author       Bruel (original), updated by c00kieD00dle
// @homepageURL  https://github.com/c00kieD00dle/EzLewd-Suite
// @supportURL   https://github.com/c00kieD00dle/EzLewd-Suite/issues
// @downloadURL  https://raw.githubusercontent.com/c00kieD00dle/EzLewd-Suite/main/userscripts/f95-playnite-latest-updates.user.js
// @updateURL    https://raw.githubusercontent.com/c00kieD00dle/EzLewd-Suite/main/userscripts/f95-playnite-latest-updates.user.js
// @match        https://f95zone.to/sam/latest_alpha/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    const ext = 'ezlewdupdater';
    const playniteFunctions = [['Add to playnite', 'add'], ['Quickadd to playnite', 'quickadd']];

    GM_addStyle(`
        .list-selected .playnite-card {
          margin-bottom: 8px;
        }
        .playnite-card {
          background-color: #242629;
        }

        .playnite-link-wrapper {
          display: flex;
          flex-direction: column;
        }

        .playnite-link {
          flex-grow: 1;
          text-align: center;
          padding: 8px;
          border: 2px solid #9c3a3a;
          margin: 5px;
          border-radius: 3px;
        }

        .playnite-link:hover {
          text-decoration: none;
          background-color: rgb(48, 51, 55);
        }
    `);

    const started = Date.now();
    let warned = false;

    const perform = () => {
        const threadCards = [...document.querySelectorAll('#latest-page_main-wrap [data-thread-id]')];
        if(!threadCards.length) {
            if(!warned && Date.now() - started > 10000) {
                warned = true;
                console.warn('No game cards found (#latest-page_main-wrap [data-thread-id]). F95 may have changed the Latest Updates page.');
            }
            return;
        }

        for(const threadCard of threadCards) {
            if(threadCard.parentElement.classList.contains('playnite-card'))
                continue;
            // Prefer the card's real thread link; the thread number alone works as a fallback
            const threadId = threadCard.dataset.threadId;
            const threadLink = threadCard.querySelector('a[href*="/threads/"]')?.href
                || (threadId ? `https://f95zone.to/threads/${threadId}/` : null);
            if(!threadLink)
                continue;

            const wrapper = document.createElement('div');
            wrapper.classList.add('playnite-card');
            const linkWrapper = document.createElement('div');
            linkWrapper.classList.add('playnite-link-wrapper');
            threadCard.parentNode.insertBefore(wrapper, threadCard);
            wrapper.appendChild(threadCard);
            wrapper.appendChild(linkWrapper);

            playniteFunctions.forEach(([label, command]) => {
                const link = document.createElement('a');
                link.classList.add('playnite-link');
                link.href = `playnite://${ext}/${command}/${encodeURIComponent(threadLink)}`;
                link.textContent = label;
                linkWrapper.appendChild(link);
            });
        }
    };

    // The page loads new cards while scrolling and filtering, so keep looking for them
    setInterval(perform, 250);
})();
