document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault()
    create(e.target.querySelector("#new-task-description").value)
  })
});

function create(enteredInput) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTodo)
  p.textContent = `${enteredInput}  `
  btn.textContent = ' x'
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function deleteTodo(e) {
  e.target.parentNode.remove()
}

