document.addEventListener("DOMContentLoaded", () => {
    const binaryInput = document.getElementById("binary");
    const decimalOutput = document.getElementById("decimal-number");
    const copyButton = document.getElementById("copy-button");

    binaryInput.value = '';

    binaryInput.addEventListener("input", updateDecimalOutput);
    copyButton.addEventListener("click", copyToClipboard);

    const containsInvalidChars = arr => arr.some(bit => bit !== '0' && bit !== '1');

    function handleInvalidInput() {
        alert("This character is not permitted!");
        binaryInput.value = '';
        decimalOutput.innerText = '-';
    }

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

        if (decimalOutput.innerHTML !== '-') {
            const tempTextarea = document.createElement("textarea");
            tempTextarea.value = textToCopy;
            document.body.appendChild(tempTextarea);

            tempTextarea.select();
            tempTextarea.setSelectionRange(0, 99999);

            document.execCommand("copy");

            document.body.removeChild(tempTextarea);
        } else {
            alert("Can't copy if there isn't anything to copy.");
        }
    }
});
