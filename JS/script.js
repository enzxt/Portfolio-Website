/**
 * Enzo Tinard
 * CST 120
 * Milestone 7
 * 12/11/2023
 * This is my own work + https://stackoverflow.com/questions/27637184/what-is-dom-reflow to get the event handler for title replays to work
 */


// Function to handle the mouseover event on the links under "indexTab"
function indexTabLinkMouseOver(event) {
    // Change the text color on mouseover
    event.target.style.color = "purple";
}

// Function to handle the mouseout event on the links under "indexTab"
function indexTabLinkMouseOut(event) {
    // Reset the text color on mouseout
    event.target.style.color = "";
}

// Function to handle the mouseover event on <h1> tags
function h1MouseOver(event) {
    // Trigger a reflow by cloning and replacing the element
    const clone = event.target.cloneNode(true);
    event.target.parentNode.replaceChild(clone, event.target);

}

// Add event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the Home link element and attach the click event handler
    const homeLink = document.querySelector(".indexHome a");
    if (homeLink) {
        homeLink.addEventListener("click", homeLinkClick);
    }

    // Get all links under #indexTab and attach the mouseover/mouseout event handlers
    const indexTabLinks = document.querySelectorAll("#indexTab a");
    indexTabLinks.forEach(link => {
        link.addEventListener("mouseover", indexTabLinkMouseOver);
        link.addEventListener("mouseout", indexTabLinkMouseOut);
    });

    // Get all <h1> tags and attach the mouseover event handler
    const h1Tags = document.querySelectorAll("h1");
    h1Tags.forEach(h1 => {
        h1.addEventListener("mouseover", h1MouseOver);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the specific navigation links
    var githubLink = document.querySelector("[data-target='github']");
    var linkedinLink = document.querySelector("[data-target='linkedin']");
    var emailLink = document.querySelector("[data-target='email']");

    // Function to scroll to the bottom of the page
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Add click event listeners to the specific links
    githubLink.addEventListener("click", scrollToBottom);
    linkedinLink.addEventListener("click", scrollToBottom);
    emailLink.addEventListener("click", scrollToBottom);
});