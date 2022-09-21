const beforeState = document.querySelector(".before-state")
const afterState = document.querySelector(".after-state")
const ratingButtons = document.querySelectorAll("button.rate-btn")
const submitButton = document.querySelector(".submit-btn")

const ratingOutput = document.querySelector(".rating-output")

let userRating

ratingButtons.forEach(el => {
    el.addEventListener("focus", () => {
        if (el.style.backgroundColor != "var(--light-grey)") {
        el.style.backgroundColor = "var(--orange)"
        el.style.color = "white"
        } else {}
    })
    el.addEventListener("blur", () => {
        if (el.style.backgroundColor != "var(--light-grey)") {
        el.style.backgroundColor = "var(--dark-blue)"
        el.style.color = "var(--medium-grey)"
        } else {}
    })
    el.addEventListener("mouseover", () => {
        if (el.style.backgroundColor != "var(--light-grey)") {
        el.style.backgroundColor = "var(--orange)"
        el.style.color = "white"
        } else {}
    })
    el.addEventListener("mouseout", () => {
        if (el.style.backgroundColor != "var(--light-grey)") {
        el.style.backgroundColor = "var(--dark-blue)"
        el.style.color = "var(--medium-grey)"
        } else {}
    })
    el.addEventListener("click", () => {
        ratingButtons.forEach(el => {
            el.style.backgroundColor = "var(--dark-blue)"
            el.style.color = "var(--medium-grey)"           
        })
        userRating = el.innerText
        el.style.backgroundColor = "var(--light-grey)"
        el.style.color = "white"
        console.log(userRating)
        }
    )
})

submitButton.addEventListener("click", () => {
    if(userRating != undefined) {
        beforeState.style.display = "none"
        afterState.style.display = "flex"
        ratingOutput.innerText = userRating
    } else {}
})