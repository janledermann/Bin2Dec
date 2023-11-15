document.addEventListener("DOMContentLoaded", function () {
    const binaryInput = document.getElementById("binary");
    const decimalOutput = document.getElementById("decimal-number");
    const copyButton = document.getElementById("copy-button");

    binaryInput.value = '';
    

    binaryInput.addEventListener("input", updateDecimalOutput);

    copyButton.addEventListener("click", copyToClipboard);

    function updateDecimalOutput() {
        const binaryInputArray = binaryInput.value.split('');

        for (let i = 0; i < binaryInputArray.length; i++) {
            if (binaryInputArray[i] !== '0' && binaryInputArray[i] !== '1') {
                alert("This character is not permitted!");
                binaryInput.value = ''; // Clear the input
                decimalOutput.innerText = '-';
                return; // Exit the function to avoid further processing
            }
        }

        // Check if all characters in the binary input are '0'
        if (binaryInputArray.every(bit => bit === '0')) {
            decimalOutput.innerHTML = 0;
        } else {
            decimalOutput.innerHTML = parseInt(binaryInput.value, 2);
        }
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
