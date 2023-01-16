const form = document.querySelector(".login-form");

const input = document.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    alert("Please fill out all the fields");
  } else {
    console.log({ email: mail, password: password });
    form.reset();
  }
}
