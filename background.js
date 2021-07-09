let color = '#3aa757';
chrome.windows.getAll({ populate: true }, function (windowList) { console.log(windowList[0].tabs[0].url) });
// console.log("windows: " + chrome.tabs.getAll())

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});