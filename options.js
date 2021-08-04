let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
    console.log(chrome)
    // Remove styling from the previously selected color
    let current = event.target.parentElement.querySelector(
        `.${selectedClassName}`
    );
    if (current && current !== event.target) {
        current.classList.remove(selectedClassName);
    }

    // Mark the button as selected
    let color = event.target.dataset.color;
    event.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ color });
}
// this function gets recently closed session and displays the date they were closed and \
// an array of tabs that were  closed along with the windows
function GetRecentSessions() {
    chrome.sessions.getRecentlyClosed((recent) => {
        console.log(recent)
        recent.map((sesh) => {
            // maps over all recent sessions and looks for only window sessions
            if (sesh.window) {
                if (sesh.lastModified) {
                    // converts time since epoch stamp to human readable date
                    var myDate = new Date(sesh.lastModified * 1000);
                    let date = document.createElement("li")
                    date.textContent = myDate.toLocaleString();
                    let seshUrls = sesh.window.tabs
                    ul = document.createElement('ul')

                    seshUrls.map((each) => {

                        li = document.createElement('li')

                        a = document.createElement("a")
                        a.innerHTML = each.url
                        a.href = each.url
                        li.appendChild(a)
                        ul.appendChild(li);

                    })
                    date.appendChild(ul)
                    page.appendChild(date)


                    // console.log(...sesh.window.tabs)
                }
            }

        })
    })
}

// Add a button to the page for each supplied color
// function constructOptions(buttonColors) {

//     chrome.storage.sync.get("color", (data) => {
//         let currentColor = data.color;
//         // For each color we were provided…
//         for (let buttonColor of buttonColors) {
//             // …create a button with that color…
//             let button = document.createElement("button");
//             button.dataset.color = buttonColor;
//             button.style.backgroundColor = buttonColor;

//             // …mark the currently selected color…
//             if (buttonColor === currentColor) {
//                 button.classList.add(selectedClassName);
//             }

//             // …and register a listener for when that button is clicked
//             button.addEventListener("click", handleButtonClick);
//             page.appendChild(button);
//         }
//     });
// }

// Initialize the page by constructing the color options
// constructOptions(presetButtonColors);
GetRecentSessions();