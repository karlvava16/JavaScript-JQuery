function firstTask() 
{
  let username = document.getElementById("username");
  username.addEventListener("oninput", function (event) 
  {
    const input = event.target;
    const inputValue = input.value;
    const regex = /^[^\d]*$/;

    if (!regex.test(inputValue)) {
      input.value = inputValue.replace(/[\d]/g, "");
    }
  });
}

function secondTask() {
  for (let i = 0; i < books.length; i++) {
    books[i].addEventListener("click", function (event) {
      if (!event.ctrlKey && !event.shiftKey) {
        clearSelection();
      }
      if (event.ctrlKey) {
        console.log("ctrl");
        toggleSelection(i);
      } else if (event.shiftKey && previousClickedIndex !== -1) {
        console.log("shift");
        selectRange(previousClickedIndex, i);
      } else {
        console.log("default click");

        clearSelection();
        if (previousClickedIndex !== i) {
          toggleSelection(i);
          previousClickedIndex = i;
        } else {
          previousClickedIndex = null;
        }
      }
    });
  }
}

function clearSelection() {
  for (const index of selectedIndices) {
    books[index].classList.remove("selected");
  }
  selectedIndices.clear();
}

function toggleSelection(index) {
  if (selectedIndices.has(index)) {
    books[index].classList.remove("selected");
    selectedIndices.delete(index);
  } else {
    books[index].classList.add("selected");
    selectedIndices.add(index);
  }
}

function selectRange(start, end) {
  const startIndex = Math.min(start, end);
  const endIndex = Math.max(start, end);
  for (let i = startIndex; i <= endIndex; i++) {
    books[i].classList.add("selected");
    selectedIndices.add(i);
  }
}

function thirdTask() {
  resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", () => {
      isResizing = false;
      document.removeEventListener("mousemove", resize);
    });
  });
}

function resize(e) {
  if (isResizing) {
    resizable.style.width = e.pageX - resizable.offsetLeft + "px";
    resizable.style.height = e.pageY - resizable.offsetTop + "px";
  }
}


function validateInput(event) {
  const input = event.target;
  const inputValue = input.value;
  const regex = /^[^\d]*$/;

  if (!regex.test(inputValue)) {
    input.value = inputValue.replace(/[\d]/g, "");
  }
}