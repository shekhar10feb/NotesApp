let btnAdd = document.querySelector('#btn_add');
let inputTitle = document.querySelector('.inputTitle').value;
let inputTextArea = document.querySelector('.inputTextArea');

btnAdd.addEventListener('click', addNote);

function addNote(e) {
  let currentBtn = e.currentTarget;
  let currentInputTitle = currentBtn.parentNode.firstElementChild;
  let currentInputTextArea = currentBtn.previousElementSibling;
  let currentTitleName = currentInputTitle.value;
  let currentTextArea = currentInputTextArea.value;  
  let newDiv = document.createElement('div');
  newDiv.className = "d-inline-flex justify-content-center align-items-start flex-column px-2 py-1 m-1 border rounded-1 newDiv";
  
  newDiv.innerHTML = `
                      <h3 class="border-bottom mb-2" id="inputTitle">${currentTitleName}</h3>
                      <p class="inputText mb-2">${currentTextArea}</p>
                      <div class="container-fluid d-flex justify-content-end align-items-center">
                        <button type="button" class="btnEdit btns1" id="btn_edit" onclick="editThisNote(this)">Edit</button>
                        <button type="button" class="btnRemove btns1" id="btn_remove" onclick="removeThisNote(this)">Remove</button>
                      </div>
                     `;
  
  
  let notesDiv = document.querySelector('#notesContainer');
  notesDiv.appendChild(newDiv);

  currentInputTitle.value = " ";
  currentInputTextArea.value = " ";
}

function removeThisNote(currentElement){
  currentElement.parentElement.parentElement.remove();
}

function editThisNote(currentElement){
  if(currentElement.textContent == "Done") {
    currentElement.textContent = "Edit";
    
    // Title 
    let currentInputTitle = currentElement.parentElement.parentElement.firstElementChild.value;
    let currentHeading = document.createElement('h3');
  
    currentHeading.textContent = currentInputTitle;
    
    currentElement.parentElement.parentElement.replaceChild(currentHeading, currentElement.parentElement.parentElement.firstElementChild);
    
    // Text-Area
    let currentInputTextArea = currentElement.parentElement.previousElementSibling.value;
    
    let currentTextArea = document.createElement('p');
    currentTextArea.textContent = currentInputTextArea;
    
    currentElement.parentElement.parentElement.replaceChild(currentTextArea, currentElement.parentElement.previousElementSibling);
  }
  
  else {
    currentElement.textContent = "Done";
    
    // Title
    let currentInputTitle = currentElement.parentElement.parentElement.firstElementChild.textContent;
  
    let currentInput = document.createElement('input');
    currentInput.type = 'text';
    currentInput.placeholder = 'Title';
    currentInput.className = 'form-control';
    currentInput.value = currentInputTitle;
  
    currentElement.parentElement.parentElement.replaceChild(currentInput, currentElement.parentElement.parentElement.firstElementChild);
    
    // Text-Area 
    let currentInputTextArea = currentElement.parentElement.previousElementSibling.textContent;
    
    let currentInput1 = document.createElement('textarea');
    currentInput1.type = 'text';
    currentInput1.placeholder = 'Write your notes here...';
    currentInput1.className = 'form-control';
    currentInput1.value = currentInputTextArea;
    
    currentElement.parentElement.parentElement.replaceChild(currentInput1, currentElement.parentElement.previousElementSibling);
  }
}