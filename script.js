document.addEventListener("DOMContentLoaded", function () {
    const binaryInput = document.getElementById("binary");
    const decimalOutput = document.getElementById("decimal-number");
    const copyButton = document.getElementById("copy-button");

    binaryInput.value = '';
    

    binaryInput.addEventListener("input", updateDecimalOutput);

    copyButton.addEventListener("click", copyToClipboard);

    function updateDecimalOutput() {
        for (let i = 0; i < binaryInput.value.length; i++) {
            if (binaryInput.value[i] !== '0' && binaryInput.value[i] !== '1') {
                alert("This character is not permitted!");
                binaryInput.value = ''; // Clear the input
                decimalOutput.innerText = '-';
                return; // Exit the function to avoid further processing
            }
        }

        decimalOutput.innerHTML = parseInt(binaryInput.value, 2) || 0;
    }

    function copyToClipboard() {
        const textToCopy = decimalOutput.innerText;

        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = textToCopy;

        document.body.appendChild(tempTextarea);

        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);

        document.execCommand("copy");

        document.body.removeChild(tempTextarea);
    }

    
});
