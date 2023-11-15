document.addEventListener("DOMContentLoaded", function () {
    const binaryInput = document.getElementById("binary");
    const decimalOutput = document.getElementById("decimal-number");
    const copyButton = document.getElementById("copy-button");

    binaryInput.value = '';

    binaryInput.addEventListener("input", updateDecimalOutput);
    copyButton.addEventListener("click", copyToClipboard);

    function updateDecimalOutput() {
        const binaryInputArray = binaryInput.value.split('');

        if (containsInvalidChars(binaryInputArray)) {
            handleInvalidInput();
            return;
        }

        decimalOutput.innerHTML = binaryInputArray.every(bit => bit === '0') ? 0 : parseInt(binaryInput.value, 2);
    }

    function copyToClipboard() {
        const textToCopy = decimalOutput.innerText;
        copyTextToClipboard(textToCopy);
    }

    function containsInvalidChars(arr) {
        return arr.some(bit => bit !== '0' && bit !== '1');
    }

    function handleInvalidInput() {
        alert("This character is not permitted!");
        binaryInput.value = ''; // Clear the input
        decimalOutput.innerText = '-';
    }

    function copyTextToClipboard(text) {
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = text;
        document.body.appendChild(tempTextarea);

        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);

        document.execCommand("copy");

        document.body.removeChild(tempTextarea);
    }
});
