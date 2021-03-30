//This doesn't want to work... It'll either show the first error message and only that one
// or it'll just show the form submitted alert, even if nothing is filled out.

const userName = document.querySelector(`#name`);
const userPhone = document.querySelector(`#phone`);
const userEmail = document.querySelector(`#email`);
const userReason = document.querySelector(`#reason`);

const form = document.querySelector(`.bone`);


form.addEventListener("click", () => {
    if (userName === null || userName === " ") {
        alert(`Please provide your full name.`);
        userName.focus();
        userName.style.backgroundColor = red;
        return false;
    } else if (userPhone == null || userPhone == " ") {
        alert(`Please provide your phone number.`);
        userPhone.focus();
        userPhone.style.color = red;
        return false;
    } else if (userEmail == " ") {
        alert(`Please provide your e-mail address.`);
        userEmail.focus();
        userEmail.style.color = red;
        return false;
    } else {
        alert(`Form submitted!`)
    }
});
