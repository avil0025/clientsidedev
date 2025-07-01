let fm = document.getElementById("my-form");
let fn = document.getElementById("fname");
let em = document.getElementById("email");
let msg = document.getElementById("msg");
let btn = document.getElementById("submit-btn");
let err = document.getElementById("err");

function handleForm() {
  console.log(fn.value);
  let ui = {};
  let errors = [];

  if (fn.value.length > 0) {
    ui = {
      name: fn,
    };
  } else {
    errors.push("The name is required!");
  }

  if (em.value.length > 0) {
    ui = {
      email: em,
    };
  } else {
    errors.push("The email is required!");
  }

  if (msg.value.length > 0) {
    ui = {
      message: msg,
    };
  } else {
    errors.push("The msg is required!");
  }
  console.log(errors.join(", "));
  if (errors.length > 0) {
    err.style.color = "red";
    err.innerText = errors.join(", ");
  } else {
    err.innerText = "Thanks for submiting!";
    err.style.color = "green";
    fn.value = "";
    em.value = "";
    msg.value = "";
  }
}

// define event target object
btn.addEventListener("click", handleForm);
