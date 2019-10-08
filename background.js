let current = 0;

chrome.browserAction.onClicked.addListener(() => {
    current++;
    // let image = `icon/${current % 2 == 0 ? "on" : "off"}.png`
    // chrome.browserAction.setIcon({
    //     path: image
    // });
    current = current % 2;
});