// Function to check for the button and click it
function clickButton() {
    // XPath to the button container
    const xpath = "//div[contains(@class, 'flex items-center justify-center') and contains(., 'Continue generating')]";

    // Evaluate the XPath
    const buttonContainer = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    // Check if the buttonContainer exists and contains the specific SVG
    if (buttonContainer) {
        const svg = buttonContainer.querySelector("svg.icon-xs.-rotate-180");
        if (svg) {
            buttonContainer.click();
        }
    }
}

// Function to observe changes in the DOM
function observeDOM() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            clickButton();
        });
    });

    // Start observing the entire document
    observer.observe(document.body, {childList: true, subtree: true});
}

// Start observing the DOM
observeDOM();
