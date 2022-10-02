const userForm = document.querySelector("#userForm")
const userEmailField = document.querySelector("#userEmailField")

userEmailField.addEventListener("invalid", e => {
    e.preventDefault()
    userForm.setAttribute("data-validation", "false")
    userEmailField.value = ""
    userEmailField.focus()
    setTimeout(() => {
        userForm.setAttribute("data-validation", "true") 
    }, 3000)
})