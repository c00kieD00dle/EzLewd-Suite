// ==UserScript==
// @name         F95zone playnite - thread page
// @namespace    https://github.com/c00kieD00dle/EzLewd-Suite
// @version      2026.10.31
// @description  Adds "Add to playnite" and "Quickadd to playnite" buttons to F95zone game threads (needs the EzLewd Suite Playnite extension)
// @author       Bruel (original), updated by c00kieD00dle
// @homepageURL  https://github.com/c00kieD00dle/EzLewd-Suite
// @supportURL   https://github.com/c00kieD00dle/EzLewd-Suite/issues
// @downloadURL  https://raw.githubusercontent.com/c00kieD00dle/EzLewd-Suite/main/userscripts/f95-playnite-thread.user.js
// @updateURL    https://raw.githubusercontent.com/c00kieD00dle/EzLewd-Suite/main/userscripts/f95-playnite-thread.user.js
// @match        https://f95zone.to/threads/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    const ext = 'ezlewdupdater';
    const playniteFunctions = [['Add to playnite', 'add'], ['Quickadd to playnite', 'quickadd']];

    const perform = (attempt = 0) => {
        // F95 removed the "block" class from the breadcrumb (<div class="breadcrumb">),
        // so look for the breadcrumb list itself.
        const breadcrumbs = document.querySelector('.p-breadcrumbs');
        const buttonGroup = document.querySelector('.block-outer .buttonGroup');
        if(!breadcrumbs || !buttonGroup) {
            if(attempt < 50)
                return setTimeout(() => perform(attempt + 1), 100);
            return console.error('Breadcrumb or button group not found. Can\'t add playnite links.');
        }
        if(!breadcrumbs.textContent.includes('Games'))
            return;
        if(buttonGroup.querySelector('.playnite-thread-link'))
            return;

        // The canonical URL is always the plain thread link; the address bar can be
        // ".../post-123", which the plugin does not accept.
        const threadUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
        const encodedUri = encodeURIComponent(threadUrl);
        playniteFunctions.forEach(([label, command]) => {
            // Fresh buttons in F95's own style: the first button in the group is now "Ignore thread",
            // and a clone of it kept its tooltip and "tic-button" class.
            const link = document.createElement('a');
            link.className = 'button button--link playnite-thread-link';
            link.href = `playnite://${ext}/${command}/${encodedUri}`;
            link.textContent = label;
            buttonGroup.appendChild(link);
        });
    };

    setTimeout(perform, 100);
})();
