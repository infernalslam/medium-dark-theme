let state = false

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, { file: "dark.css" })
    state = !state
    return
  }
})
