// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});
// 
console.log(chrome.sessions)
// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor
    }).then(chrome.windows.getAll({ populate: true }, function (windowList) {
        // gets url of all open tabs in array from window object
        const date = Date()
        console.log(date)
        const allTabs = windowList[0].tabs;
        console.log(allTabs)
        chrome.bookmarks.getTree((tree) => { console.log(tree) })
        chrome.bookmarks.create(
            // creates folder in bookmark bar
            { 'parentId': "1", 'title': 'tab dump: ' + date },
            function (newFolder) {
                console.log("added folder: " + newFolder.id);
                //   maps open tabs creating an individual bookmark for each url inside folder created above
                allTabs.map(url => {
                    chrome.bookmarks.create({
                        'parentId': newFolder.id,
                        'title': url.title,
                        'url': url.url,
                    });
                }
                )
            },
        );
    }));
});



// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;

    });
    // console.log("chrome book: " + chrome.bookmarks)
}
// document.addEventListener('DOMContentLoaded', function () {
//     // console.log("chrome: " + chrome.bookmarks)
//     chrome.windows.getAll({ populate: true }, function (windowList) {
//         // gets url of all open tabs in array from window object
//         const allTabs = windowList;
//         console.log(allTabs)


//     });
// })