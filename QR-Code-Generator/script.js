let main = document.querySelector(".main");
let qrInp = document.querySelector(".form input");
let btn = document.querySelector(".form button");
let qrImg = document.querySelector(".qr-code img");


btn.addEventListener("click", ()=> {
    let qrValue = qrInp.value;
    if(!qrValue) return alert("Enter any text Or Url");
    btn.textContent = "Generating QR Code...";
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener("load", ()=> {
        main.classList.add("active");  
        btn.textContent = "Generate QR Code";
    })
    
})

