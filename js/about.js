const toggleList = document.getElementById(`toggleList`);
const list = document.querySelector(`.list`);

toggleList.addEventListener(`click`, () => {
    if (list.style.display == `none`) {
        list.style.display = `block`;
    } else {
        list.style.display = `none`;
    }
});