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
let remove = document.querySelectorAll('.remove')


plus.forEach((item) => {
    item.addEventListener('click', add)
})

minus.forEach((item) => {
    item.addEventListener('click', subtract)
})

remove.forEach((item) => {
    item.addEventListener('click', removeitem)
})


/* ADD */

function add(item) {
   let amount = this.nextElementSibling;
   amount.innerText = parseInt(amount.innerText) +1;

   let price = this.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerText;
   
   payment.innerHTML = '$' + (parseFloat(payment.innerHTML.slice(1)) + parseFloat(price.slice(1))).toFixed(2)
}

/* SUBTRACT */
function subtract(item) {
    let amount = this.previousElementSibling;

    if (parseInt(amount.innerText) > 1){
    amount.innerText = parseInt(amount.innerText) -1;
    let price = this.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerText;

    payment.innerHTML = '$' + ((parseFloat(payment.innerHTML.slice(1))) - (parseFloat(price.slice(1)))).toFixed(2)
}
}

/* REMOVE */

function removeitem(rem) {
    let removePrice = parseFloat(this.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild.innerHTML.slice(1));
    let removeAmount = parseInt(this.previousElementSibling.firstElementChild.nextElementSibling.innerHTML);

    payment.innerHTML = '$' + (parseFloat(payment.innerHTML.slice(1)) - (removePrice * removeAmount)).toFixed(2)

    this.parentElement.parentElement.style.display = 'none';

    if ((parseFloat(amount.innerHTML).slice(1)) <= 19 ) {
    this.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
    }
}

