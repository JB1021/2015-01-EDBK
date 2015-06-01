chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://kor.tellburgerking.com/";
    chrome.tabs.create({ url: newURL });
});