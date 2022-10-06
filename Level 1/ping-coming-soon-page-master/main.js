const userEmail = document.querySelector("#userEmail")

userEmail.addEventListener("invalid", e => {
    e.preventDefault()
    userEmail.setAttribute("data-validation", "false")
})

userEmail.addEventListener("focus", e => {
    e.preventDefault()
    userEmail.setAttribute("data-validation", "true")
})