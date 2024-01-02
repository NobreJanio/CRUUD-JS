let items = [];

function addItem() {
  const itemName = document.getElementById('itemName').value;

  if (itemName) {
    items.push(itemName);
    displayItems();
    document.getElementById('itemName').value = '';
  }
}

function editItem(index) {
  const newName = prompt('Digite o novo nome para o item:');
  
  if (newName !== null && newName !== '') {
    items[index] = newName;
    displayItems();
  }
}

function deleteItem(index) {
  const confirmDelete = confirm('Tem certeza de que deseja excluir este item?');

  if (confirmDelete) {
    items.splice(index, 1);
    displayItems();
  }
}

function displayItems() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  if (items.length === 0) {
    outputDiv.innerHTML = '<p>Nenhum item adicionado ainda.</p>';
  } else {
    const itemList = document.createElement('ul');

    items.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
        editItem(index);
      };

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        deleteItem(index);
      };

      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);

      itemList.appendChild(listItem);
    });

    outputDiv.appendChild(itemList);
  }
}

