const input = document.querySelector('input')
function getCode() {
    
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&"
    let codeLength = 8;
    let code = "";

    for (var i = 0; i < codeLength; i++) {
        let randomCode = Math.floor(Math.random() * chars.length);
        code += chars.substring(randomCode, randomCode+1);
    }
    
    document.getElementById("code").value = code;
}

function copyCode() {
    navigator.clipboard.writeText(input.value).then(() => {
        alert('Copied')
    })
}