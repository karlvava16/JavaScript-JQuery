function firstTask() 
{
  let username = document.getElementById("username");
  username.addEventListener("input", function(event) {
    const input = event.target;
    const inputValue = input.value;

    const regex = /^[^\d]*$/;

    if (!regex.test(inputValue)) 
    {
      input.value = inputValue.replace(/\d/g, '');
    }
  });
}

function secondTask()
 {
  document.querySelectorAll('.info-block').forEach(block => {
    block.addEventListener('click', function () {
      const content = this.querySelector('.info-content');

      document.querySelectorAll('.info-content').forEach(item => {
        if (item !== content) {
          item.style.display = 'none';
        }
      });

      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });
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