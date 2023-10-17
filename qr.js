let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");

function generateqr() {
    let text = qrtext.value; 
    if (text.length > 0) {
        let qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
        qrimg.src = qrCodeUrl;
        imgbox.classList.add("show-img");
    } else {
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
    }
}
