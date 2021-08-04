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
    // get all sessions, recently closed windows/ tabs
    // chrome.sessions.getRecentlyClosed((recent) => {
    //     console.log(recent)
    //     recent.map((sesh) => {
    //         // maps over all recent sessions and looks for only window sessions
    //         if (sesh.window) {
    //             if (sesh.lastModified) {
    //                 // converts time since epoch stamp to human readable date
    //                 var myDate = new Date(sesh.lastModified * 1000);
    //                 console.log(myDate.toLocaleString());
    //                 console.log(sesh.window.tabs)
    //             }
    //         }

    //     })
    // })
    // get all open tabs from other devices
    // chrome.sessions.getDevices((devices) => {
    //     console.log(devices[0].sessions)
    // })

});
// chrome.windows.onChanged.addListener(() => { console.log(sessions.Session) })
