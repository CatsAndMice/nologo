// background.js
chrome.action.onClicked.addListener((tab) => {
    // 或者打开扩展内的页面
    chrome.tabs.create({
        url: chrome.runtime.getURL("index.html")
    });
});