const emailInput = document.querySelector(".emailInput")

emailInput.addEventListener("focus", () => {
    document.querySelector(".emailIcon").classList.add("emailIconWithColor")
})

emailInput.addEventListener("blur", () => {
    document.querySelector(".emailIcon").classList.remove("emailIconWithColor")
})

const passwordInput = document.querySelector(".passwordInput")

passwordInput.addEventListener("focus", () => {
    document.querySelector(".passwordIcon").classList.add("passwordIconWithColor")
})

passwordInput.addEventListener("blur", () => {
    document.querySelector(".passwordIcon").classList.remove("passwordIconWithColor")
})