const addBtn = document.querySelector("#add-btn");
const addInput = document.querySelector("#add-input");
const list = document.querySelector("#to-do-list");
const emptyMsg = document.querySelector("#empty-msg");
const search = document.querySelector("#search");
const deleteBtn = document.querySelector("#delete-btn");

addBtn.addEventListener("click", e => {
    e.preventDefault();
    if (!addInput.value) return;
    if (emptyMsg) {
        emptyMsg.style.display = "none";
    }
    list.appendChild(createItem(addInput.value));
    addInput.value = "";

})

function createItem(value) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let btn = document.createElement("button");
    label.className = "container";
    label.innerText = value;
    input.type = "checkbox";
    span.className = "checkmark";
    btn.id = "delete-btn";
    btn.innerText = "delete";
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(btn);
    return label;
}

search.addEventListener("input", e => {
    if (list.children.length == 0) return;
    Array.from(list.children).forEach(element => {
        if (element.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})

list.addEventListener("click", e => {
    if (e.target.nodeName == "BUTTON" && e.target.id == "delete-btn") {
        e.target.parentNode.remove();
        if (list.children.length == 0) {
            emptyMsg.style.display = "block";
        }
    }
})