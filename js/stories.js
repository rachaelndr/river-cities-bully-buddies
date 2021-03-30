const textOverImages = document.getElementsByClassName("story");
// const previousTextOverImage;
for (let i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    let classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
    //   if (previousTextOverImage != null)
    //     previousTextOverImage.classList.remove("show");
    //   previousTextOverImage = this;
      classes.add("show");
    }
  }
}

// function stopPropagation(event){
//   event.stopPropagation();
// }