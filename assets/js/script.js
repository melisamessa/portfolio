function CopyUrl(){
    let email = document.getElementById('email');
    let copyMail = document.querySelector(".copy-mail");
    navigator.clipboard.writeText(email.textContent);
    copyMail.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        copyMail.classList.remove("active");
    },1500);
}
