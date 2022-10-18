const addItemBtn = document.querySelector("#addItem");

function callBackFunction(evt) {
  evt.preventDefault();
  const itemElement = document.querySelector("#title");
  const itemvalue = itemElement.value;
  // console.log(itemvalue);
  if (itemvalue == "") {
    alert("Enter the value");
  } else {
    const container = document.querySelector("#data-container");
    const h5 = document.createElement("h5");
    h5.classList.add("inner-card");
    h5.innerText = itemvalue;
    container.appendChild(h5);
    itemElement.value = "";
  }
}

addItemBtn.addEventListener("click", callBackFunction);
