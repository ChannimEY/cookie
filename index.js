document.addEventListener("DOMContentLoaded", () => {
  const acceptButton = document.querySelector("button");
  const declineButton = document.getElementById("btn");
  const cookieDiv = document.querySelector("div");


  if (getCookie("status") === "active") {
    cookieDiv.style.display = "none";
  }

  acceptButton.addEventListener("click", () => {
    setCookie("status", "active", 15);
    animateAndHide(cookieDiv);
  });

  declineButton.addEventListener("click", () => {
    animateAndHide(cookieDiv);
  });

  function animateAndHide(element) {
    element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    element.style.transform = "translateX(100%)";
    element.style.opacity = "0";
    setTimeout(() => {
      element.style.display = "none";
    }, 500);
  }

  function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const [cookieName, cookieValue] = cookies[i].split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return "";
  }
});
