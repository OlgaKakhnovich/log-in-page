const banner = document.getElementById("banner");
const loginContainer = document.getElementById("log-in__container");
const signupContainer = document.getElementById("sign-up__container");
const logIn = document.getElementById("log-in__form__toggler");
const signUp = document.getElementById("sign-up__form__toggler");

logIn.addEventListener("click", () => {
  banner.style.transform = "translateX(0%)";
  loginContainer.style.transform = "scale(1)";
  signupContainer.style.transform = "scale(0)";
});

signUp.addEventListener("click", () => {
  banner.style.transform = "translateX(-100%)";
  loginContainer.style.transform = "scale(0)";
  signupContainer.style.transform = "scale(1)";
});
