const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};

refs.input.addEventListener("input", (event) => {
  refs.output.textContent = event.currentTarget.value || "Anonymous"; // чи можливо було 'Anonymous' чимось замінити наприклад повернути початкове текстове значення в html??
});
