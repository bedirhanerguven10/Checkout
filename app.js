// function mailValidator(){
//     const mail = document.getElementById("email").value;
//     const pattern1 = /[.][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]$/;
//     const pattern2 = /[.][a-zA-Z0-9][a-zA-Z0-9]$/;
//     if ((pattern1.test(mail) || pattern2.test(mail)) && (mail.indexOf('@', 1) != -1) && (mail.indexOf('@') == mail.lastIndexOf('@')) && (mail.indexOf('.') > mail.indexOf('@')+1) && (!mail.includes(' '))) {
//         alert("Your e-mail address is valid!");
//     } else {
//         alert("Your e-mail address is not valid!");
//     }
// }

let plus = document.querySelectorAll('.fa-plus');
let minus = document.querySelectorAll('.fa-minus');
let payment = document.querySelector('.payment');


plus.forEach((item) => {
 item.addEventListener('click', add)
})

minus.forEach((item) => {
    item.addEventListener('click', subtract)
})


/* ADD */

function add(item) {
   let amount = this.nextElementSibling;
   amount.innerText = parseInt(amount.innerText) +1;

   let price = this.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerText;
   
   payment.innerHTML = '$' + (parseFloat(price.slice(1))).toFixed(2) + (parseFloat(payment.innerHtml.slice(1)))
}


function subtract(item) {
    let amount = this.previousElementSibling;
    if (amount.innerText > 1){
    amount.innerText = parseInt(amount.innerText) -1;
}
}