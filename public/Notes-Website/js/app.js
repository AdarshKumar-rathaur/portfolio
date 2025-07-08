// console.log("Welcome to app js");
showNotes();
document.querySelector('form').addEventListener('submit', e => e.preventDefault());

// If user add notes, add it to local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    // Getting and adding text in localstorage
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notesObj = getLocalStorage('notes');
    let titleObj = getLocalStorage('title');
    notesObj.push(addTxt.value);
    titleObj.push(addTitle.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(titleObj));

    addTxt.value = "";
    addTitle.value = "";

    // Updating last updated time
    let time = document.getElementById('time');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    time.innerText = `Last updated at ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`


    // Updating page after adding
    showNotes();
})

// Search
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase()
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        let cardtitle = element.getElementsByClassName("card-title")[0].innerText.toLowerCase();
        if (cardTxt.includes(inputVal) || cardtitle.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})

// Different functions
// Function to show notes
function showNotes() {
    let notesObj = getLocalStorage('notes');
    let titleObj = getLocalStorage('title');
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="title${index}" position="${index}" ondblclick="edit(this.id, this.getAttribute('position'))">${titleObj[index]}</h5>
                    <p class="card-text" id="text${index}" position="${index}" ondblclick="edit(this.id, this.getAttribute('position'))">${element}</p>                    
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to Show!`
    }
}

// function to delete a note.
function deleteNote(index) {
    let notesObj = getLocalStorage('notes');
    let titleObj = getLocalStorage('title');
    notesObj.splice(index, 1);
    titleObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(titleObj));
    showNotes()
}


// Editing existing notes
function edit(id, index) {
    let docu = document.getElementById(id);
    if (document.getElementsByClassName('textarea').length == 0) {
        docu.innerHTML = `<textarea class="textarea form-control" id="textarea">${docu.innerText}</textarea>`
    }
    // listen for the blur event
    let textarea = document.getElementById('textarea');
    textarea.focus(); // AI ne dia hai samajhna hai baki
    textarea.addEventListener('blur', function () {
        updTxt = textarea.value;
        if (id.includes('title')) {
            if (!updTxt.trim()) { alert('Title cannot be empty.') }
            else {
                let titleObj = getLocalStorage('title');
                titleObj.splice(index, 1, updTxt);
                localStorage.setItem("title", JSON.stringify(titleObj));
            }
        }
        else if (id.includes('text')) {
            let notesObj = getLocalStorage('notes');
            notesObj.splice(index, 1, updTxt);
            localStorage.setItem("notes", JSON.stringify(notesObj));
        }
        showNotes()
    })
}

// Split logic into modular function
function getLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}