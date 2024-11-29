document.getElementById('addSite').addEventListener('click', () => {
  const siteInput = document.getElementById('siteInput').value.trim();
  if (siteInput) {
      chrome.storage.sync.get('blockedSites', (data) => {
          const blockedSites = data.blockedSites || [];
          if (!blockedSites.includes(siteInput)) {
              blockedSites.push(siteInput);
              chrome.storage.sync.set({ blockedSites: blockedSites }, () => {
                  document.getElementById('siteInput').value = '';
                  updateSiteList();

                  // Send a message to background.js to update blocking rules
                  chrome.runtime.sendMessage({ action: "updateBlockingRules" }, (response) => {
                      if (response.status === "success") {
                          console.log("Blocking rules updated successfully.");
                      }
                  });
              });
          }
      });
  }
});

function updateSiteList() {
  chrome.storage.sync.get('blockedSites', (data) => {
      const siteList = document.getElementById('siteList');
      siteList.innerHTML = '';
      (data.blockedSites || []).forEach(site => {
          const li = document.createElement('li');
          li.textContent = site;
          siteList.appendChild(li);
      });
  });
}

updateSiteList();