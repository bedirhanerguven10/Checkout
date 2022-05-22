function mailValidator(){
    const mail = document.getElementById("email").value;
    const pattern1 = /[.][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]$/;
    const pattern2 = /[.][a-zA-Z0-9][a-zA-Z0-9]$/;
    if ((pattern1.test(mail) || pattern2.test(mail)) && (mail.indexOf('@', 1) != -1) && (mail.indexOf('@') == mail.lastIndexOf('@')) && (mail.indexOf('.') > mail.indexOf('@')+1) && (!mail.includes(' '))) {
        alert("Your e-mail address is valid!");
    } else {
        alert("Your e-mail address is not valid!");
    }
}