let color = '#3aa757';
// function tabDumpFunc() {
//     chrome.windows.getAll({ populate: true }, function (windowList) {
//         // gets url of all open tabs in array from window object
//         const allTabs = windowList;
//         chrome.bookmarks.create(
//             // creates folder in bookmark bar
//             { 'parentId': bookmarkBar.id, 'title': 'tab dump' },
//             function (newFolder) {
//                 console.log("added folder: " + newFolder.title);
//                 //   maps open tabs creating an individual bookmark for each url inside folder created above
//                 allTabs.map(url => {
//                     chrome.bookmarks.create({
//                         'parentId': newFolder.title,
//                         'title': url.title,
//                         'url': url.url,
//                     });
//                 }
//                 )
//             },
//         );
//         console.log(windowList[0].tabs)
//     });
// }


chrome.runtime.onInstalled.addListener(() => {

    chrome.storage.sync.set({ color });
    // console.log(chrome.bookmark)

    console.log('Default background color set to %cgreen', `color: ${color}`);
});
