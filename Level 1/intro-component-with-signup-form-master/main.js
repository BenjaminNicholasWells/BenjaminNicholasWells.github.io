const userFirstName = document.querySelector("#userFirstName")
const firstNameContainer = document.querySelector("#userFirstNameContainer")
const userLastName = document.querySelector("#userLastName")
const lastNameContainer = document.querySelector("#userLastNameContainer")
const userEmail = document.querySelector("#userEmail")
const emailContainer = document.querySelector("#userEmailContainer")
const userPassword = document.querySelector("#userPassword")
const passwordContainer = document.querySelector("#userPasswordContainer")

const submitButton = document.querySelector("#submitButton")

const userSubmissions = [userFirstName, userLastName, userEmail, userPassword]
const inputContainers = [firstNameContainer, lastNameContainer, emailContainer, passwordContainer]

for (let i = 0; i < userSubmissions.length; i++) {
    userSubmissions[i].addEventListener("invalid", e => {
        e.preventDefault()
        inputContainers[i].setAttribute("data-validation", "false")
    })
}

for (let i = 0; i < userSubmissions.length; i++) {
    userSubmissions[i].addEventListener("focus", e => {
        inputContainers[i].setAttribute("data-validation", "true")
    })
}