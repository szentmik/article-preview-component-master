document.addEventListener("click", (event) => {

    const shareBtn = document.querySelector(".share-button");

    if (!shareBtn.contains(event.target)) {
        document.querySelector(".share-box").classList.remove("show-share");
        shareBtn.classList.remove("share-button-bg", "share-button-bg-mobile");
        document.querySelector("#share-btn>path").style.fill = "#6E8098";
    } else {
        document.querySelector(".share-box").classList.add("show-share");
        shareBtn.classList.add("share-button-bg", "share-button-bg-mobile");
        document.querySelector("#share-btn>path").style.fill = "#ecf2f8";
    }

});