document.addEventListener("DOMContentLoaded", function () {
    const binaryInput = document.getElementById("binary");
    const decimalOutput = document.getElementById("decimal-number");
    const copyButton = document.getElementById("copy-button");

    binaryInput.addEventListener("input", () => {
        decimalOutput.innerHTML = parseInt(binaryInput.value, 2) || 0;
    });

    copyButton.addEventListener("click", () => {
        const textToCopy = decimalOutput.innerText;

        // Create a temporary textarea element to hold the text to copy
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = textToCopy;

        // Append the textarea to the DOM
        document.body.appendChild(tempTextarea);

        // Select the text inside the textarea
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);
    });

});