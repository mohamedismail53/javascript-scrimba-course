let count = 0

let saved = 0

let incrementEl = document.getElementById('count-el')

let saveEl = document.getElementById('save-el')

function increment() {
    count++;
    incrementEl.innerText = count;
}

function save() {
    if (saved) {
        saveEl.innerText += (' - ' + count)
    } else {
        saveEl.innerText += (' ' + count)
    }
    saved++
    incrementEl.innerText = 0
    count = 0
}