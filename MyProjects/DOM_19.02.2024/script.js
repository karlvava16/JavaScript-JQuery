function performAction() {
  const action = document.querySelector('input[name="action"]:checked').value;
  
  const textAdd = document.getElementById('textAdd').value.trim();
  const textInsert = document.getElementById('textInsert').value.trim();
  const textEdit = document.getElementById('textEdit').value.trim();
  const textAddNested = document.getElementById('textAddNested').value.trim();
  const deleteRadio = document.getElementById('deleteRadio').value.trim();

  const mainList = document.getElementById('mainList');
  const selectedListItem = document.querySelector('ul li.selected');

  if (action === 'add') {
    const newItem = document.createElement('li');
    newItem.textContent = textAdd;
    mainList.appendChild(newItem);
  } else if (action === 'insert' && selectedListItem) {
    const newItem = document.createElement('li');
    newItem.textContent = textInsert;
    selectedListItem.parentNode.insertBefore(newItem, selectedListItem);
  } else if (action === 'edit' && selectedListItem) {
    selectedListItem.textContent = textEdit;
  } else if (action === 'addNested' && selectedListItem && !selectedListItem.querySelector('ul')) {
    const nestedList = document.createElement('ul');
    const nestedItem = document.createElement('li');
    nestedItem.textContent = textAddNested;
    nestedList.appendChild(nestedItem);
    selectedListItem.appendChild(nestedList);
  } else if (action === 'delete' && selectedListItem) {
    selectedListItem.parentNode.removeChild(selectedListItem);
  }
}

document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'LI') {
    const selected = document.querySelector('ul li.selected');
    if (selected) selected.classList.remove('selected');
    else if(selected != target)
    target.classList.add('selected');
    else
    {
    target.classList.remove('selected');
    } 
  }
});