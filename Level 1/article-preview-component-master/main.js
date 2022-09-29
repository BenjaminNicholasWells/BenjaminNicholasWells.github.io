const cardFooter = document.querySelector("#card-footer")
const socialPopup = document.querySelector("aside")
const shareBtn = document.querySelector("#shareBtn")

shareBtn.addEventListener("click", () => {
    if (cardFooter.getAttribute("data-share") == "false"
    &&
    window.innerHeight > window.innerWidth)
        cardFooter.setAttribute("data-share", "true")
        else {
        cardFooter.setAttribute("data-share", "false")
    }
})

shareBtn.addEventListener("click", () => {
    if (socialPopup.getAttribute("data-popup") == "false"
    &&
    window.innerHeight < window.innerWidth)
        socialPopup.setAttribute("data-popup", "true")
        else {
        socialPopup.setAttribute("data-popup", "false")
    }
})