function firstTask() {
  let username = document.getElementById("username");
  username.addEventListener("input", function (event) {
    const input = event.target;
    const inputValue = input.value;

    const regex = /^[^\d]*$/;

    if (!regex.test(inputValue)) {
      input.value = inputValue.replace(/\d/g, '');
    }
  });
}

function secondTask() {
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
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'e') {
      event.preventDefault();
      const textContainer = document.getElementById('textContainer');
      const editTextarea = document.getElementById('editTextarea');
      const text = textContainer.textContent;

      textContainer.style.display = 'none';
      editTextarea.value = text;
      editTextarea.style.display = 'block';
      editTextarea.focus();
    }

    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      const textContainer = document.getElementById('textContainer');
      const editTextarea = document.getElementById('editTextarea');
      const editedText = editTextarea.value;

      editTextarea.style.display = 'none';
      textContainer.textContent = editedText;
      textContainer.style.display = 'block';
    }
  });
}




function sortTable(columnIndex) 
{
  const table = document.getElementById("dataTable");
  const rows = Array.from(table.rows).slice(1);
  const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent.trim();
    const bValue = b.cells[columnIndex].textContent.trim();
    let value = true;

    if (value)
    {
      if (isNumeric(aValue) && isNumeric(bValue)) {
        return parseFloat(aValue) - parseFloat(bValue);
      } else {
        return aValue.localeCompare(bValue);
      }
    }
    else {
      if (isNumeric(aValue) && isNumeric(bValue)) {
        return parseFloat(bValue) - parseFloat(aValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    }
  });

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  rows.forEach(row => {
    table.appendChild(row);
  });
}
