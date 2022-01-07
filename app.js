// if user add a note add it to the local Storage

showNotes()

let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function (e) {
  let addTxt = document.getElementById('addTxt')
  let notes = localStorage.getItem('notes')

  if (notes == null) {
    notesObj = []
  } else {
    notesObj = JSON.parse(notes)
  }
  notesObj.push(addTxt.value)
  localStorage.setItem('notes', JSON.stringify(notesObj))
  addTxt.value = ''
  console.log(notesObj)
  showNotes()
})

function showNotes() {
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    notesObj = []
  } else {
    notesObj = JSON.parse(notes)
  }
  let html = ''
  notesObj.forEach(function (element, index) {
    html += `
     
          <div class="noteCard my-2 mx-2" style="  width: 18rem;  border:1px solid blue ; background-color: rgb(197, 229, 252); border-radius:4px  ">
          
          <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">  ${element}</p>
          <button  onClick="deleteNote(this.id)" id="${index}" class="btn btn-primary">  Delete Note  </button>
          </div>
         </div>
                 `
  })

  let mynote = document.getElementById('notes')

  if (notesObj.length != 0) {
    mynote.innerHTML = html
  } else {
    let html = `<h3>No notes available! You can make a note by clicking on "Add Note"<h3> `
    mynote.innerHTML = html
  }
}

function deleteNote(index) {
  // console.log("i am deleting node "+ index);`
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    notesObj = []
  } else {
    notesObj = JSON.parse(notes)
  }
  notesObj.splice(index, 1)

  let str = JSON.stringify(notesObj) // it changes the array object to string so that it can be store in locacStorage

  localStorage.setItem('notes', str) // setting a key value pair in localStorage : notes is key and str is the string

  showNotes()
}

let search = document.getElementById('searchTxt')

search.addEventListener('input', function () {
  let inputval = search.value.toLowerCase()

  let cardNote = document.getElementsByClassName('noteCard')
  //    console.log("input event fired",inputval);
  Array.from(cardNote).forEach(function (element) {
    let cardTxt = element.getElementsByTagName('p')[0].innerText

    //   console.log(cardTxt);
    if (cardTxt.includes(inputval)) {
      element.style.display = 'block'
    } else {
      element.style.display = 'none'
    }
  })
})
