let blockedSites = [];
let ruleIdCounter = 1; // Initialize a counter for rule IDs

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ blockedSites: [] });
});

chrome.storage.onChanged.addListener((changes) => {
    if (changes.blockedSites) {
        blockedSites = changes.blockedSites.newValue;
        updateBlockingRules();
    }
});

function updateBlockingRules() {
    const rules = blockedSites.map(site => ({
        id: ruleIdCounter++, // Use the counter for unique IDs
        priority: 1,
        action: { type: 'block' },
        condition: {
            urlFilter: `*://*.${site}/*`, // Block all subdomains
            resourceTypes: ['main_frame']
        }
    }));

  // update dynamic rules chrome.declarativeNetRequest.updateDynamicRules({
        addRules: rules,
        removeRuleIds: blockedSites.map((_, index) => index + 1) // Remove rules by their integer IDs
    });
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateBlockingRules") {
        updateBlockingRules();
        sendResponse({ status: "success" });
    }
});