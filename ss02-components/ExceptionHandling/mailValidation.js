// Email validation
// valid email: abc@gmail.com abc@yahoo.com
// invalid email: abc

  function getMail() {
    const emailInput = document.querySelector(".input").value;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regexEmail.test(emailInput.trim())) {
        console.log(`Welcome ${emailInput}`);
        document.querySelector("#message").style.color = "green";
        document.querySelector("#message").innerHTML = `Welcome ${emailInput}`;
      } else {
        throw `${emailInput} is invalid.`;
      }
      if (!emailInput) {
        throw "Please fill in the Email field!";
      }
  }

  function key(e) {
    if (e.keyCode === 13) {
      // Enter key on keyboard.
      try {
        getMail();
      } catch (error) {
        console.error(error);
        document.querySelector("#message").style.color = "red";
        document.querySelector("#message").innerHTML = error;
      }
    }
  }
  document.addEventListener("keyup", key);
