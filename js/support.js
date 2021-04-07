const toggleSect = document.getElementsByClassName('toggleSect');
const sect = document.getElementsByClassName('sect');

for(let i = 0; i < toggleSect.length && i < sect.length; i++) {

    toggleSect[i].addEventListener(`click`, () => {
        if (sect[i].style.display == ``) {
            sect[i].style.display = `block`;
        } else if (sect[i].style.display == `none`){
            sect[i].style.display = `block`;
        } else {
            sect[i].style.display = `none`;
        }
    })
};