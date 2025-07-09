const groceries = [];
const list = document.getElementById("groceries");
const input = document.getElementById("user-input");
const error = document.getElementById("error");
const submit = document.getElementById("add");

const addItem = () => {
  const value = input.value;
  if (value.length !== 0) {
    groceries.push(value);

    const li = document.createElement("li");
    li.innerText = value;
    list.appendChild(li);

    input.value = "";
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
};

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

submit.addEventListener("click", addItem);
