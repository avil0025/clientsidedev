// Acces all UI elements and othere active HTML tags

// make your button event target object. When the button is clicked
// your event handler will create the ne list item if user entered something in the field; If not, create the error message

const groceries = [];
const list = document.getElementById("groceries");
const input = document.getElementById("user-input");
const submit = document.getElementById("add");

const addItem = () => {
  const value = input.value;
  if (value.length !== 0) {
    groceries.push(value);

    const li = document.createElement("li");
    li.innerText = value;
    list.appendChild(li);

    input.value = "";
  }
};

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

submit.addEventListener("click", addItem);
