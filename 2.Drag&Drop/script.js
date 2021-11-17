const item = document.querySelector(".item"),
  placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragOver);
  placeholder.addEventListener("dragenter", dragEnter);
  placeholder.addEventListener("dragleave", dragLeave);
  placeholder.addEventListener("drop", dragDrop);
});

function dragStart(e) {
  e.target.classList.add("hold");

  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

function dragEnd(e) {
  //   e.target.className = "item";
  e.target.classList.remove("hold", "hide");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.target.classList.add("hovered");
}

function dragLeave(e) {
  e.target.classList.remove("hovered");
}

function dragDrop(e) {
  e.target.classList.remove("hovered");
  e.target.append(item);
}
