function check() {
    let radio = document.querySelectorAll(".rating");
    let value = 0;

    for (i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        value = radio[i].value;
      }
    }

    if (value !== 0) {
      document.querySelector(".ratingstate").style.display = "none";
      document.querySelector(".tystate").style.display = "flex";
      document.querySelector(".tystate .selected p span.value").innerHTML = value;
    }
  }