const textOverImages = document.getElementsByClassName("story");

for (let i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    let classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      classes.add("show");
    }
  }
}