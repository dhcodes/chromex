chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Extension button clicked');
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined) {

  console.log('Extension is running')

  chrome.tabs.executeScript(null, {file: "content_script.js"});
}
});
});
