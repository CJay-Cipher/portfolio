const searchBarButton = document.getElementById("head-search");
const hideNavElements = document.getElementsByClassName("hide-nav");

searchBarButton.addEventListener("click", function () {
    for (let i = 0; i < hideNavElements.length; i++) {
        hideNavElements[i].style.display = "none";
    }
    document.getElementById("search-microsoft").style.display = "flex";
    document.getElementById("search-cancel").style.display = "block";
    document.getElementById("nav-action").style.flex = 5;
    document.getElementById("search-input").focus();
    document.getElementsByClassName("search-box")[0].style.border =
        "2px solid #005ca5";
});

const seachCancelButton = document.getElementById("search-cancel");
seachCancelButton.addEventListener("click", function () {
    for (let i = 0; i < hideNavElements.length; i++) {
        hideNavElements[i].style.display = "flex";
    }
    document.getElementById("search-microsoft").style.display = "none";
    document.getElementById("search-cancel").style.display = "none";
    document.getElementById("nav-action").style.flex = 2;
    document.getElementsByClassName("search-box")[0].style.border =
        "1px solid #262626";
});
